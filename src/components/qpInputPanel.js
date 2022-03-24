import SectionTab from "./sectionTabs";
import NumberButton from "./questionButton";
import InputForm from "./qpInputForm";
import Demo from "./demo/index";


const QPInputPanel = () => {
    return (
        <div class='row container'>
            <div class='col-lg-9'>
                <div class="my-2">
                    <SectionTab />
                </div>
                <div class="my-2">
                    <InputForm />
                </div>
                <div class="my-2">
                    <Demo></Demo>
                </div>
            </div>
            <div class='col-lg-4' >
                {/* <NumberButton /> */}
            </div>
        </div>

    );
};

export default QPInputPanel;