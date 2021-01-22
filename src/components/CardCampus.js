import React from 'react';
import {
  Card, CardBody, CardImg, CardTitle
  } from 'reactstrap';
import {
    Link
} from "react-router-dom";
export default function CardCampus(props) {
    return(
        <span>
        <Card style={{height:"220px", width:"220px"}}>
          <CardImg top width="100%" src={props.image_url} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <Link to={"campuses/" + props.id} key={props.id}>
            View Detail
            </Link>
          </CardBody>
        </Card>
      </span>
    );
} 
