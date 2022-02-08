import React from "react";
import subarnPhoto from "../img/subarn.png";
import OurTeamCard from "./OurTeamCard.component";

const OurTeam = () => {
  return (
    <>
      <div className="ourTeamContainer">
        <OurTeamCard
          name="GP Adhikari"
          position="Founder &amp; CEO"
          img={subarnPhoto}
        />
        <OurTeamCard
          name="GP Adhikari"
          position="Founder &amp; CEO"
          img={subarnPhoto}
        />
        <OurTeamCard
          name="GP Adhikari"
          position="Founder &amp; CEO"
          img={subarnPhoto}
        />
        <OurTeamCard
          name="GP Adhikari"
          position="Founder &amp; CEO"
          img={subarnPhoto}
        />
        <OurTeamCard
          name="GP Adhikari"
          position="Founder &amp; CEO"
          img={subarnPhoto}
        />
      </div>
    </>
  );
};

export default OurTeam;
