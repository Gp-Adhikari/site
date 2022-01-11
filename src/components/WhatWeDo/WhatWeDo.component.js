import React from "react";
import websiteDevelopmentIcon from "../../img/website-development-icon.svg";
import WhatWeDoCard from "./WhatWeDo-Card.component";
import domainAndHostingIcon from "../../img/hosting-icon.svg";
import seoIcon from "../../img/seo-icon.svg";
import contentWritingIcon from "../../img/content-writing-icon.svg";
import websiteRedesignIcon from "../../img/redesign-icon.svg";
import logoDesignIcon from "../../img/logo-icon.svg";
import WhatWeDoBg from "../../img/WhatWeDobackground.svg";
const WhatWeDo = () => {
  return (
    <>
      <div className="whatWeDoContainer">
        <div className="whatWeDoBackground">
          <img className="WhatWeDoBg" src={WhatWeDoBg} alt="" />
        </div>
        <div className="whatWeDoCardContainer">
          <WhatWeDoCard
            img={websiteDevelopmentIcon}
            title="Website Development"
            desc="We build custom website for better user experience and user interface for your brand identity."
          />
          <WhatWeDoCard
            img={domainAndHostingIcon}
            title="Domain &amp; Hosting"
            desc="We provide reliable website hosting solution that handles every aspect of your website."
          />
          <WhatWeDoCard
            img={seoIcon}
            title="SEO"
            desc="We help you to lift your business and obtain more advantage througn SEO which restlts in higher traffic and ranking of your site."
          />
          <WhatWeDoCard
            img={contentWritingIcon}
            title="Content Writing"
            desc="We make sure to accurately showcase the products and services you offer to your targeted audiences."
          />
          <WhatWeDoCard
            img={websiteRedesignIcon}
            title="Website Redesign"
            desc="We will improve your web layouts with better UI/UX and make it easier to use for your audiences."
          />
          <WhatWeDoCard
            img={logoDesignIcon}
            title="Logo Design"
            desc="We also design your business logo that works with your vision and gives your business uniqueness and different taste."
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
