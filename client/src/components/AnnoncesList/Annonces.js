import React, { Component } from "react";
import { addToCart } from "../../redux/Actions/addfav";
import { connect } from "react-redux";

import AnnonceInfo from "./AnnonceInfo";
import image1 from "../../images/img1.jpg";

class AnnoncesList extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    const { annonces, ville, gouvernerat, type, typebien } = this.props;
    const filteredAd = annonces
      .filter(el => el.ville.toLowerCase().includes(ville.toLowerCase().trim()))
      .filter(el =>
        el.gouvernerat.toLowerCase().includes(gouvernerat.toLowerCase().trim())
      )
      .filter(el => el.type.toLowerCase().includes(type.toLowerCase().trim()))
      .filter(el =>
        el.typebien.toLowerCase().includes(typebien.toLowerCase().trim())
      );
    return (
      <div>
        <div className="w-75 mt-4 container cards-container">
          {filteredAd.map(e => (
            <div class="card annonce-card ">
              <img
                src={e.image}
                class="card-img-top annonce-list-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title card-title-annonce">
                  Family Home for sale
                </h5>
                <p class="card-text">
                  <i class="fas fa-map-marker-alt"></i> {e.ville}
                </p>
                <p class="card-text">{e.typebien}</p>
                <p class="card-text">{e.type}</p>
                <p>
                  {" "}
                  <span
                    to="/"
                    className="btn-floating halfway-fab waves-effect waves-light red"
                    onClick={() => {
                      this.handleClick();
                    }}
                  >
                    <i className="material-icons">add</i>
                  </span>{" "}
                </p>
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
    gouvernerat: state.reducerSearch.gouvernerat,
    ville: state.reducerSearch.ville,
    type: state.reducerSearch.type,
    typebien: state.reducerSearch.typebien
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnoncesList);
