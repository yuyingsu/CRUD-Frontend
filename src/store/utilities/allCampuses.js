import axios from 'axios';

//ACTION TYPES:
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";
//will add add_campus, edit_campus, and delete after...

//ACTION CREATORS:
const fetchAllCampuses = (campuses) =>{
    return{
        type: FETCH_ALL_CAMPUSES,
        payload: campuses,
    }
}

//THUNK CREATORS:
export const fetchAllCampusesThunk = () => (dispatch) =>{
    return axios
    .get('http://localhost:5000/campus')
    .then((res) => res.data)
    .then((campuses) => dispatch(fetchAllCampuses(campuses)))
    .catch((err) => console.error(err));
}

//REDUCERS
const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CAMPUSES:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;