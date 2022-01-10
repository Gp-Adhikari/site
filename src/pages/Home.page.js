import React, { useEffect } from "react";
import Introduction from "../components/Introduction.component";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo.component";
import Title from "../components/Title.component";
import RecentProjects from "../components/RecentProjects.component";
import HeroSection from "../components/HeroSection.component";
const Home = () => {
  useEffect(() => {
    document.title = "Home - Zpro";
  }, []);
  return (
    <>
      <HeroSection />
      <Introduction />
      <Title TitleText="What We Do?" />
      <WhatWeDo />
      <Title TitleText="Recent Projects" />
      <RecentProjects />
    </>
  );
};

export default Home;
