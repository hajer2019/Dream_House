import React from "react";
import Slider from "../components/carousel";
import Search from "../components/search";
import AnnoncesList from "../components/AnnoncesList/Annonces";

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <Search />
      <AnnoncesList />
    </div>
  );
};

export default Home;
