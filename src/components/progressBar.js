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
            if (qpData[i][j]["blLevel"] in currentBlMarks)
                currentBlMarks[qpData[i][j]["blLevel"]] += qpData[i][j]["marks"];
            else
                currentBlMarks[qpData[i][j]["blLevel"]] = qpData[i][j]["marks"];
        }
    }

    console.log(currentBlMarks)

    const blStandards =
    {
        lower: [20, 35],
        intermediate: [40, 100],
        higher: [15, 25]
    }

    var currentBlValues = {
        lower: (currentBlMarks["BL1"]||0) + (currentBlMarks["BL2"]||0),
        intermediate: (currentBlMarks["BL3"]||0) + (currentBlMarks["BL4"]||0),
        higher: (currentBlMarks["BL5"]||0) + (currentBlMarks["BL6"]||0)
    }

    console.log(currentBlValues)

    var colorValues = {
        lower: "danger",
        intermediate: (currentBlMarks["BL3"]||0) + (currentBlMarks["BL4"]||0),
        higher: (currentBlMarks["BL5"]||0) + (currentBlMarks["BL6"]||0)
    }

    if(blStandards["lower"][0]<=currentBlValues["lower"] && blStandards["lower"][1]>=currentBlValues["lower"])
    {
        colorValues["lower"] = "success"
    }
    else{
        if(Math.min(Math.abs(blStandards["lower"][0]-currentBlValues["lower"]) , Math.abs(blStandards["lower"][1]-currentBlValues["lower"]))<=10)
        colorValues['lower'] = "warning"
    }
    const colorCodes = { 0: "danger", 1: "warning" }


    return (
        <div>
            <div class="row my-2">
                <div class="col-lg-4 my-auto">
                    <h5>{'Lower Order (L1 and L2)'}</h5>
                </div>
                <div class="col-lg-8">
                    <ProgressBar className='my-1' variant={colorValues["lower"]} now={currentBlValues["lower"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-4">
                    <h5>Intermediate Order</h5>
                </div>
                <div class="col-lg-8">
                    <ProgressBar className='my-1' variant="success" now={currentBlValues["intermediate"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-4">
                    <h5>Higher Order</h5>
                </div>
                <div class="col-lg-8">
                    <ProgressBar className='my-1' variant="success" now={currentBlValues["higher"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-4">
                    <h5>Unallocated</h5>
                </div>
                <div class="col-lg-8">
                    {/* <ProgressBar className='my-1' variant="success" now={currentBlValues[""]} /> */}
                </div>
            </div>
            {/* <ProgressBar className='mb-2' variant="info" now={20} />
            <ProgressBar className='mb-2' variant="warning" now={60} />
            <ProgressBar className='mb-2' variant="danger" now={80} />
            <ProgressBar>
                <ProgressBar className='mb-2' variant="success" now={40} />
                <ProgressBar className='mb-2' variant="info" now={20} />
            </ProgressBar>
            <ProgressBar>
                <ProgressBar variant="info" now={20} key={1} />
                <ProgressBar variant="success" now={15} key={2} />
                <ProgressBar variant="info" now={65} key={3} />
            </ProgressBar> */}
            {/* <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div> */}
        </div>
    )
}

export default Progress;