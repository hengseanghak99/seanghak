import React from 'react';
import Headers from "../components/Header";
import BodyPage from "../components/BodyPage";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import TechnologyUsed from "../components/TechnologyUsed";

const HomePage = () => {
  return (
    <div>
      <Particles id="tsparticles"></Particles>
      <Headers></Headers>
      <BodyPage></BodyPage>
      <TechnologyUsed></TechnologyUsed>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
