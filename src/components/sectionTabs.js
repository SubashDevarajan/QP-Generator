import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfoIcon from '@mui/icons-material/Info';
import { DataStorage } from "./dataProvider";
import { useContext, useState } from "react";
import { Paper } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
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
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            // height:20

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
    const [current, setCurrent, qpInfo, setQPInfo, qpData, setQPData] = useContext(DataStorage);

    function handleClick(sec) {
        setCurrent(prev => ({ ...current, ...{ questionIndex: 0, section: sec,subDiv: "i" } }));
        // console.log(current);
    }
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper
            className={classes.root}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            // className={classes.tabs}
            >
                <Tab onClick={() => handleClick("A")} label={
                    <div>
                        <span style={sectionFont} id="Tab-A">Part - A  </span>
                    </div>
                } />
                {/* <div class="vr"></div> */}
                <Tab onClick={() => handleClick("B")} label={
                    <div>
                        <span style={sectionFont} id="Tab-B">Part - B  </span>
                    </div>
                } />
                {/* <div class="vr"></div> */}
                <Tab onClick={() => handleClick("C")} label={
                    <div>
                        <span style={sectionFont} id="Tab-C">Part - C  </span>
                    </div>
                } />
            </Tabs>
            {/* <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            // className={classes.tabs}
            >
                <Tab label="Part - A"
                // className={classes.tab} {...a11yProps(0)}
                />
                <Tab label="Part - B"
                // className={classes.tab} {...a11yProps(1)}
                />
                <Tab label="Part - C"
                // className={classes.tab} {...a11yProps(1)}
                />

            </Tabs> */}

        </Paper>
    );
};

export default SectionTab;

