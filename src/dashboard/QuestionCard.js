import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../dashboard/thumbnail.png";
import pdfFile from "../dashboard/XC5551 - Software Engineering.pdf";

export default function MediaCard() {
  function print() {
    window.open(pdfFile, "PRINT", "height=800,width=700");
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" src={img} height="140" alt="Question Paper" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          End Semester
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Software Engineering
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={print}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}
