import React from "react";
import "./style.css"
const MainHeading=({main_text},{setOpen})=>{
    const opendown=()=>{
        setOpen=true
    }
    return(
        <div className="main_heading_Faqs">
            <p>{main_text}</p>
            {/* <button onClick={opendown}>
                click
            </button> */}
        </div>
    )
}
export default MainHeading