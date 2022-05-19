import React from 'react'
import formimage from "./logo.png"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header_info">
             {/* <TemporaryDrawer/> */}
                <img src={formimage} style={{height:'40px',width:"40px"}} className="form_image" /> 
             <div className="info">
                 QP Generator Dashboard
             </div>
            </div>
        </div>
    )
}

export default Header
