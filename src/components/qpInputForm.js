import React from 'react';
import 'react-dropdown/style.css';
import DropDown from './dropdown';
import { DataStorage } from './dataProvider';
import { useContext } from 'react';




const InputForm = () => {
    const [current,setCurrent,qpInfo,setQPInfo,qpData,setQPData,sectionQuestions] = useContext(DataStorage);
    const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]];
    console.log(currentQuestion);
    function handleNext() {
        const questionNumbers = sectionQuestions[current["section"]];
        const currentIndex = current["questionIndex"];
        const nextIndex = (currentIndex+1)%questionNumbers.length;
        setCurrent(prev => ({...current,questionIndex:nextIndex}));
    }
    return (
        <div class="container form-control row">
            <div class="row my-3">
                <h5 class="col-lg-3 p-1">Course Outcome</h5>
                <div class="col-lg-9">
                    <DropDown />
                </div>
            </div>
            <div class="row mb-3">
                <h5 class="col-lg-3 p-1">Bloom Taxonomy Level </h5>
                <div class="col-lg-3">
                    <DropDown />
                </div>
                <h5 class="col-lg-3 p-1">Bloom Taxonomy Verb </h5>
                <div class="col-lg-3">
                    <DropDown />
                </div>
            </div>
            <hr />
            <div class="row mb-3">
                <h5 class="p-1 mx-2 col-lg-3" align="left">Question <span>{currentQuestion}</span> : </h5>
                <textarea style={{resize:"none",height:244}} type="text" class="my-2 mx-3 form-control" >
                    {console.log(current["questionIndex"])}
                </textarea>
            </div>
            <div class="row my-3 right">
                <button class="mx-4 col-lg-1 btn btn-secondary" type="button">Reset</button>
                <button class="mr-0 col-lg-1 btn btn-primary " onClick={handleNext} type="button">Next</button>
            </div>
        </div>
    );
};

export default InputForm;