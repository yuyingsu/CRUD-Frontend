import React, { useState } from 'react';
import EditCampusForm from './EditCampusForm';

export default function Campus(props) {

    const [show, setShow] = useState(false);

    const editCampus = () => {
            props.editCampus(props.id);
            setShow(true);
        }
    const deleteCampus = () => {
            props.deleteCampus(props.id);
        }

    return(
    <div className="CounterControl">
       <img
        className="img-fluid w-100 h-100"
        src={props.img_url}
      />
      <span>Campus Name: {props.name}</span>
      <span>Campus Address: {props.address}</span>
      <span>Campus Description: {props.description}</span>
      <button onClick={editCampus}>Edit</button>
      <button onClick={deleteCampus}>Delete</button>
      {show &&
      <EditCampusForm enterAddress={props.inputAddress} enterUrl={props.inputUrl} enterDescription={props.inputDescription} 
      enterName={props.inputName} editCampus={props.editCampus}/>
      }
    </div>
    );
} 
