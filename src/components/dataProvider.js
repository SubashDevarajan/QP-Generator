import React, { createContext, useState } from 'react'

export const DataStorage = createContext()



export const DataProvider = ({ children }) => {

    const sectionQuestions = {
        A: [...Array(11).keys()].slice(1),
        // B: ['11 (a) (i)','11 (b) (ii)','12 (a) (i)','12 (b) (ii)','13 (a) (i)','13 (b) (ii)','14 (a) (i)','14 (b) (ii)','15 (a) (i)','15 (b) (ii)'],
        B: ['11 (a)','11 (b)','12 (a)','12 (b)','13 (a)','13 (b)','14 (a)','14 (b)','15 (a)','15 (b)'],
        C: [16]
    };

    const [qpInfo, setQPInfo] = useState({
        university : "ANNA UNIVERSITY (UNIVERSITY DEPARTMENTS)",
        description : "END SEMESTER EXAMINATIONS-NOV/DEC 2022",
        collegeName: "College Of Engineering, Guindy",
        subjectTitle: 'Numerical Methods',
        time : "3",
        subjectCode: 'MA1234',
        regulation : '2019',
        department: "Mathematics",  
        date: '20/04/2022',
        marks: 100,
        branch : 'M.Sc Integrated CS/IT',
        semester: '8'
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
        marks: 2,
        question: "",
        state: 2
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

