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
      <Card style={{height:"400px", width: "300px"}}>
      <CardImg top width="100%" src={props.img_url} alt="Card image cap" style={{height:"300px"}} />
      <CardBody className="d-flex flex-column">
      <Link to={"students/" + props.id}><CardTitle tag="h5">{props.first_name}{" "}{props.last_name}</CardTitle></Link>
      </CardBody>
      </Card>
    </span>
    );
    
} 
