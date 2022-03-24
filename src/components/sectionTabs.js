import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfoIcon from '@mui/icons-material/Info';

const sectionFont = {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0c3e94"
};
const infoStyle = {
    verticalAlign: "middle",
    color: "#0c3e94"
}

function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
}

const SectionTab = () => {
    return (
        <div class="container form-control mx-1">
        <Tabs  style={{ height: 50,borderRadius:0 }} left>
            <Tab onClick = {handleSubmit}  label={
                <div>
                    <span style={sectionFont}>Part - A  </span>
                    <InfoIcon style={infoStyle} />
                </div>
            } />
            <div class="vr"></div>
            <Tab disabled label={
                <div>
                    <span style={sectionFont}>Part - B  </span>
                    <InfoIcon style={infoStyle} />
                </div>
            } />
            <div class="vr"></div>
            <Tab disabled label={
                <div>
                    <span style={sectionFont}>Part - C  </span>
                    <InfoIcon style={infoStyle} />
                </div>
            } />
            <div class="vr"></div>
        </Tabs>

        </div>
    );
};

export default SectionTab;

