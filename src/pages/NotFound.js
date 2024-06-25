import React from 'react';
import Headers from "../components/Header";
import Particles from "../components/Particles";
import Error404 from '../components/Error404';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
        <Helmet>
        <meta charSet='utf-8'></meta>
          <title>Heng Seanghak</title>
          <meta name="description" content="welcome to my profilo" />
        </Helmet>
      <Headers></Headers>
      <Particles id="tsparticles"></Particles>
      <Error404></Error404>
    
    </div>
  );
};

export default HomePage;
