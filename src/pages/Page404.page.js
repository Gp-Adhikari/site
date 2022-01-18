import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Page Not Found";

    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, [navigate]);

  return (
    <div className="container-404">
      <h1>404 - Page Not Found.</h1>
      <button type="button" onClick={() => navigate("/")}>
        Back To Home Page
      </button>
    </div>
  );
};

export default Page404;
