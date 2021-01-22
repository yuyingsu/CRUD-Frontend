import React from 'react';
import PropTypes from 'prop-types';

const allCampusesView = (props) => {
    return(
        <div className = "all-campuses">
            {props.allCampuses.map((campus) => (
                <div key = {campus.id}>
                    <div className = "campusCard">
                        <img
                            src = {campus.image_url}
                            alt = {campus.name}
                        />
                        <h1>{campus.name}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

allCampusesView.propTypes = {
    allCampuses: PropTypes.array.isRequired,
}

export default allCampusesView;