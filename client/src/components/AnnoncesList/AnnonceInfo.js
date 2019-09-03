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
      <div className="site-section site-section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div>
                <div className="slide-one-item home-slider owl-carousel">
                  <div>
                    <img
                      src={this.props.annonce.image}
                      alt="Image"
                      className="annonce-info-img img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white property-body border-bottom border-left border-right">
                <div className="row mb-5">
                  <div className="col-md-6">
                    <strong className="text-success h1 mb-3">
                      {this.props.annonce.ville}
                    </strong>
                  </div>
                  <div className="col-md-6">
                    <ul className="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
                      <li>
                        <span className="property-specs">
                          Chambres : {this.props.annonce.chambre}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span className="d-inline-block text-black mb-0 caption-text">
                      {this.props.annonce.typebien}
                    </span>
                  </div>
                  <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span className="d-inline-block text-black mb-0 caption-text">
                      Ville
                    </span>
                    <strong className="d-block">
                      {this.props.annonce.ville}
                    </strong>
                  </div>
                  <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <Contactuser />
                  </div>
                </div>
                <h2 className="h4 text-black">Description</h2>
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
