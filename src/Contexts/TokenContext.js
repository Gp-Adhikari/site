import React, { createContext, useEffect, useState } from "react";

import { url } from "../URL";

export const TokenContext = createContext(null);
const TokenContextProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
          return setToken(data.accessToken);
        }
      });
    setLoading(false);

    return () => abortController.abort();
  }, [csrfToken, token]);

  return (
    <>
      <TokenContext.Provider value={{ token, setToken, csrfToken, loading }}>
        {children}
      </TokenContext.Provider>
    </>
  );
};
export default TokenContextProvider;
