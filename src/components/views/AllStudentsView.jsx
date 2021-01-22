import React from 'react';
import PropTypes from 'prop-types';

const allStudentsView = (props) => {
    return (
        <div className = "all-students">
            {props.allStudents.map((student) => (
                <div key = {student.id}>
                    <div className = "studentsCard">
                        <h1>{student.first_name} {student.last_name}</h1>
                        <br/>
                    </div>
                </div>
            ))}

        </div>
    )
}

allStudentsView.propTypes = {
    allStudents: PropTypes.array.isRequired,
}

export default allStudentsView;