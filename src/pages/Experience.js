import React from "react";
import ContactForm from "../components/SendEmail";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";

const Experience = () => {
  return (
    <div>
         <Helmet>
          <meta charSet='utf-8'></meta>
          <title>Heng Seanghak</title>
          <meta name="description" content="welcome to my profilo" />
        </Helmet>
      <Particles id="tsparticles"></Particles>
      <Headers></Headers>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Experience;
