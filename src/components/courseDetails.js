// import DatePicker from "react-datepicker";
import Select from 'react-select';

import * as React from 'react';
import { TextField } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CourseDetails = () => {

  function handleChange() {

  }

  var departments = [{ value: "Mathematics", label: "Mathematics" }, { value: "Computer Science", label: "Computer Science" }, { value: "Information Technology", label: "Information Technology" }];
  var campus = [{ value: "CEG", label: "CEG" }, { value: "ACT", label: "ACT" }, { value: "SAP", label: "SAP" }];
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

  return (
    // <form action="" method="post">
    <div>
      <h2 class="d-flex justify-content-center"> Course Details </h2>
      <div class="row">
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Campus</h5>
          <div class="col-lg-9">
            <Select
              name='courseOutcome'
              // isMulti
              isSearchable
              options={campus}
            // onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Department</h5>
          <div class="col-lg-9">
            <Select
              name='courseOutcome'
              // isMulti
              isSearchable
              options={departments}
            // onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Branch</h5>
          <div class="col-lg-9">
            <Select
              name='courseOutcome'
              // isMulti
              isSearchable
              options={branches}
            // onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Subject</h5>
          <div class="col-lg-9">
            <Select
              name='courseOutcome'
              // isMulti
              isSearchable
              options={departments}
            // onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Semester</h5>
          <div class="col-lg-9">
            <Select
              name='courseOutcome'
              // isMulti
              isSearchable
              options={semester}
            // onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Regulation</h5>
          <div class="col-lg-9">
            <Select
              name='courseOutcome'
              // isMulti
              isSearchable
              options={regulations}
            // onChange={handleSelectChange}
            // value={COList.filter(option =>
            //     option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
            />
          </div>
        </div>
        <div class="row my-3">
          <h5 class="col-lg-3 p-1">Date</h5>
          <div class="col-lg-9 h-50">
            {/* <DatePicker /> */}
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
            <input
              // style={{ width: "60%" }}
              type="date"
              onChange={handleChange}
              class="leading-none text-gray-900 p-1 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200"
              placeholder="Select Date"
            />
          </div>
        </div>
      </div>
      {/* <div class="row">
        <div class="w-full flex flex-col">
          <label class="font-semibold leading-none">
            Subject Code & Title:
          </label>
          &nbsp; &nbsp; &nbsp;
          <Select
            style={{ width: "70%" }}
            type="codeTitle"
            name="CodeTitle"
            class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
          >
            <option>Select Subject Code & Title</option>
            {data.length > 0
                        ? data.map((data) => (
                          <option>
                            {data.coursecode} - {data.cousename}
                          </option>
                        ))
                        : ""}
          </Select>
        </div>
      </div> */}


    </div>
  )
}

export default CourseDetails;