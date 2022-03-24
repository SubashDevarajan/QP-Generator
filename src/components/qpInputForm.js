import { TextField } from '@mui/material';
import React from 'react';
import 'react-dropdown/style.css';
import MyComponent from './dropdown';

const InputForm = () => {
    return (
        <div class="container form-control form-control-lg row mx-1">
            <div class="row my-3">
                <h5 class="col-lg-3 p-1">Course Outcome</h5>
                <div class="col-lg-9">
                    <MyComponent />
                </div>
            </div>
            <div class="row mb-3">
                <h5 class="col-lg-3 p-1">Bloom Taxonomy Level </h5>
                <div class="col-lg-3">
                    <MyComponent />
                </div>
                <h5 class="col-lg-3 p-1">Bloom Taxonomy Verb </h5>
                <div class="col-lg-3">
                    <MyComponent />
                </div>
            </div>
            <hr />
            <div class="row mb-3">
                <h5 class="p-1 mx-2 col-lg-3" align="left">Question <span>{1}</span> : </h5>
                <input
                    type="text"
                    class="my-2 mx-3 form-control"
                />
            </div>
            <div class="row my-3 right">
                <button class = "mx-4 col-lg-1 btn btn-secondary" type="button">Reset</button>
                <button class = "mr-0 col-lg-1 btn btn-primary " type="button">Next</button>
            </div>
        </div>
    );
};

export default InputForm;