import React from "react";
import { useHistory } from "react-router-dom";
import blank from "./createNew.png";
import { Link } from "react-router-dom";
import "./Templates.css";

function Templates() {
  return (
    <div className="template_section">
      <div className="template_top"></div>
      <div className="template_body">
        <Link to="/input-form">
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
