import React from "react";
import ContactForm from "../components/SendEmail";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import { SpeedInsights } from '@vercel/speed-insights/next';

const Experience = () => {
  return (
    <div>
            <SpeedInsights></SpeedInsights>
      <Particles id="tsparticles"></Particles>
      <Headers></Headers>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Experience;
