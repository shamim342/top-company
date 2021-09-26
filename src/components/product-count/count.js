import React from 'react';
import PerCount from '../perdetails/perCount';

const Count = (props) => {
    const count = props.details;
    console.log(count);
    let totalRevenue=0;
    let uniqeCompanies =[];
    for (const detail of count ) {
        console.log(detail);
        if (uniqeCompanies.indexOf(detail)===-1) {
            uniqeCompanies.push(detail);
            totalRevenue = totalRevenue + detail.Revenue;
        }else{
            
        }
    }
    console.log(uniqeCompanies);
    return (
        <div className='bg-custom m-1 sticky-top'>
            <h4 className='text-primary'>Revenue Count For Companies</h4>
            <p>Added Company : {uniqeCompanies.length}</p>
            <p>total Revenue :<br/> {totalRevenue.toFixed(2)} Billion $</p>
            <div>
                {
                    uniqeCompanies.map(uniqeCompany =><PerCount key={uniqeCompany.rank} uniqeCompany={uniqeCompany}></PerCount>)
                }
            
            </div>
        </div>
    );
};

export default Count;