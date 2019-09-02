import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <section class="py-5 bg-light" id="section-about">
        <div class="container">
          <div class="row align-items-center">
            <div
              class="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5"
              data-aos="fade-up"
            >
              <img
                src="http://www.minalesliewujastyk.com/wp-content/uploads/2016/09/image7.jpg"
                alt="Image"
                class="img-fluid rounded"
              />
            </div>
            <div class="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h2 class="heading mb-4">Présentation</h2>
              <p class="mb-5">
                Ce Site est spécialement adapté pour promouvoir en ligne les
                produits de l'immobilier. En quelques clics vous créez votre
                annonce avec textes et photos très facilement grâce à une
                interface conviviale :
                <br />
                Achat ou vente de biens immobiliers, maisons, appartements,
                terrains, commerces, Locations immobilières, annuelles ou
                saisonnières Jusqu'à 1000 produits (plus nous consulter) 4
                photos (plus nous consulter) par produits Diaporama photo sur
                chaque produits, Moteur de recherche multicritères Génération et
                affichage des résultats instantanés! Classement par type,région
                etc..
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section" id="section-rooms">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading" data-aos="fade-up">
                Nos annonces
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <Link to="/" class="room">
                <figure class="img-wrap">
                  <img
                    src="http://www.minalesliewujastyk.com/wp-content/uploads/2016/09/image7.jpg"
                    alt="Free website template"
                    class="img-fluid mb-3"
                  />
                </figure>
                <div class="p-3 text-center room-info">
                  <h2>Appartement</h2>
                </div>
              </Link>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <Link to="/" class="room">
                <figure class="img-wrap">
                  <img
                    src="http://www.minalesliewujastyk.com/wp-content/uploads/2016/09/image7.jpg"
                    alt="Free website template"
                    class="img-fluid mb-3"
                  />
                </figure>
                <div class="p-3 text-center room-info">
                  <h2>Maison</h2>
                </div>
              </Link>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <Link to="/" class="room">
                <figure class="img-wrap">
                  <img
                    src="images/img_3.jpg"
                    alt="Free website template"
                    class="img-fluid mb-3"
                  />
                </figure>
                <div class="p-3 text-center room-info">
                  <h2>Duplex</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
