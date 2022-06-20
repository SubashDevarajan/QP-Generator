import SectionTab from "./sectionTabs";
import InputForm from "./qpInputForm";
import QPButtonPanel from "./questionButtonsPanel";
import { DataStorage } from "./dataProvider";
import { useContext, useRef } from "react";
import * as React from 'react';
import { Box, Typography, Modal, Paper } from "@mui/material";
import ReactToPrint from "react-to-print";

import { makeStyles } from '@material-ui/core/styles';
import Preview from "./Preview";
import Progress from "./progressBar";
import ComponentToPrint from "./printFC";
import ProgressCo from "./coProgessBar";

const QPInputPanel = () => {
  const [openBl, setOpenBl] = React.useState(false);
  const handleOpenBl = () => setOpenBl(true);
  const handleCloseBl = () => setOpenBl(false);

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginTop: 17,
      paddingTop: 15,
      paddingBottom: 12,
      height: 230

    },
    tab: {
      fontSize: 12,
      color: "#5f6368",
      textTransform: "capitalize",
      height: 10,
      fontWeight: "600",
      fontFamily: 'Google Sans,Roboto,Arial,sans-serif',

    },
    tabs: {
      height: 10

    }
  });

  const componentRef = useRef();

  const classes = useStyles();

  const style = {
    // position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // // width: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
  };

  const [
    current,
    setCurrent,
    qpInfo,
    setQPInfo,
    qpData,
    setQPData,
    sectionQuestions,
  ] = useContext(DataStorage);
  const currentQuestion =
    sectionQuestions[current["section"]][current["questionIndex"]];
  return (
    <div class="row container-fluid m-0 p-0 my-0 col-12" style={{ height: "100%" }}>
      <div class="col-lg-9">
        <div class="m-3">
          <InputForm />
        </div>
        {/* <div class="my-2">
                    <Demo></Demo>
                </div> */}
      </div>
      <div class="col-lg-3">
        <div class="my-3">
          <SectionTab />
        </div>
        <QPButtonPanel />
        <Paper className={classes.root}>
          <h3>Comparison Graph</h3>
          <div
            class="btn-group mt-2 mb-3"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="submit"
              data-toggle="modal"
              data-target="#BLLevelProgress"
              class="btn btn-primary"
            >
              BL Level
            </button>

            <button
              type="submit"
              data-toggle="modal"
              data-target="#COLevelProgress"
              class="btn btn-secondary">
              Course Outcome
            </button>
          </div>
          <hr />
          <div class="my-3 d-flex justify-content-center">
            <button
              class="btn btn-warning mx-3"
              type="submit"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Preview
            </button>
            {/* <button class="btn btn-success mx-3" type="submit">
              Print
            </button> */}
            {/* <Print /> */}
            <div>
              <ReactToPrint
                trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
                content={() => componentRef.current}
              />
            </div>
          </div>
        </Paper>
      </div>

      <div
        class="modal fade bd-example-modal-lg"
        id="BLLevelProgress"
        tabindex="-1"
        role="dialog"
        aria-labelledby="BLLevelProgressTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="BLLevelProgressTitle">
                Bloom Taxonomy Standard
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <Progress />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade bd-example-modal-lg"
        id="COLevelProgress"
        tabindex="-1"
        role="dialog"
        aria-labelledby="COLevelProgressTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="COLevelProgressTitle">
                Course Outcome Allocation
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ProgressCo />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade bd-example-modal-lg"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                QuestionPaper Preview
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* <TableComponent ref={(response) => (this.componentRef = response)} /> */}
              <ComponentToPrint ref={componentRef} />
              {/* <Preview /> */}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default QPInputPanel;
