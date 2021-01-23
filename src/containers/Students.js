import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addStudent, deleteStudent } from '../actions/actions';
import CardStudent from '../components/CardStudent';
import { Container, Row, Col } from 'reactstrap'; 
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap'; 
class Students extends Component {

  state = {
    firstName:"",
    lastName:"",
    gpa:0,
    email:"",
    url:""
  }
  enterEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  enterLastName = (e) =>{
    this.setState({lastName:e.target.value})
  }

  enterFirstName = (e) =>{
    this.setState({firstName:e.target.value})
  }

  enterGpa = (e) =>{
    this.setState({gpa:e.target.value})
  }

  enterUrl = (e) =>{
    this.setState({url:e.target.value})
  }
    
  submitStudent = (e) =>{
        e.preventDefault();
        const result = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            gpa: this.state.gpa,
            email: this.state.email,
            img_url: this.state.url
        }
        this.props.addStudent(result);
        this.setState({show:false});
        this.setState({firstName:"", lastName:"", gpa:"", email:"", img_url:""});
    }

    deleteStudent = (id) =>{
        this.props.deleteStudent(id);
    }

    show = () =>{
        this.setState({show:true});
    }

    render() {
    console.log(this.props.sds);
    const res=this.props.sds.map((student,index) => (
        <span>
        <Col xs="12" s="6" m="3" l="3" xl="3">
        <CardStudent first_name={student.first_name} img_url={student.image_url} last_name={student.last_name} key={student.id} id={student.id}/>
        <Button style={{margin:"40px"}} onClick={() => this.deleteStudent(student.id)}>Delete</Button>
        </Col>
        </span>));  
    return (
        <div>
            <h1>Students</h1>
            <button type="button" class="btn btn-primary" onClick={this.show} style={{margin:"20px"}}>Add Student</button>
            {!this.state.show &&
            <Container>
            <Row className="no-gutters">
            {res}
            </Row>
            </Container>
            }
            {this.state.show &&
                 <AvForm onValidSubmit={this.submitStudent}> 
                 <AvField name="fname" label="First Name:" type="text" errorMessage="First name can't be empty" validate={{
                    required: {value: true}}} onChange={this.enterFirstName}/>
                 <AvField name="lname" label="Last Name:" type="text" errorMessage="Last name can't be empty" validate={{
                    required: {value: true}}} onChange={this.enterLastName}/>
                 <AvField name="email" label="Email:" type="email" errorMessage="Invalid email" validate={{
                    required: {value: true}}} onChange={this.enterEmail}/>
                 <AvField name="gpa" label="Gpa:" type="text" errorMessage="Invalid Gpa" min="0" max="4" validate={{
                    required: {value: true}}} onChange={this.enterGpa}/>
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
        sds: state.std.students
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addStudent: (result) => dispatch(addStudent(result)),
        deleteStudent: (id) => dispatch(deleteStudent(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
