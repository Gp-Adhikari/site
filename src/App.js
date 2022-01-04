import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.component";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Header />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
