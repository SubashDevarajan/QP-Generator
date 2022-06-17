import React, { useState } from "react";
import SideMenu from "../admin/components/SideMenu";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
// import Header from "../admin/components/Header";
// import PageHeader from "../admin/components/PageHeader";
import { Row, Col, Card } from "reactstrap";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
// import CourseOutcomes from "./Course/Course";
// import AppSidebar from "./../login/AppSidebar";
import CourseEdit from "./CourseEdit";
import ResponsiveAppBar from "../components/navbar";
import CourseOutcomeEdit from "./CourseOutcomeEdit";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function Admin() {
  const classes = useStyles();
  const [con, setCon] = useState(true);

  return (
    <Row style={{ overflow: "hidden" }}>
      <Col lg={12} xl={12}>
        <ResponsiveAppBar />
      </Col>
      <Col
        lg={2}
        style={{
          backgroundColor: "#3c4b64",
          height: "100%",
          minHeight: "1000px",
        }}
      >
        <Row>
          <Col
            lg={12}
            xl={12}
            style={{ paddingTop: "20px", cursor: "pointer" }}
            onClick={() => setCon(true)}
          >
            <span style={{ backgroundColor: "#3c4b64", color: "#fff" }}>
              <Row style={{ padding: "7px" }}>
                <Col lg={3}>
                  <CIcon
                    icon={cilPencil}
                    customClassName="nav-icon"
                    height={25}
                    width={25}
                  />
                </Col>
                <Col lg={9} style={{ display: "flex", fontSize: "20px" }}>
                  Course
                </Col>
              </Row>
            </span>
          </Col>
          <Col
            lg={12}
            xl={12}
            style={{ paddingTop: "20px", cursor: "pointer" }}
            onClick={() => setCon(false)}
          >
            <span style={{ backgroundColor: "#3c4b64", color: "#fff" }}>
              <Row style={{ padding: "7px" }}>
                <Col lg={3}>
                  <CIcon
                    icon={cilPencil}
                    customClassName="nav-icon"
                    height={25}
                    width={25}
                  />
                </Col>
                <Col lg={9} style={{ display: "flex", fontSize: "20px" }}>
                  Course Outcome
                </Col>
              </Row>
            </span>
          </Col>
        </Row>
      </Col>
      <Col lg={10}>
        <div>
          {con == true && <CourseEdit />}
          {con == false && <CourseOutcomeEdit />}
        </div>
      </Col>
    </Row>
    // <AppSidebar />
    // <ThemeProvider theme={theme}>
    //   <AppSidebar />
    //   <div className={classes.appMain}>
    //     <CourseOutcomes />
    //   </div>
    //   <CssBaseline />
    // </ThemeProvider>
  );
}

export default Admin;
