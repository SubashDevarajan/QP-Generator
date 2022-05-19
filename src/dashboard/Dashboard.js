import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Mainbody from "./Mainbody";
import Templates from "./Templates";

function Dashboard() {
  return (
    <div className="app">
      <Header />
      <Templates />
      <Mainbody />
    </div>
  );
}

export default Dashboard;
