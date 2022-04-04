import React from 'react';
import duke_pic from '../../assets/images/duke_1290.png';

const Banner = () => {
    return (
        <div className="d-flex flex-column flex-md-row  justify-content-between align-items-center">
            <div className='order-1 order-md-0 mt-4 mt-md-0 w-75'>
                <h1 className='brand-color'>RaveMe</h1>
                <h3>KTM 1290 Super Duke R 2022</h3>
                <p>The KTM 1290 SUPER DUKE R EVO is a BEAST - evolved. Boasting intuitive Semi-Active Suspension Technology (SAT), this BEAST not only adapts to the road surface but also to the rider's inputs - making it a cold, calculated hunter. A frightening prospect for any would-be challenger.</p>
                <button className='raveMe-btn'>Buy Now</button>
            </div>
            <div className='order-0 order-md-1'>
                <img src={duke_pic} alt='Duke' className='img-fluid'/>
            </div>
        </div>
    );
};

export default Banner;