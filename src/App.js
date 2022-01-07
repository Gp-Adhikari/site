import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Portfolio = lazy(() =>
  import("./components/portfolioComponent/Portfolio.component")
);
const Services = lazy(() => import("./pages/Services.page"));
const Footer = lazy(() => import("./components/Footer.component"));
const Header = lazy(() => import("./components/Header.component"));
const Home = lazy(() => import("./pages/Home.page"));

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
};

export default App;
