import React, { useContext } from "react";
import { Context } from "../store/appContext";
import './BioPlanet.css'


const BioPlanet = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="ton card mb-3">
              <div className="row g-0">
                <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-auto text-center">
                  <img
                    src="https://qph.fs.quoracdn.net/main-qimg-380f514d63f3d9bcee09b0798797473a-pjlq"
                    className="img-fluid rounded-start rounded"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                  <div className="card-body text-light">
                    <p className="card-title h2 text-center">{store.bio.name}</p>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi atque minus in voluptatum sed, deleniti iste ipsum
                      exercitationem aliquam vero voluptate vitae dolore?
                      Laboriosam aliquid similique ipsum autem, nesciunt sunt.
                      Exercitationem assumenda, dolorem nihil aliquam corporis
                      adipisci qui repellendus. Fugiat incidunt laborum,
                      necessitatibus cumque odio, atque adipisci inventore,
                      recusandae modi tempore eaque minus fugit velit
                      consectetur culpa. Quo, atque distinctio. Expedita velit
                      minus ipsam ipsum nam, veniam, esse sint autem magnam,
                      aliquam perspiciatis. Iure quos error placeat nobis
                      accusamus exercitationem dolore, neque asperiores
                      laboriosam rem accusantium esse. Beatae, accusamus alias?
                      Incidunt necessitatibus voluptates voluptatum quos
                      provident! Iste, quasi sit? Numquam error laudantium est
                      beatae porro laborum voluptate iure hic in dolores
                      quisquam consectetur, accusantium eaque adipisci
                      dignissimos velit pariatur? Placeat! Voluptatem natus
                      excepturi accusamus quo consectetur non aspernatur,
                      eligendi veritatis, quia asperiores eum architecto,
                      reiciendis sit dolorum? Cumque voluptate velit aperiam rem
                      tenetur optio quo ex atque maxime, delectus est?
                    </p>
                    <ul className="list-group text-center">
                      <li className="list-group-item">
                        Rotation Period: {store.bio.rotation_period}
                      </li>
                      <li className="list-group-item">
                        Orbital_period: {store.bio.orbital_period}
                      </li>
                      <li className="list-group-item">Diameter: {store.bio.diameter}</li>
                      <li className="list-group-item">
                        Climate: {store.bio.climate}
                      </li>
                      <li className="list-group-item">
                        Gravity: {store.bio.gravity}
                      </li>
                      <li className="list-group-item">
                        Terrain: {store.bio.terrain}
                      </li>
                      <li className="list-group-item">
                        Surface Water: {store.bio.surface_water}
                      </li>
                      <li className="list-group-item">
                        Population: {store.bio.population}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BioPlanet;
