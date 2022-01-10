import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Zpro";
  }, []);
  return (
    <>
      <p>Contact</p>
    </>
  );
};

export default Contact;
