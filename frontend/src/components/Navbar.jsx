import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

  const {store,actions}=useContext(Context);

  const deleteItem = (i) =>{
    console.log(i)
    let index = i
    //agregar action para remover favorito en el arrelgo de store favoriteList
    actions.deleteFavorite(index);
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container h5">
          <NavLink className="nav-link text-warning" aria-current="page" to="/">
            StarWars
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/all_data' className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/all_data">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/all_data">
                 
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=''
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                   Favorites <i className="bi bi-star-half"></i>
                </Link>
                <ul className="dropdown-menu active" aria-labelledby="navbarDropdown">
                  
                  {store.favoriteList.length > 0 ? store.favoriteList.map((item, i)=> (  
                  <li key={i}>
                    <p className="dropdown-item d-flex justify-content-between" href="#">
                      <p className="fw-bold p-0 m-0 b-0 text-dark">{item}</p>
                      <i 
                      type="button" 
                      className="bi bi-trash-fill text-danger"
                      onClick={()=>deleteItem(i)}
                      ></i>
                    </p>
                  </li>
                  )):
                  <li>
                    <p className="dropdown-item d-flex justify-content-between" href="#">
                      <p className="fw-bold p-0 m-0 b-0 text-warning">Agregar favoritos <i className="bi bi-arrow-down-circle-fill text-warning"></i></p>
                    </p>
                  </li>}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
