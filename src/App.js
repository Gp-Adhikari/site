import React, { Suspense, lazy } from "react";
import "./scss/loader.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Footer = lazy(() => import("./components/Footer.component"));
const Header = lazy(() => import("./components/Header.component"));
const Home = lazy(() => import("./pages/Home.page"));
const ApplyNow = lazy(() => import("./components/ApplyNow.component"));
const ContactUs = lazy(() => import("./components/ContactUs.component"));
const AboutUs = lazy(() => import("./components/AboutUs.component"));
const Portfolio = lazy(() =>
  import("./components/portfolioComponent/Portfolio.component")
);
const Services = lazy(() => import("./pages/Services.page"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        }
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/carrers" element={<ApplyNow />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
};

export default App;
