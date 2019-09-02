import React from "react";
import DashboardMenu from "./DashboardMenu";
import Profile from "./Profile";
import Collection from "./Collection";
import AddPost from "./addPost";
function Dashboard() {
  return (
    <div className="dashboard  row d-flex ">
      <div className=" menu-container col-2">
        <DashboardMenu />
      </div>
      <div className="dashboard-content mr-4 col-9">
        <Profile />
        <Collection />
      </div>
    </div>
  );
}

export default Dashboard;
