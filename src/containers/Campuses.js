import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCampus, deleteCampus } from '../actions/actions';
import CardCampus from '../components/CardCampus';
import { Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap'; 
class Campuses extends Component {

  state = {
    address:"",
    name:"",
    description:"",
    url:""
  }
  enterAddress = (e) =>{
    this.setState({address:e.target.value})
  }

  enterName = (e) =>{
    this.setState({name:e.target.value})
  }

  enterDescription = (e) =>{
    this.setState({description:e.target.value})
  }

  enterUrl = (e) =>{
    this.setState({url:e.target.value})
  }
    
  submitCampus = (e) =>{
        e.preventDefault();
        const result = {
            address: this.state.address,
            name: this.state.name,
            description: this.state.description,
            img_url: this.state.url
        }
        this.props.addCampus(result);
        this.setState({show:false});
        this.setState({address:"", description:"", url:"", name:""});
    }

    deleteCampus = (id) =>{
        this.props.deleteCampus(id);
    }

    show = () =>{
        this.setState({show:true});
    }

    render() {
    console.log(this.state);
    const res=this.props.cps.map((campus,index) => (
        <span>
        <Col xs="12" s="6" m="3" l="3" xl="3">
        <CardCampus address={campus.address} image_url={campus.image_url} name={campus.name} key={campus.id} id={campus.id}/>
        <div><Button style={{margin:"40px"}} onClick={() => this.deleteCampus(campus.id)}>Delete</Button></div>
        </Col>
        </span>));  
    return (
        <div>
            <h1>Campuses</h1>
            <button type="button" class="btn btn-primary" onClick={this.show} style={{margin:"20px"}}>Add Campus</button>
            {!this.state.show &&
            <Container>
            <Row className="no-gutters">
            {res}
            </Row>
            </Container>}
            {this.state.show &&
                 <AvForm  onValidSubmit={this.submitCampus}>
                 <AvField name="name" label="Name:" type="text" errorMessage="Name can't be empty" validate={{
                    required: {value: true}}} onChange={this.enterName}/>
                 <AvField name="address" label="Address:" type="text" errorMessage="Address can't be empty" validate={{
                    required: {value: true}}} onChange={this.enterAddress}/>
                 <AvField name="description" label="Description:" type="text" errorMessage="Description can't be empty" validate={{
                    required: {value: true}}} onChange={this.enterDescription}/>
                 <AvField name="url" label="Url:" type="text" validate={{
                    required: {value: false}}} onChange={this.enterUrl}/>
                <Button color="primary">Submit</Button>
              </AvForm>  
            }        
        </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        cps: state.cps.campuses
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCampus: (result) => dispatch(addCampus(result)),
        deleteCampus: (id) => dispatch(deleteCampus(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);