// import ProgressBar from
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState, useEffect, useContext } from 'react';
import { DataStorage } from './dataProvider';

const Progress = () => {


    const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData, sectionQuestions] = useContext(DataStorage);
    const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]];

    // console.log(qpData)

    var currentBlMarks = {};



    for (let i in qpData) {
        for (let j in qpData[i]) {
            if (j.split(" ")[1] == "(b)")
                continue
            if (qpData[i][j]["i"]["blLevel"] in currentBlMarks)
                currentBlMarks[qpData[i][j]["i"]["blLevel"]] += qpData[i][j]["i"]["marks"];
            else
                currentBlMarks[qpData[i][j]["i"]["blLevel"]] = qpData[i][j]["i"]["marks"];
        }
    }

    // console.log(currentBlMarks)

    const blStandards =
    {
        lower: [20, 35],
        intermediate: [40, 100],
        higher: [15, 25]
    }

    var currentBlValues = {
        lower: (currentBlMarks["BL1"] || 0) + (currentBlMarks["BL2"] || 0),
        intermediate: (currentBlMarks["BL3"] || 0) + (currentBlMarks["BL4"] || 0),
        higher: (currentBlMarks["BL5"] || 0) + (currentBlMarks["BL6"] || 0)
    }

    // console.log(currentBlValues)

    var colorValues = {
        lower: "danger",
        intermediate: "danger",
        higher: "danger"
    }

    var orderArray = ["lower", "intermediate", "higher"]
    for (let i in orderArray) {
        if (blStandards[orderArray[i]][0] <= currentBlValues[orderArray[i]] && blStandards[orderArray[i]][1] >= currentBlValues[orderArray[i]]) {
            colorValues[orderArray[i]] = "success"
        }
        else {
            if (blStandards[orderArray[i]][0] > currentBlValues[orderArray[i]])
                colorValues[orderArray[i]] = "warning"
        }
    }
    const colorCodes = { 0: "danger", 1: "warning" }


    return (
        <div>
            <div class="row my-2">
                <div class="col-lg-5 my-auto">
                    <h5>{'Lower Order (L1 and L2)'}</h5>
                </div>
                <div class="col-lg-7">
                    {/* <ProgressBar>
                        <ProgressBar variant="light" now={20} key={1} />
                        <ProgressBar variant="success" now={15} key={2} />
                        <ProgressBar variant="light" now={65} key={3} />
                    </ProgressBar> */}
                    <ProgressBar className='my-1' variant={colorValues["lower"]} now={currentBlValues["lower"]} />

                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-5">
                    <h5>{'Intermediate Order (L3 and L4)'}</h5>
                </div>
                <div class="col-lg-7">
                    {/* <ProgressBar>
                        <ProgressBar variant="light" now={40} key={1} />
                        <ProgressBar variant="success" now={60} key={2} />
                    </ProgressBar> */}
                    <ProgressBar className='my-1' variant={colorValues["intermediate"]} now={currentBlValues["intermediate"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-5">
                    <h5>{'Higher Order (L5 and L6)'}</h5>
                </div>
                <div class="col-lg-7">
                    {/* <ProgressBar>
                        <ProgressBar variant="light" now={15} key={1} />
                        <ProgressBar variant="success" now={10} key={2} />
                        <ProgressBar variant="light" now={75} key={3} />
                    </ProgressBar> */}
                    <ProgressBar className='my-1' variant={colorValues["higher"]} now={currentBlValues["higher"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-5">
                    <h5>Unallocated Marks</h5>
                </div>
                <div class="col-lg-7">
                    <h5>{currentBlMarks[""]}</h5>
                </div>
            </div>
        </div>
    )
}

export default Progress;