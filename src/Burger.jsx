import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RightNav from "./RightNav";

function Burger() {

    
    const[show, setShow] = useState(false);
    const clicked = () => {
       setShow(!show);
    }
    const linkclicked = () => {
        setShow(false)
    }

    return (
        <>
            <div class="burger" onClick={clicked}>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>  
            <div className="rightnav rightnavbur" style={{display: show ? "block" : "none"}}>
                <ul>
                    <li><NavLink onClick={linkclicked} exact activeClassName="active_class" to="/">Home</NavLink></li>
                    <li><NavLink onClick={linkclicked} exact activeClassName="active_class" to="/service">Service</NavLink></li>
                    <li><NavLink onClick={linkclicked} exact activeClassName="active_class" to="/about">About Us</NavLink></li>
                    <li><NavLink onClick={linkclicked} exact activeClassName="active_class" to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Burger;