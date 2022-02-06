import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { url } from "../URL";

export const TokenContext = createContext(null);
const TokenContextProvider = ({ children }) => {
  const location = useLocation();
  const currentLocation = location.pathname;

  const [csrfToken, setCsrfToken] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState("");

  const navigate = useNavigate();

  //get csrf token
  useEffect(() => {
    const abortController = new AbortController();

    fetch(url + "/csrf", {
      method: "GET",
      signal: abortController.signal,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setCsrfToken(data.csrfToken);
      });
    return () => abortController.abort();
  }, []);

  //get token if refresh token exists
  useEffect(() => {
    if (
      currentLocation === "/contact" ||
      currentLocation.split("/").includes("careers")
    ) {
      return 0;
    }
    const abortController = new AbortController();

    if (csrfToken === null) return 0;

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
          setAdmin(data.admin);
          setLoading(false);
          return setToken(data.accessToken);
        } else {
          setToken("");
          navigate("/admin");
        }
      });
    setLoading(false);

    return () => abortController.abort();
  }, [csrfToken, token, navigate, currentLocation]);

  return (
    <>
      <TokenContext.Provider
        value={{
          token,
          setToken,
          csrfToken,
          loading,
          setLoading,
          setCsrfToken,
          admin,
        }}
      >
        {children}
      </TokenContext.Provider>
    </>
  );
};
export default TokenContextProvider;
