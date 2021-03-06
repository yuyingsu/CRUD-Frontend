import { FETCH_CAMPUSES, FETCH_STUDENTS, NEW_CAMPUS, NEW_STUDENT, DELETE_CAMPUS,
DELETE_STUDENT, UPDATE_CAMPUS, UPDATE_STUDENT } from '../constants/types';
export const fetchCampuses = () => dispatch => {
    fetch('https://ttp-backend-db.herokuapp.com/campus')
      .then(res => res.json())
      .then(campuses =>
        dispatch({
          type: FETCH_CAMPUSES,
          payload: campuses
        })
      ).catch(error => console.log(error));
  }
  
export const addCampus = campusData => dispatch => {
    fetch('https://ttp-backend-db.herokuapp.com/campus', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(campusData)
    })
      .then(res => res.json())
      .then(campus =>
        dispatch({
          type: NEW_CAMPUS,
          payload: campus
        })
      );
  }

export const deleteCampus = id => dispatch => {
    fetch('https://ttp-backend-db.herokuapp.com/campus/'+id, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(campus =>
        dispatch({
          type: DELETE_CAMPUS,
          payload: campus
        })
      );
  }

export const updateCampus = (campus,id) => dispatch => {
    fetch('https://ttp-backend-db.herokuapp.com/campus/'+id, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(campus)
    })
      .then(res => res.json())
      .then(campus =>
        dispatch({
          type: UPDATE_CAMPUS,
          payload: campus
        })
      );
  }

  export const fetchStudents = () => dispatch => {
    fetch('https://ttp-backend-db.herokuapp.com/student')
      .then(res => res.json())
      .then(students =>
        dispatch({
          type: FETCH_STUDENTS,
          payload: students
        })
      );
  }
  
export const addStudent = studentData => dispatch => {
    fetch('https://ttp-backend-db.herokuapp.com/student', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(studentData)
    })
      .then(res => res.json())
      .then(student =>
        dispatch({
          type: NEW_STUDENT,
          payload: student
        })
      );
  }

export const deleteStudent = id => dispatch => {
    fetch('https://ttp-backend-db.herokuapp.com/student/'+id, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(student =>
        dispatch({
          type: DELETE_STUDENT,
          payload: student
        })
      );
  }

export const updateStudent = (student,id) => dispatch => {
    fetch('https://ttp-backend-db.herokuapp.com/student/'+id, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(student)
    })
      .then(res => res.json())
      .then(student =>
        dispatch({
          type: UPDATE_STUDENT,
          payload: student
        })
      );
  }


