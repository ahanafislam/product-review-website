import React from 'react';
import page404 from '../../assets/images/page_not.png'
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <div className='w-50 position-absolute top-50 start-50 translate-middle'>
                <img src={page404} alt="Page_Not_Found" className='img-fluid'/>
                <h1 className='text-center brand-color'>Sorry Page Not Found.</h1>
            </div>
        </Container>
    );
};

export default NotFound;