import React from "react";

function Search() {
  return (
    <div>
      <section class="search-form">
        <div>
          {" "}
          <h3 className="search-heading">
            <i className="fa fa-search"></i>Recherche Rapide
          </h3>
        </div>
        <form action="" method="GET" name="search" role="search">
          <div className="inp-wrap search-wrap">
            <label for="categories" class="grid-20">
              Gouvernerat
            </label>
            <select name="search categories" id="categories" class="grid-80">
              <option value="newyork" selected>
                {" "}
                Tunis{" "}
              </option>
              <option value="newyork"> Ben Arous </option>
              <option value="newyork"> Mannouba </option>
              <option value="newyork"> Nabeul </option>
              <option value="newyork"> Ariana </option>
            </select>
          </div>
          <div className="inp-wrap cat-wrap">
            <label for="categories" class="grid-20">
              Ville
            </label>
            <select name="search categories" id="categories" class="grid-80">
              <option value="Bardo">Bardo</option>
            </select>
          </div>

          <div className="inp-wrap cat-wrap">
            <label for="categories" class="grid-20">
              Type
            </label>
            <select name="search categories" id="categories" class="grid-80">
              <option value="louer"> Louer </option>
              <option value="Vendre"> Vendre </option>
              <option value="Acheter"> Acheter </option>
            </select>
          </div>

          <div className="inp-wrap cat-wrap">
            <label for="categories" class="grid-20">
              Type de bien
            </label>
            <select name="search categories" id="categories" class="grid-80">
              <option value="louer"> Appartement </option>
              <option value="Vendre"> Bureau </option>
              <option value="Acheter"> Villa </option>
              <option value="Acheter"> Maison </option>
              <option value="Acheter"> Commercial </option>
              <option value="Acheter"> Duplex </option>
              <option value="Acheter"> Immeuble </option>
            </select>
          </div>

          <div className="inp-wrap submit-wrap">
            <button class="grid-100 btn" style={{ marginTop: -7 }}>
              Search
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Search;
