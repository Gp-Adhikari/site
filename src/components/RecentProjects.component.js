import React from "react";
import { Link } from "react-router-dom";
import recentProjectImg from ".././img/SynicalBot-projectimg.png";
const RecentProjects = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="RecentProject-Section">
        <img src={recentProjectImg} alt="" />
        <div className="Synical-botText">
          <h1>Synical Bot</h1>
          <p>
            Synical Development Bot has a variety of commands that you can use,
            do /help in the discord server to find out what the synical bot can
            do. Synical bot has funny jokes that you can read all day if you
            wanted to, hope you enjoy my model and thank the creators.
          </p>
          <Link to="/portfolio" onClick={() => scrollToTop()}>
            <input type="button" value="Explore Our Portfolio" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default RecentProjects;
