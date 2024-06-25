import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import EXED from "../components/ExEd";

const EmailMe = () => {
  return (
    <div>
      <Particles id="tsparticles"></Particles>
      <Headers></Headers>
      <EXED></EXED>
      <Footer></Footer>
    </div>
  );
};

export default EmailMe;
