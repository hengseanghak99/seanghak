import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import EXED from "../components/ExEd";
import { Helmet } from 'react-helmet';
import DocumentMeta from 'react-document-meta';


const EmailMe = () => {
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
      <Particles id="tsparticles"></Particles>
      <Headers></Headers>
      <EXED></EXED>
      <Footer></Footer>
    </div>
  );
};

export default EmailMe;
