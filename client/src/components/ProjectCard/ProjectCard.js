import React from "react";
import "./style.css";

function ProjectCard (props) {
  return ( 
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>

        <a href={props.href} target="_blank" onClick={"return false"}><button className="linkButton">{props.name}</button></a>
      </div>
          
    </div>
  );
}

export default ProjectCard;
