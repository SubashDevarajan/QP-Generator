import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../dashboard/thumbnail.png";
import pdfFile from "../dashboard/XC5551 - Software Engineering.pdf";

export default function MediaCard(props) {
  function print() {
    localStorage.setItem("QpId", props.qpId);
    // console.log(props);
    window.location.href = "/input-form";
    // window.open(pdfFile, "PRINT", "height=800,width=700");
  }

  function handleDelete() {
    console.log(props);
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
        {/* <div class="row">
          <div class="col-lg-6 d-flex flex-row">
            <Button size="small" onClick={print}>
              View
            </Button>
          </div>
          <div class="col-lg-6 d-flex flex-row-reverse" align="left">
            <Button size="small" onClick={print}>
              Delete
            </Button>
          </div>
        </div> */}
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
