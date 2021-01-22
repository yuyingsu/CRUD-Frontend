import * as actionTypes from '../constants/types';
const initialState = {
    campuses:[]
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
            campuses: state.campuses.concat(action.payload)
        };
        case actionTypes.DELETE_CAMPUS:
        const deletedCampuses = [...state.campuses];
        return {
            ...state,
            campuses: deletedCampuses.filter(campus => campus.id !== action.payload.id)
        };
        case actionTypes.UPDATE_CAMPUS:
        const newCampuses = [...state.campuses];
        return {
            ...state,
            campuses: newCampuses.map(campus => campus.id === action.payload.id ? action.payload : campus)
        };
        default:
        return state;
        }

};

export default campusesReducer;