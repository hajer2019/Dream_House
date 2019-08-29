import React, { Component } from "react";
import { house } from "../data";
import image1 from "../images/img1.jpg";

export default class appart extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="w-75 mx-auto">
          <h5>Nos biens</h5>
        </div>
        <div className="w-75 mx-auto mt-3 mb-4 d-flex justify-content-between">
          <div class="card " style={{ width: 300, height: 100 }}>
            <div class="my-auto row no-gutters">
              <div class="col-md-6 w-100 my-auto">
                <img src={image1} class="card-img" alt="..." />
              </div>
              <div class="col-md-6 my-auto">
                <div class="card-body">
                  <h5 class="card-title">Appartement</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="card " style={{ width: 300, height: 100 }}>
            <div class="my-auto row no-gutters">
              <div class="col-md-6 w-100 my-auto">
                <img src={image1} class="card-img" alt="..." />
              </div>
              <div class="col-md-6 my-auto">
                <div class="card-body">
                  <h5 class="card-title">Maison</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="card " style={{ width: 300, height: 100 }}>
            <div class="my-auto row no-gutters">
              <div class="col-md-6 w-100 my-auto">
                <img src={image1} class="card-img" alt="..." />
              </div>
              <div class="col-md-6 my-auto">
                <div class="card-body">
                  <h5 class="card-title">Villa</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-75 mx-auto">
          <h5>Ville</h5>
        </div>
        <div className="w-75 mx-auto mt-3 mb-4 d-flex justify-content-between">
          <div class="card " style={{ width: 300, height: 100 }}>
            <div class="my-auto row no-gutters">
              <div class="col-md-6 w-100 my-auto">
                <img src={image1} class="card-img" alt="..." />
              </div>
              <div class="col-md-6 my-auto">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="card " style={{ width: 300, height: 100 }}>
            <div class="my-auto row no-gutters">
              <div class="col-md-6 w-100 my-auto">
                <img src={image1} class="card-img" alt="..." />
              </div>
              <div class="col-md-6 my-auto">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="card " style={{ width: 300, height: 100 }}>
            <div class="my-auto row no-gutters">
              <div class="col-md-6 w-100 my-auto">
                <img src={image1} class="card-img" alt="..." />
              </div>
              <div class="col-md-6 my-auto">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
