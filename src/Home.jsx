import React from "react";
import Header from "./Header";
import hhi from "../src/images/homeheader.svg";

function Home() {
    return (
        <>
            <Header
            name="Grow your Business with"
            imgsrc={hhi}
            visit="/service"
            btname="Get Started"/>
        </>
    )
}

export default Home;