import React from 'react';
import 'react-dropdown/style.css';
import DropDown from './dropdown';
import { DataStorage } from './dataProvider';
import { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const InputForm = () => {

    // this.state = {
    //     fruit: "banana",
    //   };

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

    const [data, setData] = useState([]);
    useEffect(() => {
        const a = axios
            .get("http://localhost:5000/api/courseoutcome")
            .then((res) => {
                setData(res.data.rows);
                // console.log(res.data.rows);
            })
            .catch((e) => console.log(e));
    }, []);

    var arr = [];

    for(let i in data) {
        arr.push({value : data[i]["keywords"],label : data[i]["keywords"]})
    }

    console.log(data);

    function handleCOChange(e) {
        console.log(e);
        // this.setState({ fruit: e.target.value });
    }

    const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData, sectionQuestions] = useContext(DataStorage);
    const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]];

    function handleNext() {
        const questionNumbers = sectionQuestions[current["section"]];
        const currentIndex = current["questionIndex"];
        const nextIndex = (currentIndex + 1) % questionNumbers.length;
        // console.log(current);
        setCurrent({ ...current, questionIndex: nextIndex });
        // setCurrent({...current,["questionIndex"]: nextIndex });
        // console.log(current);
    }

    function checkVal() {
        axios.get("localhost:5000/api/bldetails").then(res => { console.log(res) });
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
        console.log(e.name);
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
            modifiedQuestion = curQuestionData + " " + curQuestionBlverb;

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
                        options={ColourOption}
                        onChange={handleSelectChange}
                        value={ColourOption.filter(option =>
                            option.value === qpData[current['section']][currentQuestion]["courseOutcome"])}
                    />
                </div>
            </div>
            <div class="row mb-3">
                <h5 class="col-lg-3 p-1">Bloom Taxonomy Level </h5>
                <div class="col-lg-3">
                    <Select />
                </div>
                <h5 class="col-lg-3 p-1">Bloom Taxonomy Verb </h5>
                <div class="col-lg-3">
                    <Select
                        name='blVerb'
                        isMulti
                        isSearchable
                        options={ColourOption}
                        onChange={handleSelectChange}
                        // value={ColourOption.filter(option =>
                        //     option.value === qpData[current['section']][currentQuestion]["blVerb"])}
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
                    <button class="mx-4 col-lg-3 btn btn-secondary" onClick={checkVal} type="button">Reset</button>
                    <button class="mr-0 col-lg-3 btn btn-primary " onClick={handleNext} type="button">Next</button>
                </div>
            </div>
        </div>
    );
};

export default InputForm;