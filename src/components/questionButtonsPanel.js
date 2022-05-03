import { useContext, useState } from "react";
import { DataStorage } from "./dataProvider";



const QPButtonPanel = () => {
    const [current,setCurrent,qpInfo,setQPInfo,qpData,setQPData] = useContext(DataStorage);
    
    const types = ["secondary","primary","success"];

    function handleClick (e){
        // console.log(e.target.id.split("-").at(-2));
        const qn = parseInt(e.target.id.split("-").at(-1));
        console.log(qn);
        setCurrent(prev => ({...current,questionIndex:qn}));
    }


    return (
        <div class = "row container p-4 form-control" style={{ height: 275 }}>
            {Object.keys(qpData[current["section"]]).map(function(ques,index){
                    return <button class={"me-2 mb-2 col-lg-5 btn btn-"+types[qpData[current["section"]][ques]["state"]]} id={"btn-"+current["section"]+"-"+index} onClick={handleClick} type="button">{ques}</button>;
                  })}
        </div>
    )
}

export default QPButtonPanel;