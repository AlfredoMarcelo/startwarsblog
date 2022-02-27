import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = (props) => {
  
  const {store, actions} = useContext(Context)

  const sendName=()=>{
    let nameItem = props.data.name
    actions.addFavorite(nameItem);
  }

  const sendUrl=()=>{
    const url = props.data.url
    actions.fetchSinglePlanet(url)
  }


  return (
    <div className="card text-light" >
      <img
        src="https://qph.fs.quoracdn.net/main-qimg-380f514d63f3d9bcee09b0798797473a-pjlq"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Name Planet: {props.data.name}</h5>
        <p className="card-text">Type: {props.data.terrain}</p>
        <div className="d-flex justify-content-between">
        <Link 
        to="/bio_planet" 
        className="btn btn-dark"
        onClick={()=>sendUrl()}
        >
          See Planet
        </Link>
        <button  
        className="btn btn-danger"
        onClick={()=>sendName()}
        >
        <i className="bi bi-star-half"></i>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Planets;
