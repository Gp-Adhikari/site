import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.component";
import Title from "./components/Title.component";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Header />} />
          <Route path="/Title" exact element={<Title />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
