import React from "react"
import "./style.css"

function Navbar() {
    return(
        <div className="navigator">
            <nav className="navbar navbar-toggleable-lg navbar-light">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand mx-auto" href="https://docs.google.com/document/d/1aMwDy0bHTzxdWcxPul_dpR3k3YWZkQuknvYIdFl7PNI/edit?usp=sharing" target="_blank">Resume</a>
                    <a className="navbar-brand mx-auto" href="https://www.linkedin.com/in/dru-sanchez-465696194/">LinkedIn</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar