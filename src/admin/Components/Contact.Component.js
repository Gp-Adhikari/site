import React, { useEffect, useContext, useState } from "react";
import AdminTitle from "./AdminTitle.Component";
// import { contacts } from "../Data/Contact.data";
import { TokenContext } from "../../Contexts/TokenContext";
import { url } from "../../URL";
const Contact = () => {
  const { token, csrfToken, setLoading } = useContext(TokenContext);

  useEffect(() => {
    document.title = "Contact | Admin Panel - Zpro";
  }, []);

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(null);
    const abortController = new AbortController();
    const abortController2 = new AbortController();

    fetch(url + "/token", {
      method: "GET",
      signal: abortController.signal,
      credentials: "include",
      headers: {
        "xsrf-token": csrfToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const accessToken = data.accessToken;

          fetch(url + "/contact", {
            method: "GET",
            credentials: "include",
            signal: abortController2.signal,
            headers: {
              "xsrf-token": csrfToken,
              Authorization: `Bearer ${accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setLoading(false);
              setContacts(data.contacts);
            });
        }
      });

    return () => {
      abortController.abort();
      abortController2.abort();
    };
  }, [setLoading, token, csrfToken]);

  //on contact delete
  const deleteContact = (contact) => {
    if (contacts.includes(contact)) {
      setContacts(contacts.filter((item) => item !== contact));
    } else {
      return;
    }
    setLoading(true);
    fetch(url + "/token", {
      method: "GET",
      credentials: "include",
      headers: {
        "xsrf-token": csrfToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const accessToken = data.accessToken;
          fetch(url + "/contact/" + String(contact._id), {
            method: "DELETE",
            credentials: "include",
            headers: {
              "xsrf-token": csrfToken,
              Authorization: `Bearer ${accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setLoading(false);
            });
        }
      });
  };

  return (
    <>
      <div className="contactContainer">
        <AdminTitle title="Contacts" desc="Clients / Reviews" />
        <div className="contacts-wrapper">
          {contacts === null ? (
            <h3>Loading ...</h3>
          ) : contacts[0] !== undefined ? (
            contacts.map((data) => (
              <div className="contacts" key={data._id}>
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
                <input
                  type="button"
                  value="Remove"
                  onClick={() => deleteContact(data)}
                />
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
