import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";
import doc_image from "./thumbnail.png";

function Card({ name }) {
  return (
    <>
      <div className="doc_card">
        <img src={doc_image} className="doc_card_image"></img>
        <div className="doc_card_content">
          <h5 style={{ overFlow: "ellipsis" }}>
            {name ? name : " XC7851 - Semester Question Paper"}
          </h5>
          <div className="doc_content"></div>
        </div>
      </div>
      <div className="doc_card">
        <img src={doc_image} className="doc_card_image"></img>
        <div className="doc_card_content">
          <h5 style={{ overFlow: "ellipsis" }}>
            {name ? name : " XC7851 - Semester Question Paper"}
          </h5>
          <div className="doc_content"></div>
        </div>
      </div>
      <div className="doc_card">
        <img src={doc_image} className="doc_card_image"></img>
        <div className="doc_card_content">
          <h5 style={{ overFlow: "ellipsis" }}>
            {name ? name : " XC7851 - Semester Question Paper"}
          </h5>
          <div className="doc_content"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
