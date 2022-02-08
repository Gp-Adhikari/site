import React from "react";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <>
      <div className="aboutUs-Zpro">
        <div className="Zpro-intro">
          <h2>Zpro ?</h2>
          <p>
            Zpro is well-established and <code>trusted IT company</code> for
            high quality services with modern and custom design for reasonable
            cost and with <code>high efficiency</code>. We try our best to make
            our clients happy and satisfy with our creations.
          </p>
          <p>
            We provide creative, <code>secure</code> and bug-free websites for
            you at <code>reasonable cost</code>. Our company has reliable
            <code>experts</code>, such IT Engineers, Developers, Designers, and
            more. We work hard for best quality designs. We are your best
            partner and will help with brilliant, <code>passionate </code> and
            hard-working team members. We provide with first class service and
            deliver quality outputs. We work to the highest of standards in
            providing the <code>best quality</code>.
          </p>
          <p>
            <code>In terms of Technology</code>, we use the latest tools &amp;
            technology, dynamic and responsive web design. We use
            <code>React JS library</code> in Front-End to make your web fast and
            more interactive and in the backend we use javascript frame work
            such as <code>NodeJS</code>, ExpressJS to make your API’s to load
            fast. We also use MongoDB ( A NoSQL database ) for storing your data
            and also to make your site perform faster.
          </p>
          <p>
            <code>Our Mission</code> is to design and customize your business
            platform. We promise you to get the best possible return on your
            investment with our experienced and passionate team who can bring
            positive changes to the company’s working conditions. We assure you
            that we are here to promote your regular and continuous development
            even in a difficult situation.
          </p>
          <p>
            We give you best in return! Now{" "}
            <Link to="/contact">
              <code className="contact-color">Contact Us</code>
            </Link>{" "}
            and have a great, awesome looking and secure site at a resonable
            price.
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
