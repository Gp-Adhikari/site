import React, { useEffect } from "react";
import Introduction from "../components/Introduction.component";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo.component";
import Title from "../components/Title.component";
import RecentProjects from "../components/RecentProjects.component";
import HeroSection from "../components/HeroSection.component";

import confetti from "canvas-confetti";
import { url } from "../URL";

const Home = () => {
  //title
  useEffect(() => {
    document.title = "Home - Zpro";
  }, []);

  //counter/visits
  useEffect(() => {
    const abortController = new AbortController();
    fetch(url + "/", {
      method: "GET",
      signal: abortController.signal,
      credentials: "include",
    });
    return () => abortController.abort();
  }, []);

  //confetti for this page
  useEffect(() => {
    let duration = 2 * 1000;
    let animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      let timeLeft = animationEnd - Date.now();
      let ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: ["#ffffff"],
        shapes: ["circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  });
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
