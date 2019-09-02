import React from "react";
import DashboardMenu from "./DashboardMenu";
import Profile from "./Profile";
import Collection from "./Collection";
import AddPost from "./addPost";
function Dashboard() {
  return (
    <div className="dashboard  row d-flex justify-content-between">
      <div className=" menu-container col-3">
        <DashboardMenu />
      </div>
      <div className="dashboard-content col-9">
        <Profile />
        <Collection />
      </div>
    </div>
  );
}

export default Dashboard;
