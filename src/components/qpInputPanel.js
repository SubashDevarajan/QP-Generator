import SectionTab from "./sectionTabs";
import InputForm from "./qpInputForm";
import QPButtonPanel from "./questionButtonsPanel";
import { DataStorage } from "./dataProvider";
import { useContext } from "react";
import Demo from "./demo";

const QPInputPanel = () => {
    const [current,setCurrent,qpInfo,setQPInfo,qpData,setQPData,sectionQuestions] = useContext(DataStorage);
    const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]]
    return (
        <div class='row container my-3 mw-100'>
            <div class='col-lg-9'>
                <div class="my-2">
                    <InputForm />
                </div>
                {/* <div class="my-2">
                    <Demo></Demo>
                </div> */}
            </div>
            <div class='col-lg-3' >
                <div class="my-2">
                    <SectionTab />
                </div>
                <QPButtonPanel />
                <div class="mt-4">
                    <Demo />
                </div>
            </div>
        </div>
    );
};

export default QPInputPanel;