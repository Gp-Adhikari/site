import React, { useEffect } from "react";
import Title from "../components/Title.component";
import OurTeam from "../components/OurTeam.component";
import AboutUs from "../components/AboutUs.component";
import Banner from "../components/Banner.component";

const About = () => {
  useEffect(() => {
    document.title = "About - Zpro";
  }, []);
  return (
    <>
      <Banner text1="About Us" />
      <AboutUs />
      <Title TitleText="Our Team" />
      <OurTeam />
    </>
  );
};

export default About;
