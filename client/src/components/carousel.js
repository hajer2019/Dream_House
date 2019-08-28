import React from "react";
import image1 from "../images/img1.jpg";
import image2 from "../images/img2.png";
import image3 from "../images/img3.jpg";
import image4 from "../images/img4.jpg";

function Carousell() {
  return (
    <div className="carousel">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image4} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image3} alt="Second slide" />
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={image1} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousell;
