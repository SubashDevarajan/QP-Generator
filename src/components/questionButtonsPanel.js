import { Paper } from "@mui/material";
import { useContext, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { DataStorage } from "./dataProvider";



const QPButtonPanel = () => {
    const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData, sectionQuestions] = useContext(DataStorage);
    const currentQuestion = sectionQuestions[current["section"]][current["questionIndex"]];

    const types = ["secondary", "primary", "success", "warning"];

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            paddingTop:17,
            paddingBottom:17,
            height:255

        },
        tab: {
            fontSize: 12,
            color: "#5f6368",
            textTransform: "capitalize",
            height: 10,
            fontWeight: "600",
            fontFamily: 'Google Sans,Roboto,Arial,sans-serif',

        },
        tabs: {
            height: 10

        }
    });

    
  const classes = useStyles();

    function handleClick(e) {
        // console.log(e.target.id.split("-").at(-2));
        const qn = parseInt(e.target.id.split("-").at(-1));
        console.log(qn);
        setCurrent(prev => ({ ...current, questionIndex: qn }));
    }


    return (
        <Paper className={classes.root}>
            {Object.keys(qpData[current["section"]]).map(function (ques, index) {
                var colorState = qpData[current["section"]][ques]["state"];
                if(ques == currentQuestion)
                colorState = 3;
                return <button class={"me-2 mb-2 col-lg-5 btn btn-" + types[colorState]} id={"btn-" + current["section"] + "-" + index} onClick={handleClick} type="button">{ques}</button>;
            })}
        </Paper>
    )
}

export default QPButtonPanel;