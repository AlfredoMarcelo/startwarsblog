import React, { useEffect, useContext } from "react";
import CardCharacters from "../components/CardCharacters";
import CardPlanets from "../components/CardPlanets";
import CardVehicles from "../components/CardVehicles";
import './AllData.css';
import { Context } from "../store/appContext";
import Footer from "../components/Footer";
import BioCharacter from "../components/BioCharacter";

const AllData = (props) => {
  /* console.log(props) */
  //Aqui se llama el flux
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchCharacter();
    actions.fetchPlanets();
    actions.fetchVehicles();
  }, []);
  /* console.log(store.character);
  console.log(store.planets);
  console.log(store.vehicles); */

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-light py-1">Characters</h1>
        <div className="d-flex flex-nowrap py-1">
          {/* <Characters este_es_mi_prop={este_es_mi_Resultado} /> */}
          {store.character.map((item,i)=> <div className="col-12 col-md-6 col-lg-4 mb-2"><CardCharacters data={item}/></div>)}
        </div>
        <h1 className="text-light py-1">Planets</h1>
        <div className="d-flex flex-nowrap py-1">
          {store.planets.map((item)=> <div className="col-12 col-md-6 col-lg-4 mb-2"><CardPlanets data={item}/></div>)}  
        </div>
        <h1 className="text-light py-1">Vehicles</h1>
        <div className="d-flex flex-nowrap py-1 ">
          {store.vehicles.map((item,i)=><div className="col-12 col-md-6 col-lg-4 mb-2"><CardVehicles data={item}/></div>)}  
        </div>        
      </div>
      <Footer/>
    </div>
  );
};

export default AllData;
