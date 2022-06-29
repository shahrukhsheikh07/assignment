import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const product = useSelector ((state) => state.quantity);
  console.log("product in header",product);


  return (
    <>
      <div className='container-header'>
        <img className='ss-img' src = "/ss.png" />
        <h1 className='cart'>Shop Store</h1>
        <div className='cart-item'>Cart {product !={} ? "1": "0"}</div>
      </div>

    </>
  )
}

export default Header;