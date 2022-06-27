import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {

    const [users , setUsers] = useState([])
const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    setUsers(await response.json())
    

}

useEffect( () => {
    getUsers ();
}, [])

  return (
    <>
    <section>
    <h1 className="heading">List of github users</h1>
    <div className="container-fluid mt-5" >
        <div className="row text-center">
{
    users.map((curElem)=> {
        return (
            <>

<div className="col-10 col-md-4 mt-5">
            <h3 className="user-id">{curElem.userID}</h3 >
            <h4 className="id">{curElem.id}</h4>
            <span className="title">{curElem.title}</span>
            <p className="description">{curElem.body}</p>


        </div>

            </>
        )
    } )
}

        <div className="col-10 col-md-4 mt-5">
            <h3 className="user-id">userID</h3 >
            <h4 className="id">ID</h4>
            <span className="title">title</span>
            <p className="description">description</p>


        </div>
        
        </div>
    </div>
    </section>
    </>
  )
}

export default UseEffectAPI