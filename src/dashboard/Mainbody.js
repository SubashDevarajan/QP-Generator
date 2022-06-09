import React from "react";
import Card from "./Card";
import "./Mainbody.css";
import MediaCard from "./QuestionCard";

function Mainbody() {
  return (
    <div className="mainbody">
      <hr></hr>
      <div className="main_top"></div>
      <div className="main_docs">
        <MediaCard /> <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
}

export default Mainbody;
