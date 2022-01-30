import React, { createContext, useState } from "react";

export const AdminSideBarContext = createContext(null);

const AdminSideBarContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const changeSideBarState = () => {
    return setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <AdminSideBarContext.Provider value={{ isSideBarOpen, changeSideBarState }}>
      {children}
    </AdminSideBarContext.Provider>
  );
};

export default AdminSideBarContextProvider;
