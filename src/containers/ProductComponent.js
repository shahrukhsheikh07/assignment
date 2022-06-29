import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {id,title,image,price , category} = product;
    return (
    <>
      < Link className='card-container' to ={`/product/${id}`} >
        <div className='card'>
          <div className='image-container'> <img  className='image' src = {image} alt={title} /> </div>
          <div className='content'>
              <div className='header'>{title}</div>
            <div className='meta-price'>₹{price}</div> 
            <div className='category'>{category}</div> 

          </div>
        </div>
    </Link>
    </>
    )
  })
  return (
    <>{renderList}</>
  );
}

export default ProductComponent;