import { Button, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, faCircle, faCoffee } from "@fortawesome/free-solid-svg-icons";


const NumberButton = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Button variant="outlined"> 12 </Button>
            </Grid>
            <Grid item xs={4}>
                <Button type="submit" color="primary" sx={{ borderRadius: 28 }}>Enter</Button>
            </Grid>
            <Grid item xs={4}>
            <i class="fa-solid fa-circle-1"></i>
            </Grid>
            <Grid item xs={8}>
            </Grid>
        </Grid>
    )
}

export default NumberButton;