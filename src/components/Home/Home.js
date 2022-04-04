import React from 'react';
import './Home.css';
import {Container} from 'react-bootstrap';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <Container className='mt-4'>
            <Banner></Banner>
        </Container>
    );
};

export default Home;