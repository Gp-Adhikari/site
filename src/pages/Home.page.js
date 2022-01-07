import React from "react";
import Introduction from "../components/Introduction.component";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo.component";
import Title from "../components/Title.component";
import RecentProjects from "../components/RecentProjects.component";
const Home = () => {
  return (
    <>
      <Introduction />
      <Title TitleText="What We Do?" />
      <WhatWeDo />
      <Title TitleText="Recent Projects" />
      <RecentProjects />
    </>
  );
};

export default Home;
