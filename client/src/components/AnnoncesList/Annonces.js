import React, { Component } from "react";
import image1 from "../../images/img1.jpg";

class List extends Component {
  render() {
    return (
      <div className="w-75 container cards-container">
        <div class="card annonce-card ">
          <img src={image1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title card-title-annonce">Family Home for sale</h5>
            <p class="card-text">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Tunis
            </p>
            <p class="card-text">150 TND</p>
          </div>
        </div>
        <div class="card annonce-card ">
          <img src={image1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title card-title-annonce">Family Home for sale</h5>
            <p class="card-text">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Tunis
            </p>
            <p class="card-text">150 TND</p>
          </div>
        </div>
        <div class="card annonce-card ">
          <img src={image1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title card-title-annonce">Family Home for sale</h5>
            <p class="card-text">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Tunis
            </p>
            <p class="card-text">150 TND</p>
          </div>
        </div>
        <div class="card annonce-card">
          <img src={image1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title card-title-annonce">Family Home for sale</h5>
            <p class="card-text">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Tunis
            </p>
            <p class="card-text">150 TND</p>
          </div>
        </div>
        <div>
          <button className=" load-more-button mx-auto">Load more</button>
        </div>
      </div>
    );
  }
}

export default List;
