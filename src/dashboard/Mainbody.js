import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Mainbody.css";
import MediaCard from "./QuestionCard";



function Mainbody(props) {
  const [qp, setQp] = useState([]);
  

  useEffect(() => {
    console.log()
    
  },[]);
  getAll=()=>{
    axios
      .get(`http://localhost:5000/api/qp/${localStorage.getItem("UserId")}`)
      .then((res) => {
        setQp(res.data.rows);
        console.log(res.data.rows);
      })
      .catch((e) => console.log(e.response));
  }
  return (
    <div className="mainbody">
      <hr></hr>
      <div className="main_top"></div>
      <div className="main_docs wrapper">
        {
          qp.map(function (ques, index) {
            console.log(ques);
            return <MediaCard branch={ques["qp_info"]["branch"]?ques["qp_info"]["branch"]:"Untitled"} subject={ques["qp_info"]["subjectCodeTitle"]?ques["qp_info"]["branch"]:"Not Chosen"} qpId={ques["qp_id"]} />
          }
          )
        }
      </div>
    </div>
  );
}

export default Mainbody;
