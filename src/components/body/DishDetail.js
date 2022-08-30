import React from 'react';
import {
    Card, CardBody, CardImg,
    CardImgOverlay, CardTitle,
    CardText, CardHeader,
    Button
} from 'reactstrap';

const DishDetail = props => {

    return (
        <Card style={{ marginTop: "15px" }}>
            <CardHeader>Details of {props.dish.name}</CardHeader>
            <CardImg top alt={props.dish.name} src={props.dish.image} />
            <CardBody style={{ textAlign: "left" }}>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>
                    <p> {props.dish.description}</p>
                    <p>Price : {props.dish.price}/-</p>
                </CardText>
                <Button color="primary">Load Comments</Button>
            </CardBody>
        </Card>
    );
}

export default DishDetail;