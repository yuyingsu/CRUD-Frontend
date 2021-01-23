import React, { useState } from 'react';
import EditStudentForm from '../components/EditStudentForm';
import { connect } from 'react-redux';
import { updateStudent } from '../actions/actions';
import { Link } from 'react-router-dom';
const Student = (props) => {

    const [show, setShow] = useState(false);
    const [gpa, setGpa] = useState(0);
    const [url, setUrl] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const inputEmail = (email) =>{
        setEmail(email);
    }
    const inputFirstName = (firstName) =>{
        setFirstName(firstName);
    }
    const inputLastName = (lastName) =>{
        setLastName(lastName);
    }
    const inputGpa = (gpa) =>{
        setGpa(gpa);
    }
    const inputUrl = (url) =>{
        setUrl(url);
    }
    const editStudent = (e) => {
            e.preventDefault();
            const result = {
            first_name: firstName,
            last_name: lastName,
            image_url: url,
            gpa: gpa,
            email: email
          };
            props.updateStudent(result,props.id);
            setShow(false);
        }
    const showForm = () =>{
        setShow(true);
    }

    const student = props.sds.find(student => student.id == props.id);
    const campus = props.cps.find(campus => campus.id == student.campus_id);
    let message = null;
    if(campus){
        message = <div>The student enrolled in <Link to={"/campuses/"+campus.id}>{campus.name}</Link>.</div>
    }else{
        message = <div>Not enrolled in campus!</div>
    }
    return(
    <div className="CounterControl">
       {!show &&
        <div class="container">
        <div class="row">
        <div class="col">
        <img style={{height:"300px", width: "300px", padding:"50px" }}
        src={student.image_url}
        />
        </div>
        </div>
        <div class="row">
        <div class="col">
        <span>First Name: {student.first_name}</span>
        </div>
        <div class="col">
        <span>Last Name: {student.last_name}</span>
        </div>
        <div class="col">
        <span>Email: {student.email}</span>
        </div>
        <div class="col">
        <span>Gpa: {student.gpa}</span>
        </div>
        </div>
        <div class="row">
        <div class="col">
        <button type="button" class="btn btn-light" style={{margin:"20px"}} onClick={showForm}>Edit</button>
        </div>
        </div>
        </div>
      }
      {show &&
      <EditStudentForm inputEmail={inputEmail} inputUrl={inputUrl} inputFirstName={inputFirstName} inputLastName={inputLastName}
      inputGpa={inputGpa} editStudent={editStudent} url={student.image_url} first_name={student.first_name} 
      last_name={student.last_name} gpa={student.gpa} email={student.email}/>
      }
      {message}
    </div>
    );
}

const mapStateToProps = state => {
    return {
        sds: state.std.students,
        cps: state.cps.campuses
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateStudent: (result,id) => dispatch(updateStudent(result,id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Student);
