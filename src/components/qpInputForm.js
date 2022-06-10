import React from 'react';
import 'react-dropdown/style.css';
import { DataStorage } from './dataProvider';
import { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Divider } from '@mui/material';
import { Button, ButtonGroup } from 'react-bootstrap';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const InputForm = () => {

    const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData, sectionQuestions] = useContext(DataStorage);
    const [sds, setCurrenssdt, qpInfso, setQPInfdo, qpDataa, setQPDataa, sectionQuestionss] = useContext(DataStorage);
    const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]];
    const [state, setState] = useState();
    const [bl, setBl] = useState([]);
    const [co, setCo] = useState([]);

    const handleSubDiv = (event, sd) => {
        if (!sd)
            sd = current["subDiv"]
        setCurrent({ ...current, subDiv: sd });
    };
    useEffect(() => {
        const a = axios
            .get("http://localhost:5000/api/bldetails_all")
            .then((res) => {
                setBl(res.data.rows);
                // console.log(res.data.rows);
            })
            .catch((e) => console.log(e));
    }, []);
    const courseCode = qpInfo["subjectCodeTitle"].split(" ")[0];
    console.log(courseCode)
    useEffect(() => {
        const a = axios
            .get(`http://localhost:5000/api/courseoutcome/${qpInfo["subjectCodeTitle"].split(" ")[0]}`)
            .then((res) => {
                setCo(res.data.rows);
                console.log(res.data.rows);
            })
            .catch((e) => console.log(e));
    }, [qpInfo]);




    var BLVerbList = [];
    var BLLevelList = [];
    var COList = [];
    var bllevels = [];


    for (let i in bl) {
        BLVerbList.push({ value: bl[i]["keywords"], label: bl[i]["keywords"] })
        bllevels.push(bl[i]["bl_levels"]);
    }

    bllevels = [...new Set(bllevels)];
    var v = 0;

    for (let i in bllevels) {
        v = parseInt(i) + 1
        BLLevelList.push({ value: "BL" + v, label: bllevels[i] })
    }

    for (let i in co) {
        COList.push({ value: co[i]["levels"], label: co[i]["courseoutcomes"] })
    }

    function handleNext() {
        const questionNumbers = sectionQuestions[current["section"]];
        const currentIndex = current["questionIndex"];
        const nextIndex = (currentIndex + 1) % questionNumbers.length;
        setCurrent({ ...current, questionIndex: nextIndex });
    }

    function handlePrev() {
        const questionNumbers = sectionQuestions[current["section"]];
        const currentIndex = current["questionIndex"];
        const nextIndex = (currentIndex + questionNumbers.length - 1) % questionNumbers.length;
        setCurrent({ ...current, questionIndex: nextIndex });
    }

    function handleSelectChange(v, e) {
        var curQues = qpData[current["section"]][currentQuestion][current["subDiv"]];
        var arr = ["blLevel", "blVerb", "courseOutcome", "question"]
        var state = 2;
        for (let j in arr) {
            if (curQues[arr[j]] == "") {
                if (arr[j] != e.name) {
                    state = 1;
                    break;
                }
            }
        }
        if (current["section"] == "B")
            setQPData({
                ...qpData,
                [current["section"]]: {
                    ...qpData[current["section"]],
                    [currentQuestion.substring(0, 2) + " (a)"]: {
                        ...qpData[current["section"]][currentQuestion.substring(0, 2) + " (a)"],
                        ["i"]: {
                            ...qpData[current["section"]][currentQuestion.substring(0, 2) + " (a)"]["i"],
                            [e.name]: v.value,
                            state: state
                        },
                        ["ii"]: {
                            ...qpData[current["section"]][currentQuestion.substring(0, 2) + " (a)"]["i"],
                            [e.name]: v.value,
                            state: state
                        }
                    },
                    [currentQuestion.substring(0, 2) + " (b)"]: {
                        ...qpData[current["section"]][currentQuestion.substring(0, 2) + " (b)"],
                        ["i"]: {
                            ...qpData[current["section"]][currentQuestion.substring(0, 2) + " (b)"]["i"],
                            [e.name]: v.value,
                            state: state
                        },
                        ["ii"]: {
                            ...qpData[current["section"]][currentQuestion.substring(0, 2) + " (b)"]["i"],
                            [e.name]: v.value,
                            state: state
                        }
                    }
                }
            })
        else
            setQPData({
                ...qpData,
                [current["section"]]: {
                    ...qpData[current["section"]],
                    [currentQuestion]: {
                        ...qpData[current["section"]][currentQuestion],
                        ["i"]: {
                            ...qpData[current["section"]][currentQuestion]["i"],
                            [e.name]: v.value,
                            state: state
                        },
                        ["ii"]: {
                            ...qpData[current["section"]][currentQuestion]["i"],
                            [e.name]: v.value,
                            state: state
                        }
                    }
                }
            })
    }

    function handleReset() {
        setQPData({
            ...qpData,
            [current["section"]]: {
                ...qpData[current["section"]],
                [currentQuestion]: {
                    ...qpData[current["section"]][currentQuestion],
                    [current["subDiv"]]: {
                        ...qpData[current["section"]][currentQuestion][current["subDiv"]],
                        question: "",
                        blVerb: "",
                        blLevel: "",
                        courseOutcome: "",
                        state: 0
                    }
                }
            }
        });
    }


    function handleQuestionChange(e) {
        var targetName = "question"
        var curQues = qpData[current["section"]][currentQuestion][current["subDiv"]];
        var arr = ["blLevel", "blVerb", "courseOutcome", "question"]
        var state = 2;
        for (let j in arr) {
            if (curQues[arr[j]] == "") {
                if (arr[j] != targetName) {
                    state = 1;
                    break;
                }
            }
        }
        setQPData({
            ...qpData,
            [current["section"]]: {
                ...qpData[current["section"]],
                [currentQuestion]: {
                    ...qpData[current["section"]][currentQuestion],
                    [current["subDiv"]]: {
                        ...qpData[current["section"]][currentQuestion][current["subDiv"]],
                        question: e.target.value,
                        state: state
                    }
                }
            }
        });
    }

    function handleSubDivToggler(s, e) {
        // console.log(e)
    }

    function addBLVerb(e) {
        var curQuestionData = qpData[current["section"]][currentQuestion][current["subDiv"]]["question"];
        var curQuestionBlverb = qpData[current["section"]][currentQuestion][current["subDiv"]]["blVerb"];
        var modifiedQuestion = "";
        if (curQuestionData == "")
            modifiedQuestion = curQuestionData + curQuestionBlverb.charAt(0).toUpperCase() + curQuestionBlverb.slice(1);
        else
            modifiedQuestion = curQuestionData + " " + curQuestionBlverb.charAt(0).toLowerCase() + curQuestionBlverb.slice(1);

        // setQPData({
        //     ...qpData,
        //     [current["section"]]: {
        //         ...qpData[current["section"]],
        //         [currentQuestion]: {
        //             ...qpData[current["section"]][currentQuestion],
        //             question: modifiedQuestion
        //         }
        //     }
        // });
        setQPData({
            ...qpData,
            [current["section"]]: {
                ...qpData[current["section"]],
                [currentQuestion]: {
                    ...qpData[current["section"]][currentQuestion],
                    [current["subDiv"]]: {
                        ...qpData[current["section"]][currentQuestion][current["subDiv"]],
                        question: modifiedQuestion
                    }
                }
            }
        });
    }


    return (
        <div class="container form form-control row">
            <div class="row mt-2">
                <h5 class="ps-3 pt-2 col-lg-3" align="left">Question <span>{currentQuestion}</span> : </h5>
                {current["section"] != "A" && <div class="d-flex flex-row-reverse p-0 col-lg-9">

                    <ToggleButtonGroup
                        value={current["subDiv"]}
                        color='success'
                        exclusive
                        onChange={handleSubDiv}
                        aria-label="text alignment"
                        size='small'
                    >
                        <ToggleButton value="i" onClick={handleSubDivToggler} size='small' aria-label="left aligned">
                            <span class="text-capitalize font-weight-bold">{"Sub Division"}</span>&nbsp;<span class="text-lowercase font-weight-bold">{"(i)"}</span>
                        </ToggleButton>
                        <ToggleButton value="ii" onClick={handleSubDivToggler} size='small' aria-label="centered">
                            <span class="text-capitalize font-weight-bold">{"Sub Division"}</span>&nbsp;<span class="text-lowercase font-weight-bold">{"(ii)"}</span>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>}
                <div class="mt-2 mb-2">
                    <Divider />

                </div>
            </div>
            <div class="row mt-1 mb-3">
                <h5 class="col-lg-3 p-1">Course Outcome</h5>
                <div class="col-lg-9">
                    <Select
                        name='courseOutcome'
                        // isMulti
                        isSearchable
                        options={COList}
                        onChange={handleSelectChange}
                        value={COList.filter(option =>
                            option.value === qpData[current['section']][currentQuestion][current["subDiv"]]["courseOutcome"])}
                    />
                </div>
            </div>
            <div class="row mb-3">
                <h5 class="col-lg-3 p-1">Bloom Taxonomy Level </h5>
                <div class="col-lg-3">
                    <Select
                        name='blLevel'
                        isSearchable
                        options={BLLevelList}
                        onChange={handleSelectChange}
                        value={BLLevelList.filter(option =>
                            option.value === qpData[current['section']][currentQuestion][current["subDiv"]]["blLevel"])}
                    />
                </div>
                <h5 class="col-lg-3 p-1">Bloom Taxonomy Verb </h5>
                <div class="col-lg-3">
                    <Select
                        name='blVerb'
                        // isMulti
                        isSearchable
                        options={BLVerbList}
                        onChange={handleSelectChange}
                        value={BLVerbList.filter(option =>
                            option.value === qpData[current['section']][currentQuestion][current["subDiv"]]["blVerb"])}
                    />
                </div>
            </div>
            <div class="row mb-3 p-1">
                <h5 class="col-lg-3" align="left">Question:</h5>

                {current["section"] != "A" && current["subDiv"] == "ii" && <div class="d-flex flex-row-reverse p-0 col-lg-9">
                    <span>{"(Leave sub division (ii) blank, if not needed)"}</span>
                </div>}
                <textarea
                    style={{ resize: "none", height: 250 }}
                    type="text"
                    onChange={handleQuestionChange}
                    class="m-2 mx-3 form-control"
                    spellCheck="true"
                    value={qpData[current['section']][currentQuestion][current["subDiv"]]["question"]}
                />
            </div>
            <div class="row my-3">
                <div class="col-lg-6 p-0 d-flex flex-row">
                    <button class="mx-4 btn btn-info" onClick={addBLVerb} type="submit">Add BL Verb</button>
                </div>
                <div class="col-lg-6 p-0 d-flex flex-row-reverse">
                    <button class="mx-4 col-lg-3 btn btn-primary " onClick={handleNext} type="button">Next</button>
                    <button class="mr-0 col-lg-3 btn btn-primary " onClick={handlePrev} type="button">Prev</button>
                    <button class="mx-4 col-lg-3 btn btn-secondary" onClick={handleReset} type="button">Reset</button>
                </div>
            </div>
        </div>
    );
};

export default InputForm;