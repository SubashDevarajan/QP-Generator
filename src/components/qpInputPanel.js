import SectionTab from "./sectionTabs";
import InputForm from "./qpInputForm";
import QPButtonPanel from "./questionButtonsPanel";
import { DataStorage } from "./dataProvider";
import { useContext } from "react";
import Demo from "./demo";
import Preview from "./Preview";

const QPInputPanel = () => {
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
    <div class="row container mw-100">
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
        <div class="row mt-3 form-control p-3" style={{ height: 215 }}>
          <h3>Comparison Graph</h3>
          <div
            class="btn-group mt-2 mb-3"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn btn-primary">
              BL Level
            </button>
            <button type="button" class="btn btn-secondary">
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
            <button class="btn btn-success mx-3" type="submit">
              Print
            </button>
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
              <Preview />
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
