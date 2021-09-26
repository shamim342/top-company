import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name,headquartered,year,popularBikes,Revenue,img}=props.company;
    const element = <FontAwesomeIcon icon={faCalculator} />
    return (
           <div className="col">
             <div className="card h-100 bg-custom">
                <img src={img} className="card-img-top img-round h-100 w-100"  alt="bIKE"/>
                 <div className="card-body">
                   <h5 className="card-title ">
                       <small>Company name :</small><br/>
                       <span className='text-danger fw-bold'>{name}</span>
                       </h5>
                   <p> 
                       <span className='fw-bolder'>
                            Headquarter -
                       </span>  {headquartered}
                    </p>
                    <h5>Founded : {year}</h5>
                    <p className="card-text">
                        <span className='text-primary fw-bold'>
                             Popular Bike Serirs :
                        </span> <br/>{popularBikes}
                    </p>
                    <p><span className='fw-bold'>Revenue per Year:<br/></span>  <span className='fw-bold text-primary'>{Revenue}</span> Billion $</p>
                    <button onClick={()=>props.handleAddRevenue(props.company)} className='btn btn-primary w-75'> {element}  Add Revenue</button>
                    <div className='icons'>
                    <i className="fab fa-facebook fa-2x icon-color1"></i>
                    <i className="fab fa-linkedin fa-2x icon-color2"></i>
                    <i className="fab fa-twitter fa-2x icon-color3"></i>
                    </div>
                  </div>
               </div>
            </div>
          
        
    );
};

export default Product;