import React from 'react';
import './Home.css';
import {Container, Row} from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ReviewCard from '../ReviewCard/ReviewCard';
import useUsers from '../../hooks/useUsers';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useUsers();
    const bestThree = users.slice(0, 3);
    const navigate = useNavigate();

    return (
        <Container className='mt-4'>
            <Banner></Banner>
            <hr className='brand-color'/>
            
            {/* Customer Review Section */}
            <div className='text-center'>
                <h2 className='mt-4 brand-color mb-5'>Customer Reviews({bestThree.length})</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        bestThree.map(user => <ReviewCard
                            key={user.id}
                            user={user}
                        ></ReviewCard>)
                    }
                </Row>
                <button onClick={() => navigate('/review')} className='raveMe-btn2'>See All Reviews</button>
            </div>
        </Container>
    );
};

export default Home;