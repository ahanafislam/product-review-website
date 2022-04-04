import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';
import useUsers from '../../hooks/useUsers';

const Reviews = () => {
    const [users, setUsers] = useUsers();

    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <h2 className='mt-4 brand-color mb-5'>Customer Reviews</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        users.map(user => <ReviewCard
                            key={user.id}
                            user={user}
                        ></ReviewCard>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Reviews;