import React, { useContext } from "react";
import { Context } from "../store/appContext";
import './BioCharacter.css'



const BioCharacter = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className=" ton card mb-3">
              <div className="row g-0">
                <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-auto text-center">
                  <img
                    src="https://www.giantbomb.com/a/uploads/square_small/46/462814/3180417-5472872915-latest"
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
                        Gender: {store.bio.gender}
                      </li>
                      <li className="list-group-item">
                        Height: {store.bio.height}
                      </li>
                      <li className="list-group-item">Mass: {store.bio.mass}</li>
                      <li className="list-group-item">
                        Hair Color: {store.bio.hair_color}
                      </li>
                      <li className="list-group-item">
                        Skin Color: {store.bio.skin_color}
                      </li>
                      <li className="list-group-item">
                        Eye Color: {store.bio.eye_color}
                      </li>
                      <li className="list-group-item">
                        Birth Year: {store.bio.birth_year}
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

export default BioCharacter;
