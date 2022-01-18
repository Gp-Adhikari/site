import React from "react";
import Title from "../components/Title.component";
import OurTeam from "../components/OurTeam.component";
import AboutUs from "../components/AboutUs.component";
import Banner from "../components/Banner.component";

const About = () => {
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
