import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';


const PriceFilter = ({applyFilter}) => {
    const [currentFilter, setCurrentFilter]=useState(10);
    const product = useSelector((state)=> state.product);

    const dispatch = useDispatch();

    const handlePriceChange = (e) => {
        console.log("handle change",e.target.value);
        setCurrentFilter(e.target.value);
    }

  

    return ( 
        <div className ="filter-container">
            <select className='drop-down' value={currentFilter} onChange={handlePriceChange} name="product" id="price-range">
                <option value="100">100</option>
                <option value="50">50-100</option>
                <option value="20">20-50</option>
                <option value="10">10-20</option>
        </select>

        <button className='filter-btn' onClick={e=>applyFilter(currentFilter)}>Filter</button>
        </div>

    )
};

export default PriceFilter;