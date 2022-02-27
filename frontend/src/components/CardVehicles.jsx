import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const CardVehicles = (props) => {
  
  const {store,actions}=useContext(Context)
  
  const sendName=()=>{
      let nameItem = props.data.name
      //agregar action que guarde el nombre en el store favorite array
      actions.addFavorite(nameItem);
  }

  const sendUrl=()=>{
    let url = props.data.url
    actions.fetchSingleVehicle(url)
  }

  return (
    <div className='card text-light' >
      <img src="https://static.turbosquid.com/Preview/2016/11/16__10_31_21/ScreenShot20161028at10.33.59AM.jpg52658B71-F4F8-44B3-9CB1-1D195CD5BE0FLarge.jpg" className='card-img-top' alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">
          {props.data.model}
        </p>
        <div className="d-flex justify-content-between">
        <Link 
        to="/bio_vehicle" 
        className="btn btn-dark"
        onClick={()=>sendUrl()}
        >
          See Vehicle
        </Link>
        <button  className="btn btn-danger" onClick={() => sendName()}>
        <i className="bi bi-star-half"></i>
        </button>
        </div>
      </div>
    </div>
  )
}

export default CardVehicles