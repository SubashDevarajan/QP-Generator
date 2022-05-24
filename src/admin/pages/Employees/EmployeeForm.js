import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import * as employeeService from "../../services/employeeService";

const initialFValues = {
  id: "",
  courseCode: "",
  courseTitle: "",
  //   courseOutcome: "",
};

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("courseCode" in fieldValues)
      temp.courseCode = fieldValues.courseCode ? "" : "This field is required.";
    if ("courseTitle" in fieldValues)
      temp.courseTitle = fieldValues.courseTitle
        ? ""
        : "This field is required.";
    // if ("courseOutcome" in fieldValues)
    //   temp.courseOutcome = fieldValues.courseOutcome
    //     ? ""
    //     : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    let courseOutcome = [];
    inputList.map((m) => {
      courseOutcome.push(m.courseOutcome);
    });
    console.log(values, courseOutcome);
    if (validate()) {
      addOrEdit({ values: values, couseOutcome: courseOutcome }, resetForm);
    }
  };
  const [inputList, setInputList] = useState([{ courseOutcome: "" }]);

  // handle input change
  const handleInputChange1 = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { courseOutcome: "" }]);
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            name="id"
            label="ID"
            value={values.id}
            onChange={handleInputChange}
            error={errors.id}
          />
          <Controls.Input
            label="CourseCode"
            name="courseCode"
            value={values.courseCode}
            onChange={handleInputChange}
            error={errors.courseCode}
          />
          <Controls.Input
            label="CourseTitle"
            name="courseTitle"
            value={values.courseTitle}
            onChange={handleInputChange}
            error={errors.courseTitle}
          />
          {inputList.map((x, i) => {
            return (
              <div className="box">
                <Controls.Input
                  label="CourseOutcome"
                  name="courseOutcome"
                  value={x.courseOutcome}
                  onChange={(e) => handleInputChange1(e, i)}
                  // error={errors.courseOutcome}
                />
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <button
                      // className="mr10"
                      variant="outlined"
                      onClick={() => handleRemoveClick(i)}
                    >
                      -
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button onClick={handleAddClick}>+</button>
                  )}
                </div>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={12}>
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
