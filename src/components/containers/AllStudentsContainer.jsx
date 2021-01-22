import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchAllStudentsThunk} from '../../thunks';
import {AllStudentsView} from '../views';

//SMART CONTAINER
class AllStudentsContainer extends Component{
    componentDidMount(){
        this.props.fetchAllStudents();
    }

    render(){
        return(
            <AllStudentsView allStudents = {this.props.allStudents}/>
        )
    }
}

const mapState = (state) => {
    return{
        allStudents: state.allStudents,
    }
}

const mapDispatch = (dispatch) => {
    return{
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
    }
}

AllStudentsContainer.PropTypes = {
    allStudents: PropTypes.array.isRequired,
    fetchAllStudents: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(AllStudentsContainer)