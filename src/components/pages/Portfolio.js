import React from "react";
import "../../style.css";
import Project from "../Project";
import Ultimutt from "../../assets/images/homePage.png";
import Planner from "../../assets/images/dayplanner.png";
import Password from "../../assets/images/password.png";
import Directory from "../../assets/images/employee-app.png";
import Weather from "../../assets/images/weather.png";
const Portfolio = () => {
  return (
    <section>
      <div className="container my-container page-container">

        <div className="row">
          <div className="col my-col">
            <h1> Portfolio </h1>
          </div>
        </div>

        <div className="row">
           <Project
              title="Productivity Planner"
              imgUrl="https://raw.githubusercontent.com/averyjbrown2/Productivity-Planner/main/public/images/dashboard.png"
              deployedUrl="https://obscure-lake-47661.herokuapp.com/"
              githubUrl="https://github.com/averyjbrown2/Productivity-Planner"
            />

            <Project
              title="UltiMUTT Dog Finder"
              imgUrl= {Ultimutt}
              deployedUrl="https://marenhamby.github.io/UltiMutt_dog_finder/"
              githubUrl="https://github.com/marenhamby/UltiMutt_dog_finder"
            />
        </div>
        <div className="row">
            <Project
              title="Weather Dashboard"
              imgUrl={Weather}
              deployedUrl="https://lorena-ramirez.github.io/Weather-Dashboard/"
              githubUrl="https://github.com/Lorena-Ramirez/Weather-Dashboard"
            />
      
            <Project
              title="Employee Directory"
              imgUrl={Directory}
              deployedUrl="https://lorena-ramirez.github.io/employee-app/"
              githubUrl="https://github.com/Lorena-Ramirez/employee-app"
            />
        </div>

        <div className="row">
            <Project
              title="Day Planner"
              imgUrl={Planner}
              deployedUrl="https://lorena-ramirez.github.io/Day-Planner/"
              githubUrl="https://github.com/Lorena-Ramirez/Day-Planner"
            />
      
            <Project
              title="Pasword Generator"
              imgUrl={Password}
              deployedUrl="https://lorena-ramirez.github.io/Password-Generator/"
              githubUrl="https://github.com/Lorena-Ramirez/Password-Generator"
            />
        </div>
      </div>
    </section>

  );
}

export default Portfolio;
