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
    //console.log(id);
    //this.props.getPost(id);
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
                      src="https://img.lemde.fr/2019/04/22/0/191/1619/1079/688/0/60/0/e39da8d_2FIads9h8wB-0SwSgxVaVWsp.jpg"
                      alt="Image"
                      class="annonce-info-img img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-white property-body border-bottom border-left border-right">
                <div class="row mb-5">
                  <div class="col-md-6">
                    <strong class="text-success h1 mb-3">Ville</strong>
                  </div>
                  <div class="col-md-6">
                    <ul class="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
                      <li>
                        <span class="property-specs">Beds</span>
                        <span class="property-specs-number">
                          2 <sup>+</sup>
                        </span>
                      </li>
                      <li>
                        <span class="property-specs">Baths</span>
                        <span class="property-specs-number">2</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span class="d-inline-block text-black mb-0 caption-text">
                      Home Type
                    </span>
                    <strong class="d-block">Condo</strong>
                  </div>
                  <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <span class="d-inline-block text-black mb-0 caption-text">
                      Year Built
                    </span>
                    <strong class="d-block">2018</strong>
                  </div>
                  <div class="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                    <Contactuser />
                  </div>
                </div>
                <h2 class="h4 text-black">Description</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda aperiam perferendis deleniti vitae asperiores
                  accusamus tempora facilis sapiente, quas! Quos asperiores
                  alias fugiat sunt tempora molestias quo deserunt similique
                  sequi.
                </p>
                <p>
                  Nisi voluptatum error ipsum repudiandae, autem deleniti, velit
                  dolorem enim quaerat rerum incidunt sed, qui ducimus! Tempora
                  architecto non, eligendi vitae dolorem laudantium dolore
                  blanditiis assumenda in eos hic unde.
                </p>
                <p>
                  Voluptatum debitis cupiditate vero tempora error fugit
                  aspernatur sint veniam laboriosam eaque eum, et hic odio
                  quibusdam molestias corporis dicta! Beatae id magni,
                  laudantium nulla iure ea sunt aliquam. A.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getPost }
)(AnnonceInfo);
