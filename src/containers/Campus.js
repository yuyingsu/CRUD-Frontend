import React, { useState } from 'react';
import EditCampusForm from '../components/EditCampusForm';
import { connect } from 'react-redux';
import { updateCampus, updateStudent } from '../actions/actions';
import EnrollStudentForm from '../components/EnrollStudentForm';
import { Link } from 'react-router-dom';
const Campus = (props) => {

    const [show, setShow] = useState(false);
    const [url, setUrl] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    const inputAddress = (address) =>{
        setAddress(address);
    }
    const inputDescription = (description) =>{
        setDescription(description);
    }
    const inputUrl = (url) =>{
        setUrl(url);
    }
    const inputName = (name) =>{
        setName(name);
    }
    const editCampus = (e) => {
            e.preventDefault();
            const result = {
            description: description,
            image_url: url,
            name: name,
            address: address
          };
            props.updateCampus(result,props.id);
            setShow(false);
        }
    const showForm = () =>{
        setShow(true);
    }

    const deleteStudent = (id) => {
        const newStudent = {
            campus_id: null
        }
        props.updateStudent(newStudent,id);
    }

    const campus = props.cps.find(campus => campus.id == props.id);
    const studentList= props.std.filter(student => student.campus_id == props.id);
    let res=null;
    if(studentList.length==0){
        res=<div>No student in this campus.</div>;
    }else{
        res=studentList.map((student,index) => (
            <div>
                <Link to={'/students/'+student.id} style={{margin:"10px"}}>{student.first_name} {" "} {student.last_name}</Link>
                <button onClick={() => {deleteStudent(student.id)}}>Delete</button>
            </div>));  
    }
    return(
    <div>
       {!show &&
        <div class="container">
        <div class="row">
        <div class="col">
        <img style={{height:"300px", width: "300px", padding:"50px" }}
        src={campus.image_url}
        />
        </div>
        </div>
        <div class="row">
        <div class="col">
        <span>Campus Name: {campus.name}</span>
        </div>
        <div class="col">
        <span>Campus Address: {campus.address}</span>
        </div>
        <div class="col">
        <span>Campus Description: {campus.description}</span>
        </div>
        </div>
        <div class="row">
        <div class="col">
        <button type="button" class="btn btn-light" style={{margin:"20px"}} onClick={showForm}>Edit</button>
        </div>
        </div>
        <EnrollStudentForm id={props.id}/>
        <div style={{margin:"20px"}}>
        Students in this Campus:       
        {res}
        </div>
        </div>
      }
      {show &&
      <EditCampusForm inputAddress={inputAddress} inputUrl={inputUrl} inputDescription={inputDescription} 
      inputName={inputName} editCampus={editCampus}/>
      }
      <Link to={'/'}>Back To Home</Link>
    </div>
    );
}

const mapStateToProps = state => {
    return {
        cps: state.cps.campuses,
        std: state.std.students
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCampus: (result,id) => dispatch(updateCampus(result,id)),
        updateStudent: (result,id) => dispatch(updateStudent(result,id))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Campus);
