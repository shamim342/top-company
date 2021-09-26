import React from 'react';

const Count = (props) => {
    
    let totalRevenue=0;
    for (const detail of props.details ) {
        totalRevenue = totalRevenue + detail.Revenue;
    }
    return (
        <div className='bg-custom m-1 sticky-top'>
            <h4>Revenue Count For Companies</h4>
            <p>Total Company : {props.details.length}</p>
            <p>total Revenue :<br/> {totalRevenue.toFixed(2)} Billion</p>
        </div>
    );
};

export default Count;