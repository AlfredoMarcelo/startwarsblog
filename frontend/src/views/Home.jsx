import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-12 py-5 text-light text-center">
          <img src="/logo.png" alt="" className="img-fluid bg-dark" />
          <Link to="/all_data">
          <button className=" btn btn-warning mt-5 px-5 py-2"><p className="h4">Comienza el tour</p> </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </section>
  );

};

export default Home;
