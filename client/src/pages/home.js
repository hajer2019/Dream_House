import React from "react";
import Carousell from "../components/carousel";
import Intro from "../components/searchForm";
// import Search from "../components/search";
import Appart from "../components/appart";
// import Contact from "../components/contactform";
const Home = () => {
  return (
    <div className="home-page">
      <Carousell />
      {/* <Search /> */}
      <Intro />
      <Appart />
    </div>
  );
};

export default Home;
