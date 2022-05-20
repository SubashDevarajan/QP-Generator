// import DatePicker from "react-datepicker";
import Select from 'react-select';

import * as React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { DataStorage } from './dataProvider';

const CourseDetails = () => {

  const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData, sectionQuestions] = useContext(DataStorage);
  const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]];

  function handleSelectChange(v, e) {
    setQPInfo({
      ...qpInfo,
      [e.name]: v.value
    });
    console.log(qpInfo)
  }

  function handleChange() {

  }

  var departments = [{ value: "Mathematics", label: "Mathematics" }, { value: "Computer Science", label: "Computer Science" }, { value: "Information Technology", label: "Information Technology" }];
  var campus = [{ value: "College of Engineering, Guindy", label: "CEG" }, { value: "ACT", label: "ACT" }, { value: "SAP", label: "SAP" }];
  var branches = [{ value: "M.Sc Integrated CS/IT", label: "M.Sc Integrated CS/IT" }, { value: "B.E. CSE", label: "B.E. CSE" }, { value: "B.Tech. IT", label: "B.Tech. IT" }];
  var semester = [
    { value: "I", label: "I" },
    { value: "II", label: "II" },
    { value: "III", label: "III" },
    { value: "IV", label: "IV" },
    { value: "V", label: "V" },
    { value: "VI", label: "VI" },
    { value: "VII", label: "VII" },
    { value: "VIII", label: "VIII" },
    { value: "IX", label: "IX" },
    { value: "X", label: "X" }
  ];
  const regulations = [{ value: "2019", label: "2019" }];
  const [value, setValue] = React.useState(null);
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const a = axios
      .get("http://localhost:5000/api/course")
      .then((res) => {
        setCourse(res.data.rows);
        // console.log(res.data.rows);
      })
      .catch((e) => console.log(e));
  }, []);

  var CourseList = [];

  for (let i in course) {
    CourseList.push({ value: course[i]["coursecode"] + " - " + course[i]["coursename"], label: course[i]["coursecode"] + " - " + course[i]["coursename"] })
  }


  return (
    // <form action="" method="post">
    <div>
      <h2 class="d-flex justify-content-center"> Course Details </h2>
      <div class="row">
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Campus</h5>
          <div class="col-lg-9">
            <Select
              name='campus'
              // isMulti
              isSearchable
              options={campus}
              onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Department</h5>
          <div class="col-lg-9">
            <Select
              name='department'
              // isMulti
              isSearchable
              options={departments}
              onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Branch</h5>
          <div class="col-lg-9">
            <Select
              name='branch'
              // isMulti
              isSearchable
              options={branches}
            onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Subject</h5>
          <div class="col-lg-9">
            <Select
              name='subjectCodeTitle'
              // isMulti
              isSearchable
              options={CourseList}
            onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Semester</h5>
          <div class="col-lg-9">
            <Select
              name='semester'
              // isMulti
              isSearchable
              options={semester}
            onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Regulation</h5>
          <div class="col-lg-9">
            <Select
              name='regulation'
              // isMulti
              isSearchable
              options={regulations}
            onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Date</h5>
          <div class="col-lg-9 h-50">
            <input
              type="date"
              onChange={handleChange}
              class="leading-none text-gray-900 p-1 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200"
              placeholder="Select Date"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails;