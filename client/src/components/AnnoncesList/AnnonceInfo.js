import React from "react";
import Contactuser from "./Contactuser";
import img1 from "../../images/img1.jpg";

function AnnonceInfo() {
  return (
    <div class="mt-4 card-info-container container py-3">
      <div className="mt-3">
        <div class="row ">
          <div class="col-md-6">
            <img src={img1} class="w-100" />
            <div className="mt-2 annonce-details">
              <h5>Détails</h5>
              <h6>Prix:</h6>
              <p>Nombre de Chambre:</p>
              <p>Nombre de Lit:</p>
            </div>
          </div>
          <div class="col-md-6 mt-2 my-auto px-3">
            <div class="card-block px-3">
              <h5>Postulé par :</h5>
              <p class="card-text">User Name: </p>
              <p class="card-text">Date:</p>
              <Contactuser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnonceInfo;
