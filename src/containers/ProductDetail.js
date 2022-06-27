import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state)=> state.product);
  const [currentProduct, setCurrentProduct]=useState({})
  // const {id,title,image,price , category} = currentProduct;
  const {productId} = useParams();
  const dispatch = useDispatch();
  

  console.log("productId",productId);

  const fetchProductDetail = async () => {
    console.log("fetching");
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    console.log("fetch response", response);
    setCurrentProduct(response.data);
    dispatch(selectedProduct(response.data));
  }
  
  useEffect(()=>{
    console.log("effect", productId);
    if (productId && productId !=="") fetchProductDetail();
  },[productId]);

  


  return (
    <>
    <div className='product'>
      <div className='product-image-container'> 
        <img  className='product-image' src = {currentProduct.image} alt={currentProduct.title} />
      </div>
      <div className='product-content'>
          <h2 className='title-detail'>{currentProduct.title}</h2>
          <div className='price-d'>Price : ₹{currentProduct.price}</div> 
          <div className='category-d'>Category : {currentProduct.category}</div> 
          <div className='rating'>Rating : {currentProduct.rating.rate}</div>
          <button className='add-cart'>Add to cart</button>
      </div>
    </div>
    </>
  )
}

export default ProductDetail;