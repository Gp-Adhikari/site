import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.component";
import Title from "./components/Title.component"; 
import Banner from "./components/Banner.component";
import CareerItem from "./components/CareerItem.component";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Header />} />
          <Route path ="/banner" exact element={<Banner/>}/>
          <Route path="/Title" exact element={<Title />} />
          <Route path="/careeritem/:id" exact element={<CareerItem/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
