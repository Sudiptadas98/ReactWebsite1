import React from "react";
import { NavLink } from "react-router-dom";

function SCard(props) {
    return (
        <>
            <div className="card">
                <img src={props.imgsrc} alt="cardimg" />
                <div className="carddesc">
                    <h3>{props.title}</h3>
                    <p>Lorem ipsum dolor si saepe in! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <NavLink to=""><button>Go Somewhere</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default SCard;