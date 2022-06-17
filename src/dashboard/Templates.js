import React from "react";
import { useHistory } from "react-router-dom";
import blank from "./createNew.png";
import { Link } from "react-router-dom";
import "./Templates.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function Templates() {

  var userId = localStorage.getItem("UserId")

  const [qData, setQData] = useState({
    user_id: userId,
    qp_info: {},
    qp_details: {},
});

  function handleClick() {
    axios
      .post("http://localhost:5000/api/postqp", qData)
      .then((res) => {
        localStorage.setItem("QpId", res.data[0]["qp_id"]);
      })
      .catch((e) => console.log(e.response));
  }

  return (
    <div className="template_section">
      <div className="template_top"></div>
      <div className="template_body">
        <Link onClick={handleClick} to="/input-form">
          <div className="card">
            <img src={blank} className="card_image" style={{}} />
            <p className="title1">New Question Paper</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Templates;
