import React from "react";
import { NavLink } from "react-router-dom";

function RightNav() {
    return (
        <>
            <div className="rightnav">
                <ul>
                    <li><NavLink exact activeClassName="active_class" to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="active_class" to="/service">Service</NavLink></li>
                    <li><NavLink exact activeClassName="active_class" to="/about">About Us</NavLink></li>
                    <li><NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default RightNav;