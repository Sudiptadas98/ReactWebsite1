import React from "react";
import Header from "./Header";
import ahi from "../src/images/aboutheader.svg";

function About() {
    return(
        <>
            <Header
            name="Welcome to About Page"
            imgsrc={ahi}
            visit="/contact"
            btname="Contact Now"/>
        </>
    )
}

export default About;