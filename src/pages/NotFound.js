import React from 'react';
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import Error404 from '../components/Error404';
import { SpeedInsights } from '@vercel/speed-insights/next';

const HomePage = () => {
  return (
    <div>
            <SpeedInsights></SpeedInsights>
      <Headers></Headers>
      <Particles id="tsparticles"></Particles>
      <Error404></Error404>
    
    </div>
  );
};

export default HomePage;
