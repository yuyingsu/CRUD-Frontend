import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/types';
import Campus from './Campus'
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

  inputAmount = (amount) => {
    this.setState({amount:amount});
  }

  inputDescription = (description) =>{
    this.setState({description:description});
  }

  inputName = (name) => {
    this.setState({name:name});
  }

  inputDescription = (description) =>{
    this.setState({description:description});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newCps) {
      this.props.cps.push(nextProps.newCps);
    }
    if (nextProps.deletedCps) {
        this.props.cps.filter(campus => campus.id !== nextProps.deletedCps.id)
    }
    if (nextProps.updatedCps) {
        this.props.cps[nextProps.updatedCps.id]=nextProps.updatedCps
    }
    }

    componentDidMount = () =>{
      this.props.fetchCampuses();  
    }

   deleteCampus = (id,e) => {
        e.preventDefault();
        this.props.deleteCampus(id);
    }

    editCampus = (id,e) => {
        e.preventDefault();
        const campus = {
            description: this.state.description,
            img_url: this.state.url,
            name: this.state.name,
            address: this.state.address
          };
      this.props.editCampus(id,campus);
    }

  render() {
    console.log(this.props.cps);
    const res=this.props.cps.map((campus ) => (
        <Campus
          id={campus.id}
          description={campus.description}
          img_url={campus.img_url}
          name={campus.name}
          address={campus.address}
          editCampus={this.editCampus}
          deleteCampus={this.deleteCampus}
          key={campus.id}
        />));
    const result = {
            address: this.state.address,
            amount: this.state.description,
            description: this.state.description,
            url: this.state.url
    }    
    return (
        <div>
            <h1>Campuses</h1>
            <form>
            <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Name"
            onChange={this.enterName}/>
            </div>
            <div class="form-group">
            <label for="description">Description:</label>
            <input type="text" class="form-control" id="descriptiont" aria-describedby="description" 
            placeholder="Enter Description" onChange={this.enterDescription}/>
            </div>
            <div class="form-group">
            <label for="address">Address:</label>
            <input type="text" class="form-control" id="address" aria-describedby="address" 
            placeholder="Enter Address" onChange={this.enterAddress}/>
            </div>
            <div class="form-group">
            <label for="url">Url:</label>
            <input type="text" class="form-control" id="url" aria-describedby="url" 
            placeholder="Enter Url" onChange={this.enterUrl}/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={this.props.addCampus(result)}>Submit</button>
            </form>        
        </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        cps: state.cps.campuses,
        newCps: state.cps.newCampus,
        deletedCps: state.cps.deletedCampus,
        updatedCps: state.cps.updatedCampus
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editCampus: (id,result) => dispatch({type: actionTypes.UPDATE_CAMPUS, campus:result, id: id}),
        deleteCampus: (id) => dispatch({type: actionTypes.DELETE_CAMPUS, id:id}),
        addCampus: (result) => dispatch({type: actionTypes.NEW_CAMPUS, campusData: result}),
        fetchCampuses: () => dispatch({type: actionTypes.FETCH_CAMPUSES})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);