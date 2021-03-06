import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap'; 
export default function EditStudentForm(props) {

        const enterFirstName = (e) =>{
          props.inputFirstName(e.target.value);
        }
        const enterLastName = (e) =>{
          props.inputLastName(e.target.value);
        }
        const enterGpa = (e) =>{
          props.inputGpa(e.target.value);
        }
        const enterUrl = (e) =>{
          props.inputUrl(e.target.value);
        }
        const enterEmail = (e) =>{
            props.inputEmail(e.target.value);
          }

    return(
      <AvForm onValidSubmit={props.editStudent}>
        Edit Student:
      <AvField name="name" label="First Name:" type="text" errorMessage="First name can't be empty" validate={{
         required: {value: true}}} onChange={enterFirstName} value={props.first_name}/>
      <AvField name="name" label="Last Name:" type="text" errorMessage="Last name can't be empty" validate={{
         required: {value: true}}} onChange={enterLastName} value={props.last_name}/>
      <AvField name="email" label="Email:" type="email" errorMessage="Invalid email" validate={{
         required: {value: true}}} onChange={enterEmail} value={props.email}/>
      <AvField name="gpa" label="Gpa:" type="number" errorMessage="Invalid Gpa" min="0" max="4" validate={{
         required: {value: true}}} onChange={enterGpa} value={props.gpa}/>
      <AvField name="url" label="Url:" type="text" validate={{
         required: {value: false}}} onChange={enterUrl} value={props.url}/>
     <Button color="primary">Submit</Button>
   </AvForm> 
    );
}