import React from 'react';
import Headers from "../components/Header";
import Particles from "../components/Particles";
import Error404 from '../components/Error404';
import { Helmet } from 'react-helmet';
import DocumentMeta from 'react-document-meta';

const HomePage = () => {
  useEffect(() => {
    // Dynamically update meta tags
    DocumentMeta.set({
      title: 'My Page Title',
      description: 'Description of my page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react, meta tags, document',
        },
      },
    });
  }, []);
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
