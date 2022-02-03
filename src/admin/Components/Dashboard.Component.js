import React, { useEffect, useContext, useState } from "react";
import AdminTitle from "./AdminTitle.Component";
import BarChart from "./BarChart.Component";
import increaseIcon from "../img/increaseArrow.svg";
import decreaseIcon from "../img/decreaseArrow.svg";

import { TokenContext } from "../../Contexts/TokenContext";
import { url } from "../../URL";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Admin Panel - Zpro";
  }, []);

  const { token, csrfToken, setLoading } = useContext(TokenContext);

  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url + "/pageVisits", {
      method: "GET",
      credentials: "include",
      signal: abortController.signal,
      headers: {
        "xsrf-token": csrfToken,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });

    return () => abortController.abort();
  }, []);
  return (
    <>
      <div className="dashboardContainer">
        <AdminTitle title="Dashboard" desc="Dashboard / Analytics" />
        <div className="visits-wrapper">
          <div className="total-visits">
            <p>Total Visits</p>
            <p>20,000</p>
          </div>
          <div className="todays-visits">
            <div className="todays-visits-tit">
              <p>Today's Visits</p>
              {data === null ? null : data.yesterdayVisits >
                data.todayVisits ? (
                <img src={decreaseIcon} alt="icon" />
              ) : (
                <img src={increaseIcon} alt="icon" />
              )}
            </div>
            <p className="highlighted">
              {data !== null ? data.todayVisits : 0}
            </p>
          </div>
        </div>
        <AdminTitle title="Overview" desc="Data Visualization, Statistics" />
        <div style={{ height: 500 }}>
          <BarChart data={data === null ? [] : data.pageVisits} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
