import Contactuser from "./Contactuser";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from "../../redux/Actions/postActions";

class AnnonceInfo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let id = this.props.match.params.annonce_id;
    console.log(id);
    this.props.getPost(id);
  }
  render() {
    return (
      <div class="site-section site-section-sm">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div>
                <div class="slide-one-item home-slider owl-carousel">
                  <div>
                    <img
                      src={this.props.annonce.image}
                      alt="Image"
                      class="annonce-info-img img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-white property-body border-bottom border-left border-right">
                <div class="row mb-5">
                  <div class="col-md-6">
                    <strong class="text-success h1 mb-3">
                      {this.props.annonce.ville}
                    </strong>
                  </div>
                  <div class="col-md-6">
                    <ul class="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
                      <li>
                        <span class="property-specs">Chambres</span>
                        <span class="property-specs-number">
                          {this.props.annonce.chambre}
                        </span>
                      </li>
                      <li>
                        <span class="property-specs">Lit</span>
                        <span class="property-specs-number">
                          {this.props.annonce.lit}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span class="d-inline-block text-black mb-0 caption-text">
                      {this.props.annonce.typebien}
                    </span>
                  </div>
                  <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span class="d-inline-block text-black mb-0 caption-text">
                      Ville
                    </span>
                    <strong class="d-block">{this.props.annonce.ville}</strong>
                  </div>
                  <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <Contactuser />
                  </div>
                </div>
                <h2 class="h4 text-black">Description</h2>
                <p>{this.props.annonce.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    annonce: state.postReducer.annonce
  };
};
export default connect(
  mapStateToProps,
  { getPost }
)(AnnonceInfo);
