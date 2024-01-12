import React from 'react';
import './market.css'
import ProductsList from './ProductList';
import cornImage from './img/ice_cream.svg'



const productsArray = [
  { src: cornImage, name: "Ice cream", price: "3€" },
  { src: cornImage, name: "Ice cream", price: "3€" },
  { src: cornImage, name: "Ice cream", price: "3€" },
  { src: cornImage, name: "Ice cream", price: "3€" },
  { src: cornImage, name: "Ice cream", price: "3€" },
  { src: cornImage, name: "Ice cream", price: "3€" },
  { src: cornImage, name: "Ice cream", price: "3€" },
  { src: cornImage, name: "Ice cream", price: "3€" }
];

const Market = () => (
  <div className='cards'> 
    <div className='rowmarket'>
        <ProductsList products={productsArray} />
    </div>
  </div>
  
);

export default Market;
