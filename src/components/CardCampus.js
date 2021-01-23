import { connect } from 'react-redux';
import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from "react-router-dom";


function CardCampus(props) {
  const studentList = props.std.filter(student=> student.id==props.id);  
  return(
        <span>
        <Card style={{height:"400px", width: "300px"}}>
        <CardImg top width="100%" src={props.image_url} alt="Card image cap" style={{height:"300px"}}/>
        <CardBody className="d-flex flex-column">
        <Link to={"campuses/" + props.id}><CardTitle tag="h5">{props.name}</CardTitle></Link>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Students in this campus: {studentList.length}</CardSubtitle>
        </CardBody>
        </Card>
      </span>
    );
} 

const mapStateToProps = state => {
  return {
      std: state.std.students
  }
};

export default connect(mapStateToProps, null)(CardCampus);
