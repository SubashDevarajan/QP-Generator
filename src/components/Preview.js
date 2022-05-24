import React from "react";
import "./styles/previewStyle.css";
import { DataStorage } from './dataProvider';
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Collapse } from "@mui/material";

const Preview = () => {
  const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData, sectionQuestions] = useContext(DataStorage);

  const coArray = ["CO1", "CO2", "CO3", "CO4", "CO5"];
  const [co, setCo] = useState([]);


  useEffect(() => {
    let data = { coursecode: "XC7851" };
    const a = axios
      .get("http://localhost:5000/api/courseoutcome")
      .then((res) => {
        setCo(res.data.rows);
        // console.log(res.data.rows);
      })
      .catch((e) => console.log(e));
  }, []);

  var COList = [];

  for (let i in co) {
    COList.push({ value: co[i]["levels"], label: co[i]["courseoutcomes"] })
  }

  // console.log(COList)

  return (
    <>
      <h4 class="text_center font">{qpInfo["university"]} </h4>
      <h4 class="text_center font">{qpInfo["description"]}</h4>
      <p class="align_text font">{qpInfo["branch"]}</p>
      <p class="align_text font">{"Semester " + qpInfo["semester"]}</p>
      <p class="align_text bold font">{qpInfo["subjectCodeTitle"]}</p>
      <p class="align_text font">{'Regulation ' + qpInfo["regulation"]}</p>
      <p class="align_left font">{"Time: " + qpInfo['time'] + " hrs"}</p>
      <p class="align_right font">{"Max.Marks: " + qpInfo["marks"]}</p>
      <p class="float font">Answer ALL Questions</p>
      <div style={{ clear: "both" }}></div>
      <table id="fetch" style={{ width: "70%" }} class="center table-bordered" rules="all">
        <tbody>
        {Object.keys(COList).map(function (coc, index) {
            console.log(coc)
            return (
              <tr>
                <td>{COList[coc]["value"]}</td>
                <td style={{ width: "95%" }}>{COList[coc]["label"]}</td>
              </tr>)
          })}
          {/* {coArray.map(function (co, index) {
            return (
              <tr>
                <td>{"CO" + (index + 1)}</td>
                <td style={{ width: "95%" }}></td>
              </tr>)
          })} */}
        </tbody>
      </table>
      <br></br>
      <u class="bold">Part-A (10 x 2 =20 Marks)</u>

      <table id="fetch" style={{ width: "80%" }} class="text_center table-bordered">
        <thead>
          <tr className="normal">
            <th>Sl.No.</th>
            <th style={{ width: "70%" }} text>
              Questions
            </th>
            <th>Marks</th>
            <th style={{ width: "7%" }}>CO</th>
            <th style={{ width: "7%" }}>BL</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(qpData["A"]).map(function (quesNum, index) {
            let curSection = qpData["A"]
            return (
              <tr>
                <td>{quesNum}</td>
                <td class="center">{curSection[quesNum]["question"]}</td>
                <td>{curSection[quesNum]["marks"]}</td>
                <td>{curSection[quesNum]["courseOutcome"]}</td>
                <td>{curSection[quesNum]["blLevel"]}</td>
              </tr>)
          })}
        </tbody>
      </table><br></br>
      <u class='bold'>Part-B (5 x 13 = 65)</u>
      <p class='bold padding'>(Answer only 5 Questions)</p>
      <table id="fetch" style={{ width: "80%" }} class='text_center table-bordered'>
        <thead>
          <tr className='normal'>
            <th>Sl.No.</th>
            <th style={{ width: "70%" }} text>Questions</th>
            <th>Marks</th>
            <th style={{ width: "7%" }}>CO</th>
            <th style={{ width: "7%" }}>BL</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(qpData["B"]).map(function (quesNum, index) {
            let curSection = qpData["B"]
            return (
              <tr>
                <td>{quesNum}</td>
                <td class="center">{curSection[quesNum]["question"]}</td>
                <td>{curSection[quesNum]["marks"]}</td>
                <td>{curSection[quesNum]["courseOutcome"]}</td>
                <td>{curSection[quesNum]["blLevel"]}</td>
              </tr>)
          })}
        </tbody>
      </table>
      {/* <br></br>
            <br></br>
            <br></br> */}
      <br></br>
      <br></br>
      <br></br>
      <u class='bold'>Part-C (1 x 15 = 15)</u>
      <table id="fetch" style={{ width: "80%" }} class='text_center table-bordered'>
        <thead>
          <tr className='normal'>
            <th>Sl.No.</th>
            <th style={{ width: "70%" }} text>Questions</th>
            <th>Marks</th>
            <th style={{ width: "7%" }}>CO</th>
            <th style={{ width: "7%" }}>BL</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(qpData["C"]).map(function (quesNum, index) {
            let curSection = qpData["C"]
            return (
              <tr>
                <td>{quesNum}</td>
                <td class="center">{curSection[quesNum]["question"]}</td>
                <td>{curSection[quesNum]["marks"]}</td>
                <td>{curSection[quesNum]["courseOutcome"]}</td>
                <td>{curSection[quesNum]["blLevel"]}</td>
              </tr>)
          })}
        </tbody>
      </table>
    </>
  );
};

export default Preview;
