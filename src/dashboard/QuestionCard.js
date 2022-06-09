import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../dashboard/thumbnail.png";

export default function MediaCard() {
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" src={img} height="140" alt="Question Paper" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Question Paper
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Software Engineering
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
