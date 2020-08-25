/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projects from "./projects.json"
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro"
import Description from "./components/Description/Description"
import Project from "./components/Project/Project"
import SecondBar from "./components/SecondBar/SecondBar"
import Contact from "./components/Contact/Contact"
import Wrapper from "./components/Wrapper/Wrapper"
import ProjectCard from "./components/ProjectCard/ProjectCard"



class App extends Component {
  state = {
    projects
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Intro />
            </Route>
            <Route exact path="/">
          <Description />
        </Route>
        {/* <Route exact path="/project/:id">
          <Project />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route>
          <FourOhFour />
        </Route> */}
          </Switch>
        </Router>
        {/* <Intro />
        <Description />
        <Project>
          <Wrapper>
            {this.state.projects.map(project => (
              <ProjectCard

                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                href={project.href}

              />

            ))}
          </Wrapper>
        </Project>
        <SecondBar />
        <Contact /> */}
      </div>
    );
  }
}

export default App;
