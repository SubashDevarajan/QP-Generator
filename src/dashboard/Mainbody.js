// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Mainbody.css";
import MediaCard from "./QuestionCard";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../dashboard/thumbnail.png";
import Swal from "sweetalert2";

// import axios from "axios";



function Mainbody(props) {
  const [qp, setQp] = useState([]);
  function print(Id) {
    localStorage.setItem("QpId", Id);
    // console.log(props);
    window.location.href = "/input-form";
    // window.open(pdfFile, "PRINT", "height=800,width=700");
  }

  useEffect(() => { 
    getAll()
    
  },[]);
  function handleDelete(id) {
    axios
      .delete(`http://localhost:5000/api/qpdelete/${id}`)
      .then(() => {
        getAll()
      })
      .catch((e) => console.log(e.response));
  }
 const getAll=()=>{
    axios
      .get(`http://localhost:5000/api/qp/${localStorage.getItem("UserId")}`)
      .then((res) => {
        setQp(res.data.rows);
      })
      .catch((e) => console.log(e.response));
  }

  const successalt = (a, x) => {
    Swal.fire({
      position: "center",
      icon: a,
      title: x,
      showConfirmButton: false,
      timer: 1500,
    });
  };


  const ale = (a) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You want to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          var delObj = { id: a }
          console.log(delObj)
          // let headers = {
          //   'Content-Type': 'application/json;charset=UTF-8',
          //   'Authorization': `JWT ${localStorage.getItem("AuthId")}`
          // };

          axios
            .delete(`http://localhost:5000/api/qpdelete/${a}`)
            .then((res) => {
              getAll();
              successalt("success", "SuccessFully Deleted");
            })
            .catch((e) => console.log(e.response));
         
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          successalt("error", "Cancelled");
        }
      });
  };




  return (
    <div className="mainbody">
      <hr></hr>
      <div className="main_top"></div>
      <div className="main_docs wrapper">
        {
          qp.map( (ques, index)=>(<Card sx={{ maxWidth: 345 }}>
            
            <CardMedia component="img" src={img} height="140" alt="Question Paper" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ques.qp_info?.branch?ques.qp_info?.branch:"Untitled"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {ques.qp_info?.subjectCodeTitle?ques.qp_info?.subjectCodeTitle:"Untitled"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>print(ques.qp_id)}>
                View
              </Button>
              <Button size="small" onClick={()=>ale(ques.qp_id)}>
                Delete
              </Button>
            </CardActions>
          </Card>) 
          
          
          )
        }
      </div>
    </div>
  );
}

export default Mainbody;
