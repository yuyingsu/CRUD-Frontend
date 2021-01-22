import React from 'react';
import {
    Card, CardBody, CardImg ,CardTitle
  } from 'reactstrap';
import {
    Link,
} from "react-router-dom";
export default function CardStudent(props) {
    return(
        <span>
        <Card style={{height:"220px", width:"220px"}}>
          <CardImg top width="100%" src={props.img_url} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{props.first_name}{" "}{props.last_name}</CardTitle>
            <Link to={"students/" + props.id} key={props.id}>
            View Detail
            </Link>
          </CardBody>
        </Card>
      </span>
    );
} 
