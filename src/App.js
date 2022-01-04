import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.component";
import Title from "./components/Title.component";
import WhatWeDo from "./components/WhatWeDo.component";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Header />} />
          <Route path="/Title" exact element={<Title />} />
          <Route path="/what" exact element={<WhatWeDo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
