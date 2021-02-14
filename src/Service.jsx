import React from "react";
import SCard from "./SCard";
import CardData from "./CradData";

function Service() {
    return (
        <>
            <section id="service">
                <h1>Our Services..</h1>
                <div className="cardsec">
                    {
                        CardData.map((val, index) => {
                            return <SCard
                            key={index}
                            imgsrc={val.imgsrc}
                            title={val.title}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Service;