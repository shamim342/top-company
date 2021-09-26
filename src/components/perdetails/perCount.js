import React from 'react';
import './percount.css';

const PerCount = (props) => {
    console.log(props);
    const {img , name}=props.uniqeCompany;
    return (
        <div className='percount-section'>
            <img className='per-img' src={img} alt="" />
            <p className='mx-auto text-white fw-bold my-auto'>{name}</p>
        </div>
    );
};

export default PerCount;