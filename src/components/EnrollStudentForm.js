import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateStudent } from '../actions/actions';
import { AvField, AvForm } from 'availity-reactstrap-validation';
const EnrollStudentForm = (props) => {
    const [id, setId] = useState(0);
  
    const addToCampus = (id) => {
        const newStudent = {
            campus_id:props.id
        }
        console.log(id);
        props.updateStudent(newStudent,id);
    }
    
    const res=props.std.map((student,index) => (
        <option value={student.id}>{student.first_name}{" "}{student.last_name}</option>
    ));
    return(
    <div>
         <AvForm>
         <AvField type="select" name="select" label="Option" helpMessage="Select Student To Enroll." 
         onChange={(e)=>{console.log(e.target.value); setId(e.target.value)}}>
         <option value={0}>Select Student</option>
         {res}
         </AvField>
         </AvForm>
         <button onClick={()=>{addToCampus(id)}}>Add To Campus</button>
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
        updateStudent: (result,id) => dispatch(updateStudent(result,id))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(EnrollStudentForm);
