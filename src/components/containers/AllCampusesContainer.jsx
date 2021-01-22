import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchAllCampusesThunk} from '../../thunks';
import {AllCampusesView} from '../views';


//Smart container starts here:
class AllCampusesContainer extends Component{
    componentDidMount(){
        this.props.fetchAllCampuses();
    }

    render(){
        return(
            <AllCampusesView allCampuses = {this.props.allCampuses}/>
        )
    }
}

const mapState = (state) => {
    return{
        allCampuses: state.allCampuses,
    }
}

const mapDispatch = (dispatch) =>{
    return{
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    }
}

AllCampusesContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(AllCampusesContainer);

