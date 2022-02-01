import React, { createContext, useEffect, useState } from "react";

import { url } from "../URL";

export const TokenContext = createContext(null);
const TokenContextProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  //get csrf token
  useEffect(() => {
    fetch(url + "/", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setCsrfToken(data.csrfToken);
      })
      .catch((err) => {
        return 0;
      });
  }, []);

  //get token if refresh token exists
  useEffect(async () => {
    if ((await csrfToken) === null) return 0;

    await fetch(url + "/token", {
      method: "GET",
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

    //await has no effect here but is needed for loading to work
    await setLoading(false);
  }, [csrfToken]);

  return (
    <>
      <TokenContext.Provider value={{ token, setToken, csrfToken, loading }}>
        {children}
      </TokenContext.Provider>
    </>
  );
};
export default TokenContextProvider;
