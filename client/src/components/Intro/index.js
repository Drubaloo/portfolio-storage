import React from "react"
import "./style.css"
import './title'

function Intro() {
    return (
        <div className="main">


            <div className="background">
                <div className="bar1 row mx-auto ">
                    <h1 className="mx-auto">I am
  <span
                            className="txt-rotate"
                            data-period="2000"
                            data-rotate='[ " Determined.", " Enthusiastic.", " Motivated.", " A Developer."]'></span>
                    </h1>

                </div>


                <div className="row">
                    <h1 className="profile mx-auto">▼ KEEP GOING ▼ </h1>
                </div>
            </div>

            <div className="container1 foreground">
                <div className="bar1 mx-auto ">
                    {/* <h1 className="mx-auto">I am
  <span
                            className="txt-rotate"
                            data-period="2000"
                            data-rotate='[ " Determined.", " Enthusiastic.", " Motivated.", " A Developer."]'></span>
                    </h1> */}

                </div>


                <div className="row">
                    <h1 className="profile mx-auto">▼ KEEP GOING ▼ </h1>
                </div>
            </div>
        </div>

        
    )
}

export default Intro