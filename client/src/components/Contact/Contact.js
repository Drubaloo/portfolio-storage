import React, { useState } from "react"
import "./style.css"
const axios = require('axios')

const twitter = require("./images/Twitter_Social_Icon_Rounded_Square_Color.png")

const github = require("./images/GitHub-Mark-Light-120px-plus.png")

const linkdIn = require("./images/LI-In-Bug.png")



function Contact() {
    const [message, setMessage] = useState([])
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const email = function (event) {

        event.preventDefault()

        axios.post("/email", {
            name: formObject.name,
            email: formObject.email,
            message: formObject.message
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="img3" id="contact">

            <div className="bar3 row m-auto col-6">
                <h1 className=" do3 mx-auto p-3">Get in touch with me!</h1>
            </div>
            <div className="container contact-overlay">
                <form className="text-center">
                    <div className="form-group m-2">
                        <label htmlFor="Name">Name</label>
                        <input type="text" onChange={handleInputChange} name="name" className="form-control" placeholder="Barry Allen" />
                    </div>

                    <div className="form-group m-2">
                        <label htmlFor="email address">Email</label>
                        <input type="text" onChange={handleInputChange} name="email" className="form-control" placeholder="2Fast4U@gmail.com" />
                    </div>

                    <div className="form-group m-2">
                        <label htmlFor="Message">Message</label>
                        <input type="text" onChange={handleInputChange} name="message" className="form-control text-center" style={{ height: "20rem" }}
                            placeholder="Write me something sweet" />
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary portBtn" onClick={(event) => {
                            email(event)
                            
                            }}>Submit</button>
                    </div>

                </form>


            </div>

            <div className="socialMedia">
                <a href='https://twitter.com/ImNotDrumatic' target="_blank" className="mx-auto mt-4 mr-2 contactImg"><img src={twitter}
                    className="img-fluid contactImg" alt="twitter link" /></a>

                <a href="https://github.com/Drubaloo" target="_blank" className="mx-auto mt-4 mr-2 contactImg"><img src={github}
                    className="img-fluid contactImg" alt="github link" /></a>

                <a href="https://www.linkedin.com/in/dru-sanchez-465696194/" target="_blank" className="mx-auto mt-4 mr-2 contactImg"><img src={linkdIn}
                    className="img-fluid contactImg" alt="linkdIn link" /></a>
            </div>
        </div>
    )
}

export default Contact