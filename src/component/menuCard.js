import React from 'react'

const menuCard = ({menuData}) => {
  return (
      <>
      < section className="main-card-container">
      {menuData.map((curElem) => {
          return (
              <>

      
    <div className="card-container" key={curElem.id}>
    <div className="card">
        <div className = "card-body">
            <span className="card-number">{curElem.name}</span>
            <span className="card-author">Breakfast</span>
            <h2 className="card-title">{curElem.name}</h2>
            <span className="card-description"> {curElem.description} </span>
            <div className="card-read">Read</div>
            <img src={images} alt="images" className="card-media " />
            <span className="card-order">Order Now</span>
                       </div>
        
    </div>
</div>
</>
);
})}
</section>
</>
  )
}

export default menuCard