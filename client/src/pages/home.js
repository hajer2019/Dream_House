import React from "react";
import Carousell from "../components/carousel";
import Intro from "../components/searchForm";
// import Search from "../components/search";
import Appart from "../components/appart";

function Home() {
  return (
    <div className="home-page">
      <Carousell />
      {/* <Search /> */}
      <Intro />
      <Appart />
    </div>
  );
}

export default Home;
