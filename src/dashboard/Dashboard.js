import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Mainbody from "./Mainbody";
import Templates from "./Templates";
import ResponsiveAppBar from "../components/navbar";

function Dashboard() {
  useEffect(() => {
    const token = localStorage.getItem("AuthId");
    // console.log(token);
    if (token == null) {
      window.location.href = "/";
    }
  });
  return (
    <div>
      {/* <p> hi </p> */}
      <ResponsiveAppBar show={false} />
      <Templates />
      <Mainbody />
    </div>
  );
}

export default Dashboard;
