import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.component";
import Header from "./components/Header.component";
import Title from "./components/Title.component";
import WhatWeDo from "./components/WhatWeDo.component";
import Introduction from "./components/Introduction.component";
import RecentProjects from "./components/RecentProjects.component";
import Portfolio from "./components/portfolioComponent/Portfolio.component";
import Home from "./pages/Home.page";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Title" exact element={<Title />} />
          <Route path="/what" exact element={<WhatWeDo />} />
          <Route path="/intro" exact element={<Introduction />} />
          <Route path="recentProject" exact element={<RecentProjects />} />
          <Route path="portfolio" exact element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
