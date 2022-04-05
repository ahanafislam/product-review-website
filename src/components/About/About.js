import React from 'react';
import underConstruction from '../../assets/images/under_construction.png';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className='w-50 me-auto ms-auto'>
                <img src={underConstruction} alt="Page_Not_Found" className='img-fluid'/>
                <h2 className='text-center brand-color'>This page is under construction.</h2>
            </div>
        </Container>
    );
};

export default About;