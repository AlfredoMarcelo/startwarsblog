import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardCharacters = (props) => {
  
  const { store, actions } = useContext(Context);

  const sendName = () => {
    let nameItem = props.data.name
    actions.addFavorite(nameItem)
  }
  
  
  const sendUrl=()=>{
    let url = props.data.url
    actions.fetchSingleCharacter(url)
  }

  return (
    <div className="card text-light" >
      <img src="https://www.giantbomb.com/a/uploads/square_small/46/462814/3180417-5472872915-latest" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title ">{props.data.name}</h5>
        <p className="card-text">
          {props.data.height}
        </p>
        <div className="d-flex justify-content-between">
        <Link 
        to='/bio_character'  
        className="btn btn-dark"
        onClick={()=>sendUrl()}
        >
          See Character
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

export default CardCharacters;
