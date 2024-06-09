import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewUser = () => {
    const [data,dataSet]=useState({"data":[]})
    const fetchData=()=>{
        axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then(
            (response)=>{
                dataSet(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                   {data.data.map(
                    (value, index) => {
                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">population:{value.Population}</h5>
                                <h5 class="card-title">ID Nation:{value['ID Nation']}</h5>
                                <h5 class="card-title">year:{value.Year}</h5>
                                <h5 class="card-title">Nation:{value.Nation}</h5>
                                <a href={value.dataset_link} class="card-link">Card link</a>
                                
                            </div>
                            </div>
                            </div>
                    }
                   )
                   }

                    </div>
                    
                </div>
            </div>
        </div>
      </div>

  )
}

export default ViewUser
