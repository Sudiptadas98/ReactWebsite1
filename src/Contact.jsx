import React, { useState } from "react";


function Contact() {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: "",
    })

    const InputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData((preval) => {
            return{
                ...preval,
                [name] : value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        if(!data.fullname || !data.phone || !data.email || !data.message){
            alert("Fill all the inputs below");
            return;
        }else{
            alert(`${data.fullname} thanks for contacting us, We will ans your queries asap!`);
        }
        
        setData({
            fullname: "",
            phone: "",
            email: "",
            message: "",
        })
    }
    return (
        <>
            <section id="contact">
                <h1>Contact Us</h1>
                <div className="cform">
                    <form onSubmit={formSubmit}>
                        <div>
                            <label htmlFor="">Fullname</label>
                            <input type="text"
                                autoComplete="off"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input type="number"
                                autoComplete="off"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                placeholder="Enter you phone number" />
                        </div>
                        <div>
                            <label htmlFor="">Email ID</label>
                            <input type="email"
                                autoComplete="off"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="Enter your email address" />
                        </div>
                        <div>
                            <label htmlFor="">Message</label>
                            <br />
                            <textarea 
                                name="message"
                                value={data.message}
                                onChange={InputEvent}
                                placeholder="Write your queries here"></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;