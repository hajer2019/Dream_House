import React, { Component } from "react";

import { connect } from "react-redux";

class AnnoncesList extends Component {
  constructor(props) {
    super(props);
  }

import AnnonceInfo from "./AnnonceInfo";
import image1 from "../../images/img1.jpg";

  render() {
    return (
      <div>
        <div className="w-75 mt-4 container cards-container">
          {this.props.annonces.map(e => (
            <div class="card annonce-card ">
              <img src={e.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title card-title-annonce">
                  Family Home for sale
                </h5>
                <p class="card-text">
                  {" "}
                  <i class="fas fa-map-marker-alt"></i> {e.ville}
                </p>
                <p class="card-text">{e.type}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 mx-auto" style={{ width: "10%" }}>
          <button className=" load-more-button mx-auto">Load more</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    annonces: state.postReducer.annonces,
    ville: state.reducerSearch.ville
  };
}

export default connect(mapStateToProps)(AnnoncesList);
