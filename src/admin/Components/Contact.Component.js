import React, { useEffect } from "react";
import AdminTitle from "./AdminTitle.Component";
import { contacts } from "../Data/Contact.data";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Admin Panel - Zpro";
  }, []);
  return (
    <>
      <div className="contactContainer">
        <AdminTitle title="Contacts" desc="Clients / Reviews" />
        <div className="contacts-wrapper">
          {contacts[0] !== undefined ? (
            contacts.map((data) => (
              <div className="contacts" key={data.id}>
                <h2>Name: {data.name}</h2>
                <div className="contact-info">
                  <p>Subject:</p>
                  <p>{data.subject}</p>
                </div>
                <div className="contact-info">
                  <p>Phone Number:</p>
                  <p>{data.ph}</p>
                </div>
                <div className="contact-info">
                  <p>Email:</p>
                  <p>{data.email}</p>
                </div>
                <div className="contact-infomsg">
                  <p>Message:</p>
                  <p>{data.message}</p>
                </div>
                <input type="button" value="Remove" />
              </div>
            ))
          ) : (
            <p className="not-available">No Contacts Available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
