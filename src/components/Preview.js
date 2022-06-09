import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DataStorage } from "./dataProvider";
import "./styles/previewStyle.css";

const Preview = () => {
  const [
    current,
    setCurrent,
    qpInfo,
    setQPInfo,
    qpData,
    setQPData,
    sectionQuestions,
  ] = useContext(DataStorage);

  const coArray = ["CO1", "CO2", "CO3", "CO4", "CO5"];
  const [co, setCo] = useState([]);

  useEffect(() => {
    let data = { coursecode: "XC7851" };
    const a = axios
      .get("http://localhost:5000/api/courseoutcome")
      .then((res) => {
        setCo(res.data.rows);
        console.log(res.data.rows);
      })
      .catch((e) => console.log(e));
  }, []);

  var COList = [];

  for (let i in co) {
    COList.push({ value: co[i]["levels"], label: co[i]["courseoutcomes"] });
  }

  // console.log(COList)

  return (
    <div class="margin">
      <div className="align_right">
        <p className="align_left ">ROLL NO.</p>
        <ul id="ulist">
          <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>{" "}
          <li></li> <li></li> <li></li>
        </ul>
      </div>{" "}
      <br></br>
      <br></br>
      <div>
        <h4 class="para_center  bold font">{qpInfo["university"]} </h4>
        <h4 class="para_center bold font">
          {qpInfo["branch"]} {qpInfo["description"]}
        </h4>
        <p class="align_text font">{qpInfo["course"]}</p>
        <p class="align_text font">{"Semester " + qpInfo["semester"]}</p>
        <p class="align_text bold font">{qpInfo["subjectCodeTitle"]}</p>
        <p class="align_text font">({"Regulation " + qpInfo["regulation"]})</p>
        <p class="align_left bold">{"Time: " + qpInfo["time"] + " hrs"}</p>
        <p class="align_right bold">{"Max.Marks: " + qpInfo["marks"]}</p>
        <div style={{ clear: "both" }}></div>
      </div>
      <div>
        <table id="fetch" class="width center table-bordered">
          <tbody>
            {Object.keys(COList).map(function (coc, index) {
              // console.log(coc)
              return (
                <tr>
                  <td>{COList[coc]["value"]}</td>
                  <td style={{ width: "100%" }}>{COList[coc]["label"]}</td>
                </tr>
              );
            })}
            {coArray.map(function (co, index) {
              return (
                <tr>
                  <td>{"CO" + (index + 1)}</td>
                  <td style={{ width: "95%" }}></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="bold padding_level font">BL - Bloom's Taxonomy Levels</p>
        <p className="level font">
          (L1 - Remembering, L2 - Understanding, L3 - Applying, L4 - Analysing,
          L5 - Evaluating, L6 - Creating)
        </p>
      </div>
      <br></br>
      <div class="bold align_text font">
        <u>PART-A (10 x 2 =20 Marks)</u>
      </div>
      <p class="p_center font">(Answer all Questions)</p>
      <table id="fetch" class="width text_center table-bordered">
        <thead>
          <tr className="normal">
            <th className="bold font" style={{ width: "12%" }}>
              Q. No
            </th>
            <th className="bold font" style={{ width: "60%" }} text>
              {" "}
              Questions
            </th>
            <th className="bold font" style={{ width: "10%" }}>
              Marks
            </th>
            <th className="bold font" style={{ width: "7%" }}>
              CO
            </th>
            <th className="bold font" style={{ width: "7%" }}>
              BL
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(qpData["A"]).map(function (quesNum, index) {
            let curSection = qpData["A"];
            return (
              <tr>
                <td className="font">{quesNum}</td>
                <td class="center font">{curSection[quesNum]["question"]}</td>
                <td className="bold font">{curSection[quesNum]["marks"]}</td>
                <td className="font">{curSection[quesNum]["courseOutcome"]}</td>
                <td className="font">{curSection[quesNum]["blLevel"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <div class="bold align_text font">
        <u>PART-B (5 x 13 = 65)</u>
      </div>
      <table id="fetch" class="width text_center table-bordered">
        <thead>
          <tr className="normal">
            <th className=" font bold " style={{ width: "12%" }}>
              Q. No
            </th>
            <th className="bold font" style={{ width: "60%" }} text>
              Questions
            </th>
            <th className="bold font" style={{ width: "10%" }}>
              Marks
            </th>
            <th className="bold font" style={{ width: "7%" }}>
              CO
            </th>
            <th className="bold font" style={{ width: "7%" }}>
              BL
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(qpData["B"]).map(function (quesNum, index) {
            let curSection = qpData["B"];
            return (
              <>
                <tr>
                  <td className="font">{quesNum}</td>
                  <td class="center font">{curSection[quesNum]["question"]}</td>
                  <td className="bold font">{curSection[quesNum]["marks"]}</td>
                  <td className="font">
                    {curSection[quesNum]["courseOutcome"]}
                  </td>
                  <td className="font">{curSection[quesNum]["blLevel"]}</td>
                </tr>
                <tr>
                  <td colspan="5">OR</td>
                </tr>
              </>
            );
          })}
          {/* {Object.keys(qpData["Bb"]).map(function (quesNum, index) {
            let curSection = qpData["Bb"]
            return (
              <>
                <tr>
                  <td>{quesNum}</td>
                  <td class="center">{curSection[quesNum]["question"]}</td>
                  <td>{curSection[quesNum]["marks"]}</td>
                  <td>{curSection[quesNum]["courseOutcome"]}</td>
                  <td>{curSection[quesNum]["blLevel"]}</td>
                </tr>
                <tr><td colspan="5"><br></br></td></tr>
              </>
            )
          })}
          {Object.keys(qpData["B15b"]).map(function (quesNum, index) {
            let curSection = qpData["B15b"]
            return (
              <>
                <tr>
                  <td>{quesNum}</td>
                  <td class="center">{curSection[quesNum]["question"]}</td>
                  <td>{curSection[quesNum]["marks"]}</td>
                  <td>{curSection[quesNum]["courseOutcome"]}</td>
                  <td>{curSection[quesNum]["blLevel"]}</td>
                </tr>
              </>
            )
          })} */}
        </tbody>
      </table>
      {/* <br></br>
            <br></br>
            <br></br> */}
      <br></br>
      <br></br>
      <br></br>
      <div class="bold align_text  font">
        <u>PART-C (1 x 15 = 15)</u>
      </div>
      <table id="fetch" class="width text_center table-bordered">
        <thead>
          <tr className="normal">
            <th className="bold font" style={{ width: "12%" }}>
              Q. No
            </th>
            <th className="bold font" style={{ width: "60%" }} text>
              Questions
            </th>
            <th className="bold font" style={{ width: "10%" }}>
              Marks
            </th>
            <th className="bold font" style={{ width: "7%" }}>
              CO
            </th>
            <th className="bold font" style={{ width: "7%" }}>
              BL
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(qpData["C"]).map(function (quesNum, index) {
            let curSection = qpData["C"];
            return (
              <tr>
                <td className="font">{quesNum}</td>
                <td class="center font">{curSection[quesNum]["question"]}</td>
                <td className="bold font">{curSection[quesNum]["marks"]}</td>
                <td className="font">{curSection[quesNum]["courseOutcome"]}</td>
                <td className="font">{curSection[quesNum]["blLevel"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Preview;
