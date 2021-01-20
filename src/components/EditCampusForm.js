import React from 'react';

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
      <form>
      Edit Campus:
      <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Name"
      onChange={enterName}/>
      </div>
      <div class="form-group">
      <label for="description">Description:</label>
      <input type="text" class="form-control" id="descriptiont" aria-describedby="description" 
      placeholder="Enter Description" onChange={enterDescription}/>
      </div>
      <div class="form-group">
      <label for="address">Address:</label>
      <input type="text" class="form-control" id="address" aria-describedby="address" 
      placeholder="Enter Address" onChange={enterAddress}/>
      </div>
      <div class="form-group">
      <label for="url">Url:</label>
      <input type="text" class="form-control" id="url" aria-describedby="url" 
      placeholder="Enter Url" onChange={enterUrl}/>
      </div>
      <button type="submit" class="btn btn-primary" onClick={props.editCampus}>Submit</button>
      </form>    
    );
}
