import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='mb-2 p-3 bg-custom-header  w-75 mx-auto'>
            <h2> <span className='text-danger text-center'>Top Bike</span> Company</h2>
            <div className='mb-1'>
                <p className='bottom-line'></p>
            </div>
            <h4>Total Targeted Revenue - <span className='fw-bold text-primary'> 100 Billion $</span> </h4>
        </div>
    );
};

export default Header;