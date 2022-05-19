import React from 'react';
import 'react-dropdown/style.css';
import { DataStorage } from './dataProvider';
import { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const InputForm = () => {

    // this.state = {
    //     fruit: "banana",
    //   };

    const [bl, setBl] = useState([]);
    const [co, setCo] = useState([]);
    useEffect(() => {
        const a = axios
            .get("http://localhost:5000/api/bldetails_all")
            .then((res) => {
                setBl(res.data.rows);
                // console.log(res.data.rows);
            })
            .catch((e) => console.log(e));
    }, []);
    useEffect(() => {
        const a = axios
            .get("http://localhost:5000/api/courseOutcome")
            .then((res) => {
                setCo(res.data.rows);
                // console.log(res.data.rows);
            })
            .catch((e) => console.log(e));
    }, []);

    var BLVerbList = [];
    var BLLevelList = [];
    var COList = [];
    var bllevels = [];


    for (let i in bl) {
        BLVerbList.push({ value: bl[i]["keywords"], label: bl[i]["keywords"] })
    }

    for (let i in co) {
        COList.push({ value: co[i]["courseoutcomes"], label: co[i]["courseoutcomes"] })
    }

    for (let i in bl) {
        bllevels.push(bl[i]["bl_levels"]);
    }

    bllevels = [...new Set(bllevels)];
    for (let i in bllevels) {
        BLLevelList.push({ value: bllevels[i], label: bllevels[i] })
    }

    const ColourOption = [
        { value: 'ocean', label: 'Ocean' },
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'red', label: 'Red' },
        { value: 'orange', label: 'Orange' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'green', label: 'Green' },
        { value: 'forest', label: 'Forest' },
        { value: 'slate', label: 'Slate' },
        { value: 'silver', label: 'Silver' },
    ];

    function handleCOChange(e) {
        console.log(e);
        // this.setState({ fruit: e.target.value });
    }

    const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData, sectionQuestions] = useContext(DataStorage);
    // console.log(current);
    const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]];

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
        setQPData({
            ...qpData,
            [current["section"]]: {
                ...qpData[current["section"]],
                [currentQuestion]: {
                    ...qpData[current["section"]][currentQuestion],
                    [e.name]: v.value
                }
            }
        });
        console.log(e.name,v.value);
        console.log(qpData)
    }

    function handleQuestionChange(e) {
        setQPData({
            ...qpData,
            [current["section"]]: {
                ...qpData[current["section"]],
                [currentQuestion]: {
                    ...qpData[current["section"]][currentQuestion],
                    question: e.target.value
                }
            }
        });
    }

    function addBLVerb(e) {
        var curQuestionData = qpData[current["section"]][currentQuestion]["question"];
        var curQuestionBlverb = qpData[current["section"]][currentQuestion]["blVerb"];
        var modifiedQuestion = "";
        if (curQuestionData == "")
            modifiedQuestion = curQuestionData + curQuestionBlverb.charAt(0).toUpperCase() + curQuestionBlverb.slice(1);
        else
            modifiedQuestion = curQuestionData + " " + curQuestionBlverb.charAt(0).toLowerCase() + curQuestionBlverb.slice(1);

        setQPData({
            ...qpData,
            [current["section"]]: {
                ...qpData[current["section"]],
                [currentQuestion]: {
                    ...qpData[current["section"]][currentQuestion],
                    question: modifiedQuestion
                }
            }
        });
    }

    return (
        <div class="container form form-control row">
            <div class="row my-3">
                <h5 class="col-lg-3 p-1">Course Outcome</h5>
                <div class="col-lg-9">
                    <Select
                        name='courseOutcome'
                        // isMulti
                        isSearchable
                        options={COList}
                        onChange={handleSelectChange}
                        value={COList.filter(option =>
                            option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
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
                            option.value === qpData[current['section']][currentQuestion]["bllevel"])}
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
                            option.value === qpData[current['section']][currentQuestion]["blVerb"])}
                    />
                </div>
            </div>
            <hr />
            <div class="row mb-3">
                <h5 class="p-1 mx-2 col-lg-3" align="left">Question <span>{currentQuestion}</span> : </h5>
                <textarea
                    style={{ resize: "none", height: 300 }}
                    type="text" onChange={handleQuestionChange}
                    class="m-2 mx-3 form-control"
                    value={qpData[current['section']][currentQuestion]["question"]}
                />
            </div>
            <div class="row my-3">
                <div class="col-lg-6 p-0 d-flex flex-row">
                    <button class="mx-4 btn btn-info" onClick={addBLVerb} type="submit">Add BL Verb</button>
                </div>
                <div class="col-lg-6 p-0 d-flex flex-row-reverse">
                    <button class="mx-4 col-lg-3 btn btn-primary " onClick={handleNext} type="button">Next</button>
                    <button class="mr-0 col-lg-3 btn btn-primary " onClick={handlePrev} type="button">Prev</button>
                    <button class="mx-4 col-lg-3 btn btn-secondary" type="button">Reset</button>
                </div>
            </div>
        </div>
    );
};

export default InputForm;