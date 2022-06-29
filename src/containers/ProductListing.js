import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions';
import { selectedProduct  } from '../redux/actions/productActions';
import PriceFilter from './PriceFilter';

const ProductListing = () => { 
  const products = useSelector ((state) => state.product);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=> {
      console.log("Err",err);
    })
   dispatch(setProducts(response.data));
  }

  const applyFilter = (currentFilter) =>{
    // const prod = products;
    console.log("Apply invoked", products, currentFilter);

    const filteredResult = products.filter((item)=>{
        return item.price > currentFilter;
      })
      console.log("filtered result", filteredResult);
    dispatch(selectedProduct(filteredResult));
}

  useEffect(() => {
    fetchProducts();
  },[])
  

  console.log("Products :",products);
  return (
    
    <>
    <div className='container'>
      <PriceFilter applyFilter={applyFilter}/>
      <ProductComponent/>
    </div>
    
    
    </>
    )
}

export default ProductListing;