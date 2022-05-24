import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";
import annauniversity_logo from '../Images/annauniversity logo.png';
// withStyles & makeStyles

const style = {
    sideMenu: {
        
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    }
    
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
            <img src={annauniversity_logo}  style={{width:"70%", marginTop:"50%", marginLeft:"19%" }}></img>
          
          <li classname='navtext'>
              <div style={{color:"white",fontFamily:"courier", paddingLeft:"10%"}}>
                  <h2 >Anna University</h2>
                  <h4>College Of Engineering,Guindy, Chennai-600025</h4>
              {/* <button style={{marginLeft:"37%",marginTop:"106%"}}>
                Logout     
            </button> */}
            </div>
            </li> 
        </div>
    )
}

export default withStyles(style)(SideMenu);
