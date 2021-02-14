import React from "react";
import { NavLink } from "react-router-dom";


function Header(props) {
    return (
        <>
            <section id="header">
                <div className="left_header">
                    <h1>{props.name} <strong className="brand">XYZ manegers..</strong></h1>
                    <p>Lorem ipsum, Commodi, eaque quas sed odit doloribus modi.</p>
                    <NavLink to={props.visit}><button>{props.btname}</button></NavLink>
                </div>
                <div className="right_header">
                    <img className="animated" src={props.imgsrc} alt="image"/>
                </div>
            </section>
        </>
    )
}

export default Header;