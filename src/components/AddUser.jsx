import React, { useState } from 'react'
import Navbar from './Navbar'

const AddUser = () => {
    const [data,dataSet]=useState(
        {
            "name":"",
            "age":"",
            "username":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        dataSet({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                     <label htmlFor="" className="form-label">Age</label>
                     <input type="number" className="form-control" name='age' value={data.age} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                     <label htmlFor="" className="form-label">Username</label>
                     <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                     <label htmlFor="" className="form-label">Password</label>
                     <input type="password" className="form-control" name='password'value={data.password} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                     <button className="btn btn-primary" onClick={readValue}>Add</button>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser
