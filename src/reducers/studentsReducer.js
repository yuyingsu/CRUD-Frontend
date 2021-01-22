import * as actionTypes from '../constants/types';
const initialState = {
    students:[]
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
            students: state.students.concat(action.payload)
        };
        case actionTypes.DELETE_STUDENT:
        const deletedStudents = [...state.students];
        return {
            ...state,
            students: deletedStudents.filter(student => student.id !== action.payload.id)
        };
        case actionTypes.UPDATE_STUDENT:
        const newStudents = [...state.students];
        return {
            ...state,
            students: newStudents.map(student => student.id === action.payload.id ? action.payload : student)
        };
        default:
        return state;
        }
};

export default studentsReducer;