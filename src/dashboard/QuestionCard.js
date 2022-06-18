// import * as React from "react";
import React,{useEffect,useState} from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../dashboard/thumbnail.png";
import axios from "axios";
import pdfFile from "../dashboard/XC5551 - Software Engineering.pdf";

export default function MediaCard(props) {
  const [qp, setQp] = useState([]);
  function print() {
    localStorage.setItem("QpId", props.qpId);
    // console.log(props);
    window.location.href = "/input-form";
    // window.open(pdfFile, "PRINT", "height=800,width=700");
  }
  useEffect(() => { 
    getAll()
    
  },[]);
 const getAll=()=>{
    axios
      .get(`http://localhost:5000/api/qp/${localStorage.getItem("UserId")}`)
      .then((res) => {
        setQp(res.data.rows);
        console.log(res.data.rows);
      })
      .catch((e) => console.log(e.response));
    }

  function handleDelete() {
    console.log(props);
    axios
      .delete(`http://localhost:5000/api/qpdelete/${props.qpId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e.response));
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" src={img} height="140" alt="Question Paper" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.branch}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.subject}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={print}>
          View
        </Button>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
