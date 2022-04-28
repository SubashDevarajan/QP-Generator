import React, { createContext, useState } from 'react'

export const DataStorage = createContext()



export const DataProvider = ({ children }) => {

    const sectionQuestions = {
        A: [...Array(11).keys()].slice(1),
        B: ['11 (a) (i)','11 (b) (ii)','12 (a) (i)','12 (b) (ii)','13 (a) (i)','13 (b) (ii)','14 (a) (i)','14 (b) (ii)','15 (a) (i)','15 (b) (ii)'],
        C: [16]
    };

    const [qpInfo, setQPInfo] = useState({
        collegeName: "College Of Engineering, Guindy",
        subjectTitle: 'Numerical Methods',
        subjectCode: 'MA1234',
        date: '20/04/2022',
        marks: 100,
        course: 'M.Sc Integrated',
        sem: '8'
    })

    const [current,setCurrent] = useState({
        questionIndex : 0,
        section : "A"
    })

    const qpDataframe = {}
    const questionTemplate = {
        blLevel: "",
        blVerb: "",
        courseOutcome: "",
        question: "",
        state: 0
    };

    Object.keys(sectionQuestions).forEach(function (section, index) {
        qpDataframe[section] = {}
        sectionQuestions[section].forEach(function (ques, ind) {
            qpDataframe[section][ques] = questionTemplate;
        })
    });

    const [qpData, setQPData] = useState(qpDataframe)
    
    return (
        <DataStorage.Provider value={[current,setCurrent,qpInfo, setQPInfo, qpData, setQPData,sectionQuestions]}>
            {children}
        </DataStorage.Provider>
    )
}

