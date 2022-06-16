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

  const courseCode = "XC7453";
  useEffect(() => {
    const a = axios
      .get(`http://localhost:5000/api/courseoutcome/${courseCode}`)
      .then((res) => {
        setCo(res.data.rows);
        // console.log(res.data.rows);
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
        <h3 class="para_center  bold font_header">{qpInfo["university"]} </h3>
        <h3 class="para_center bold font_header">
          {qpInfo["branch"]} {qpInfo["description"]}
        </h3>
        <p class="align_text font">{qpInfo["course"]}</p>
        <p class="align_text font">{"Semester " + qpInfo["semester"]}</p>
        <p class="align_text bold font">{qpInfo["subjectCodeTitle"]}</p>
        <p class="align_text font">({"Regulation " + qpInfo["regulation"]})</p>
        <p class="align_left1">{"Time: " + qpInfo["time"] + " hrs"}</p>
        <p class="align_right1">{"Max.Marks: " + qpInfo["marks"]}</p>
        <div style={{ clear: "both" }}></div>
      </div>
      <div>
        <table id="fetch" class="width center table-bordered">
          <tbody>
            {Object.keys(COList).map(function (coc, index) {
              // console.log(COList[coc]["value"].substring(2, 3))
              return (
                <tr>
                  <td>{COList[coc]["value"]}</td>
                  <td style={{ width: "100%" }}>{COList[coc]["label"]}</td>
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
                <td class="center font">{curSection[quesNum]["i"]["question"]}</td>
                <td className="bold font">{curSection[quesNum]["i"]["marks"]}</td>
                <td className="font">{curSection[quesNum]["i"]["courseOutcome"].substring(2, 3)}</td>
                <td className="font">{curSection[quesNum]["i"]["blLevel"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <div class="bold align_text font">
        <u>PART-B (5 x 13 = 65 Marks)</u>
      </div>
      <table id="fetch" class="width text_center table-bordered">
        <thead>
          <tr className="normal">
            <th className=" font bold " style={{ width: "16%" }}>
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
            if (curSection[quesNum]["ii"]["question"].trim() == "")
              return (
                <>
                  <tr>
                    <td className="font">{quesNum}</td>
                    <td class="center font">{curSection[quesNum]["i"]["question"]}</td>
                    <td className="bold font">{13}</td>
                    <td className="font">{curSection[quesNum]["i"]["courseOutcome"].substring(2, 3)}</td>
                    <td className="font">{curSection[quesNum]["i"]["blLevel"]}</td>
                  </tr>
                  {quesNum.split(" ")[1] == "(a)" &&
                    <tr>
                      <td colspan="5">OR</td>
                    </tr>}
                  {(quesNum.split(" ")[1] == "(b)") && (quesNum != "15 (b)") &&
                    <tr>
                      <td colspan="5">&nbsp;</td>
                    </tr>}
                </>
              )
            else
              return (
                <>
                  <tr>
                    <td className="font">{quesNum + " (i)"}</td>
                    <td class="center font">{curSection[quesNum]["i"]["question"]}</td>
                    <td className="bold font">{curSection[quesNum]["i"]["marks"]}</td>
                    <td className="font">{curSection[quesNum]["i"]["courseOutcome"].substring(2, 3)}</td>
                    <td className="font">{curSection[quesNum]["i"]["blLevel"]}</td>
                  </tr>
                  <tr>
                    <td className="font">{quesNum + " (ii)"}</td>
                    <td class="center font">{curSection[quesNum]["ii"]["question"]}</td>
                    <td className="bold font">{curSection[quesNum]["ii"]["marks"]}</td>
                    <td className="font">{curSection[quesNum]["ii"]["courseOutcome"].substring(2, 3)}</td>
                    <td className="font">{curSection[quesNum]["ii"]["blLevel"]}</td>
                  </tr>
                  {quesNum.split(" ")[1] == "(a)" &&
                    <tr>
                      <td colspan="5">OR</td>
                    </tr>}
                  {(quesNum.split(" ")[1] == "(b)") && (quesNum != "15 (b)") &&
                    <tr>
                      <td colspan="5">&nbsp;</td>
                    </tr>}
                </>
              )
          })}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <div class="bold align_text  font">
        <u>PART-C (1 x 15 = 15 Marks)</u>
      </div>
      <p class="p_center font">(Q.No.16 is compulsory)</p>
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
            if (curSection[quesNum]["ii"]["question"].trim() == "")
              return (
                <>
                  <tr>
                    <td className="font">{quesNum}</td>
                    <td class="center font">{curSection[quesNum]["i"]["question"]}</td>
                    <td className="bold font">{15}</td>
                    <td className="font">{curSection[quesNum]["i"]["courseOutcome"].substring(2, 3)}</td>
                    <td className="font">{curSection[quesNum]["i"]["blLevel"]}</td>
                  </tr>
                </>
              )
            else
              return (
                <>
                  <tr>
                    <td className="font">{quesNum + " (i)"}</td>
                    <td class="center font">{curSection[quesNum]["i"]["question"]}</td>
                    <td className="bold font">{curSection[quesNum]["i"]["marks"]}</td>
                    <td className="font">{curSection[quesNum]["i"]["courseOutcome"].substring(2, 3)}</td>
                    <td className="font">{curSection[quesNum]["i"]["blLevel"]}</td>
                  </tr>
                  <tr>
                    <td className="font">{quesNum + " (ii)"}</td>
                    <td class="center font">{curSection[quesNum]["ii"]["question"]}</td>
                    <td className="bold font">{curSection[quesNum]["ii"]["marks"]}</td>
                    <td className="font">{curSection[quesNum]["ii"]["courseOutcome"].substring(2, 3)}</td>
                    <td className="font">{curSection[quesNum]["ii"]["blLevel"]}</td>
                  </tr>
                </>
              )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Preview;
