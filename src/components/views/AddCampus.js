import React from 'react';
import Axios from 'axios';



class AddCampus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '', name: '',description:''};
    }
    onFormSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.address)
        await Axios.post("http://localhost:5000/campus", {
            address: this.state.address,
            name: this.state.name,
            description:this.state.description
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} action="/campus" method="POST">
                    <h1>Add A Campus</h1>
                    <div>
                        <label>Name of the campus</label>
                        <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} type="text" />
                    </div>
                    <div>
                        <label>Name of the Address</label>
                        <input value={this.state.address} type="text" onChange={e => this.setState({ address: e.target.value })} />
                    </div>
                    <div>
                        <label>Description of the Address</label>
                        <input value={this.state.description} type="text" onChange={e => this.setState({ description: e.target.value })} />
                    </div>
                    <button type="submit">Add a new campus</button>
                </form>
            </div>
        )
    }
}

export default AddCampus;