import React, { useEffect } from "react";
import AdminTitle from "./AdminTitle.Component";
import BarChart from "./BarChart.Component";
import increaseIcon from "../img/increaseArrow.svg";
import decreaseIcon from "../img/decreaseArrow.svg";

import { data } from "../Data/BarChart.Data";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Admin Panel - Zpro";
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
              <img src={increaseIcon} alt="icon" />
              <img src={decreaseIcon} alt="icon" />
            </div>
            <p className="highlighted">168</p>
          </div>
        </div>
        <AdminTitle title="Overview" desc="Data Visualization, Statistics" />
        <div style={{ height: 500 }}>
          <BarChart data={data} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
