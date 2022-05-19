import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Demo from "./demo";
import { Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import axios from "axios";
import { makeStyles } from "@mui/material";
import CourseDetails from "./courseDetails";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function handleChange(v, e) {
  console.log(v, e)
}

const ResponsiveAppBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const a = axios
      .get("http://localhost:5000/api/course")
      .then((res) => {
        setData(res.data.rows);
        // console.log(res.data.rows);
      })
      .catch((e) => console.log(e));
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Question Paper Generator
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button
                type="button"
                class="btn btn-primary me-3" onClick={handleOpen}
              >
                Course Details
              </button>
            </li>
          </ul>
          <form class="d-flex">
            <button
              class="btn btn-warning me-3"
              type="submit"
            >
              Preview
            </button>
            <button class="btn btn-success me-3" type="submit">
              Print
            </button>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Jackson Durai" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </form>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div class="mb-3">
                <CourseDetails />
                <div class="d-flex flex-row-reverse">
                  <button class="mx-4 col-lg-2 btn btn-primary" onClick = {handleClose} type="button">Proceed</button>
                </div>

              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </nav>
  );
};
export default ResponsiveAppBar;
