import React, { useEffect } from "react";
import Title from "../components/Title.component";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo.component";
import WhatWeUse from "../components/WhatWeUse.component";

const Services = () => {
  useEffect(() => {
    document.title = "Services - Zpro";
  }, []);
  return (
    <>
      <Title TitleText="What We Do?" />
      <WhatWeDo />
      <Title TitleText="What We Use?" />
      <WhatWeUse />
    </>
  );
};

export default Services;
