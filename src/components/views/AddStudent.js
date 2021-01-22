import React from 'react';
import Axios from 'axios';

class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {first_name:'',last_name:'',email:''}
    }
    onFormSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:5000/student", {
            last_name: this.state.last_name,
            first_name: this.state.first_name,
            email:this.state.email
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} action="/student" method="POST">
                    <h1>Add A student</h1>
                    <div>
                        <label>First Name: </label>
                        <input value={this.state.name} onChange={e => this.setState({ first_name: e.target.value })} type="text" />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input value={this.state.address} type="text" onChange={e => this.setState({ last_name: e.target.value })} />
                    </div>
                    <div>
                        <label>Email Address </label>
                        <input value={this.state.description} type="text" onChange={e => this.setState({ email: e.target.value })} />
                    </div>
                    <button type="submit">Add a new student</button>
                </form>
            </div>
        )
    }
}

export default AddStudent;