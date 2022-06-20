// import ProgressBar from
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState, useEffect, useContext } from 'react';
import { DataStorage } from './dataProvider';

const ProgressCo = () => {


    const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData, sectionQuestions] = useContext(DataStorage);
    const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]];

    // console.log(qpData)

    var currentCoMarks = {};



    for (let i in qpData) {
        for (let j in qpData[i]) {
            if (j.split(" ")[1] == "(b)")
                continue
            if (qpData[i][j]["i"]["courseOutcome"] in currentCoMarks)
                currentCoMarks[qpData[i][j]["i"]["courseOutcome"]] += qpData[i][j]["i"]["marks"];
            else
                currentCoMarks[qpData[i][j]["i"]["courseOutcome"]] = qpData[i][j]["i"]["marks"];
        }
    }

    // console.log(currentCoMarks)

    const coStandards =
    {
        CO1: [0, 17],
        CO2: [0, 17],
        CO3: [0, 17],
        CO4: [0, 25],
        CO5: [0, 24]
    }

    var currentCoValues = {
        CO1: (currentCoMarks["CO1"] || 0),
        CO2: (currentCoMarks["CO2"] || 0),
        CO3: (currentCoMarks["CO3"] || 0),
        CO4: (currentCoMarks["CO4"] || 0),
        CO5: (currentCoMarks["CO5"] || 0)
    }

    // console.log(currentCoValues)

    var colorValues = {
        CO1: "danger",
        CO2: "danger",
        CO3: "danger",
        CO4: "danger",
        CO5: "danger"
    }

    var orderArray = ["CO1",
        "CO2",
        "CO3",
        "CO4",
        "CO5"]
    for (let i in orderArray) {
        if (coStandards[orderArray[i]][0] <= currentCoValues[orderArray[i]] && coStandards[orderArray[i]][1] >= currentCoValues[orderArray[i]]) {
            colorValues[orderArray[i]] = "success"
        }
        else {
            if (coStandards[orderArray[i]][0] > currentCoValues[orderArray[i]])
                colorValues[orderArray[i]] = "warning"
        }
    }
    const colorCodes = { 0: "danger", 1: "warning" }


    return (
        <div>
            <div class="row my-2">
                <div class="col-lg-5 my-auto">
                    <h5>{'CO1'}</h5>
                </div>
                <div class="col-lg-7">
                    <ProgressBar className='my-1' variant={colorValues["CO1"]} now={currentCoValues["CO1"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-5 my-auto">
                    <h5>{'CO2'}</h5>
                </div>
                <div class="col-lg-7">
                    <ProgressBar className='my-1' variant={colorValues["CO2"]} now={currentCoValues["CO2"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-5 my-auto">
                    <h5>{'CO3'}</h5>
                </div>
                <div class="col-lg-7">
                    <ProgressBar className='my-1' variant={colorValues["CO3"]} now={currentCoValues["CO3"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-5 my-auto">
                    <h5>{'CO4'}</h5>
                </div>
                <div class="col-lg-7">
                    <ProgressBar className='my-1' variant={colorValues["CO4"]} now={currentCoValues["CO4"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-5 my-auto">
                    <h5>{'CO5'}</h5>
                </div>
                <div class="col-lg-7">
                    <ProgressBar className='my-1' variant={colorValues["CO5"]} now={currentCoValues["CO5"]} />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-5">
                    <h5>Unallocated Marks</h5>
                </div>
                <div class="col-lg-7">
                    <h5>{currentCoMarks[""]}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProgressCo;