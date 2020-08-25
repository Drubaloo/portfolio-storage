import React from "react"
import ProjectCard from "../ProjectCard/ProjectCard"
import projects from "../../projects.json"
import "./style.css"

function Project(props) {
    return (
        <div className="img2 " id="portfolio">
            <div className="">
                <div className="container">

                    <div className="bar2 row m-auto col-6">
                        <h1 className=" do2 mx-auto p-3 col-sm-12">WHAT I'VE DONE</h1>
                        <h5 className="do2 mx-auto col-sm-12">I love building things, have a look.</h5>
                    </div>
                    <div className="row mx-auto text-center mt-5">

                        {props.children}

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Project