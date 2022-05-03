import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfoIcon from '@mui/icons-material/Info';
import { DataStorage } from "./dataProvider";
import { useContext } from "react";
// import {} from "@react-icons/ai";

const sectionFont = {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0c3e94"
};
const infoStyle = {
    verticalAlign: "middle",
    color: "#0c3e94"
}


const SectionTab = () => {
    const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData] = useContext(DataStorage);

    function handleClick(sec) {
        setCurrent(prev => ({ ...current, ...{ questionIndex: 0, section: sec } }));
        // console.log(current);
    }

    return (
        <div class="row d-flex justify-content-center container form-control bg-opacity-75">
            {/* <button class=" btn btn-secondary" type="button">Reset</button> */}
            <Tabs style={{ height: 30, borderRadius: 0 }} indicatorColor="secondary" left>
                <Tab onClick={() => handleClick("A")} label={
                    <div>
                        <span style={sectionFont} id="Tab-A">Part - A  </span>
                        {/* <InfoIcon style={infoStyle} /> */}
                        {/* <AiFillInfoCircle /> */}
                    </div>
                } />
                <div class="vr"></div>
                <Tab onClick={() => handleClick("B")} label={
                    <div>
                        <span style={sectionFont} id="Tab-B">Part - B  </span>
                        {/* <InfoIcon style={infoStyle} /> */}
                    </div>
                } />
                <div class="vr"></div>
                <Tab onClick={() => handleClick("C")} label={
                    <div>
                        <span style={sectionFont} id="Tab-C">Part - C  </span>
                        {/* <InfoIcon style={infoStyle} /> */}
                    </div>
                } />
                {/* <div class="vr"></div> */}
            </Tabs>

        </div>
    );
};

export default SectionTab;

