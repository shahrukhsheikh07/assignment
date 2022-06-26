import React, { useState } from 'react'
import Menu from './component/Basics/menuApi.js';
import menuCard from './component/Basics/menuCard.js';

const Restaurant = () => {
  const[menuData, setMenuData] = useState(Menu);
  

  return (
    <>
    <menuCard  menuData={menuData} /> 
    </>
  )
}

export default Restaurant;