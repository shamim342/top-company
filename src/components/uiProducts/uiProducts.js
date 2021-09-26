import React from 'react';
import { useEffect, useState } from 'react';
import Count from '../product-count/count';
import Product from '../product/product';
import './uiProducts.css'

const UiProducts = () => {
    const [companies,setCompany]= useState([]);
    const [companyDetails , setCompanyDetails]=useState([]);
    useEffect(()=>{
      fetch('./details.json')
      .then(res=>res.json())
      .then(data=>setCompany(data))
    },[])
    const handleAddRevenue=(company)=>{
        const newCompanydetaild =[...companyDetails,company];
           
        setCompanyDetails(newCompanydetaild);
    }
    return (
        <div className='section'>
            <div className="row row-cols-md-3 row-cols-1 g-4 products">
                {
                    companies.map(company=><Product company={company} key={company.rank} handleAddRevenue={handleAddRevenue} ></Product>)
                }
            </div>
            <div className="products-count ps-2">
                <Count details={companyDetails}></Count>
            </div>
        </div>
    );
};

export default UiProducts;