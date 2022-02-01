import React, { createContext, useEffect, useState } from "react";

import { url } from "../URL";

export const TokenContext = createContext(null);
const TokenContextProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch(url + "/", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.csrfToken))
      .catch((err) => {
        return 0;
      });
  }, []);

  return (
    <>
      <TokenContext.Provider value={{ token, setToken, csrfToken }}>
        {children}
      </TokenContext.Provider>
    </>
  );
};
export default TokenContextProvider;
