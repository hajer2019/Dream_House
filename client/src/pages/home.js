import React from "react";
import Slider from "../components/carousel";
import Intro from "../components/intro";
import Search from "../components/search";
import Appart from "../components/appart";
import AnnoncesList from "../components/AnnoncesList/Annonces";
// import Contact from "../components/contactform";
const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <Search />
      <Intro />
      <Appart />
      <AnnoncesList />
    </div>
  );
};

export default Home;
