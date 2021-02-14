import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";
import RightNav from "./RightNav";

function Navbar() {

    // const[show, setShow] = useState(false);
    // const clicked = () => {
    //    setShow(true);
    // }
    return (
        <>
            <div className="nav">
                <div className="leftnav">
                    <NavLink to="/"><h1>Hello</h1></NavLink>
                </div>
                <RightNav/>
                <Burger/>
            </div>
        </>
    )
}

export default Navbar;