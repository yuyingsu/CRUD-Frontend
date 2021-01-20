import * as actionTypes from '../types';
const initialState = {
    campuses:[],
    newCampus:{},
    deletedCampus:{},
    updatedCampus:{}
};

const campusesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CAMPUSES:
        return {
            ...state,
            campuses: action.payload
        };
        case actionTypes.NEW_CAMPUS:
        return {
            ...state,
            newCampus: action.payload
        };
        case actionTypes.DELETE_CAMPUS:
        return {
            ...state,
            deletedCampus: action.payload
        };
        case actionTypes.UPDATE_CAMPUS:
        return {
            ...state,
            updatedCampus: action.payload
        };
        default:
        return state;
        }
};

export default campusesReducer;