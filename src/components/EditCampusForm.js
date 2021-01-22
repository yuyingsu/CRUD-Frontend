import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
export default function EditCampusForm(props) {

        const enterName = (e) =>{
          props.inputName(e.target.value);
        }
        const enterDescription = (e) =>{
          props.inputDescription(e.target.value);
        }
        const enterUrl = (e) =>{
          props.inputUrl(e.target.value);
        }
        const enterAddress = (e) =>{
          props.inputAddress(e.target.value);
        }

    return(
       <AvForm onValidSubmit={props.editCampus}>
         Edit Campus:
        <AvField name="name" label="Name:" type="text" errorMessage="Name can't be empty" validate={{
           required: {value: true}}} onChange={enterName}/>
        <AvField name="address" label="Address:" type="text" errorMessage="Address can't be empty" validate={{
           required: {value: true}}} onChange={enterAddress}/>
        <AvField name="description" label="Description:" type="text" errorMessage="Description can't be empty" validate={{
           required: {value: true}}} onChange={enterDescription}/>
        <AvField name="url" label="Url:" type="text" validate={{
           required: {value: false}}} onChange={enterUrl}/>
       <Button color="primary">Submit</Button>
     </AvForm>   
    );
}
