import React from 'react';
import {
    Card, CardBody, CardImg,
    CardImgOverlay, CardTitle,
    CardText, CardHeader,
    Button
} from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = props => {

    return (
        <Card style={{ marginTop: "15px" }}>

            <CardBody style={{ textAlign: "left" }}>
                <CardHeader>Details of {props.dish.name}</CardHeader>
                <CardImg alt={props.dish.name} src={props.dish.image} />
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}  </CardText>
                <CardText>Price : {props.dish.price}/-</CardText>
                <hr />

                <LoadComments comments={props.dish.comments} />

            </CardBody>
        </Card>
    );
}

export default DishDetail;