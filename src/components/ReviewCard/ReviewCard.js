import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./ReviewCard.css";

const ReviewCard = (props) => {
    // Destructuring object
    const {name, description, rating, picture} = props.user;
    return (
        <Col>
            <div className='reviewCard position-relative mb-4'>
                <img src={picture} alt="Users_Picture" className='reviewCardImg position-absolute top-0 start-50 translate-middle' />
                <Card.Body>
                    <Card.Title className='mt-3'>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-warning">{rating} Star</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </div>
        </Col>
    );
};

export default ReviewCard;