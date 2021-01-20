import * as actionTypes from '../types';
const initialState = {
    students:[],
    newStudent:{},
    deletedStudent:{},
    updatedStudent:{}
};

const studentsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_STUDENTS:
        return {
            ...state,
            students: action.payload
        };
        case actionTypes.NEW_STUDENT:
        return {
            ...state,
            newStudent: action.payload
        };
        case actionTypes.DELETE_STUDENT:
        return {
            ...state,
            deletedStudent: action.payload
        };
        case actionTypes.UPDATE_STUDENT:
        return {
            ...state,
            updatedStudent: action.payload
        };
        default:
        return state;
        }
};

export default studentsReducer;