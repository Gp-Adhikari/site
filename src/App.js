import React, { Suspense, lazy } from "react";
import "./scss/loader.css";
import "./scss/responsive.css";
import "./scss/contact.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Footer = lazy(() => import("./components/Footer.component"));
const Header = lazy(() => import("./components/Header.component"));
const Home = lazy(() => import("./pages/Home.page"));
const Carrers = lazy(() => import("./pages/Carrers.page"));
const ApplyNow = lazy(() => import("./components/ApplyNow.component"));
const ContactUs = lazy(() => import("./components/ContactUs.component"));
const About = lazy(() => import("./pages/About.page"));
const Portfolio = lazy(() =>
  import("./components/portfolioComponent/Portfolio.component")
);
const Services = lazy(() => import("./pages/Services.page"));
const Page404 = lazy(() => import("./pages/Page404.page"));
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
            <Route path="/about" exact element={<About />} />
            <Route path="/portfolio" exact element={<Portfolio />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/carrers" exact element={<Carrers />} />
            <Route path="/carrers/:id" element={<ApplyNow />} />
            <Route path="/contact" exact element={<ContactUs />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
};

export default App;
