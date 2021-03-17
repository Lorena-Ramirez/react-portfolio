import React from "react";
import ProfilePic from "../../assets/images/profile-pic.jpeg"
import Resume from "../../assets/resume/_Lorena Ramirez- Full-Stack Web Developer Resume.pdf"
import { Link } from "react-router-dom";
import "../../style.css";

function About() {
  return (
    <section>
      <div className="container my-container page-container">
        <div className="col shadow p-3 rounded aboutMe-block">
          {/* <!-- Header --> */}
          <div className="row">
            <div className="col">
              <h1> About Me</h1>
            </div>
          </div>


          {/* <!-- Image and paragraph --> */}
          <div className="row">
            <div className="col">
              <img src={ProfilePic} alt="Profile of Lorena Ramirez"
                className="image-thumbnail float-left mr-3" />

              <p className="bio-text">Hi there! My name is Lorena Ramirez. I am 19 years old and I recently graduated
              UNCC's Full-Stack Coding Bootcamp! I am currently employeed through a part-time internship with the fitness app Quictivity where I
              am a react developer working on front and back-end development. As a skilled Full-Stack React Developer I craft responsive and performant web applications.
              I offer a variety of technical skills acquired from my experience with graduating UNCC's Full-Stack Coding Bootcamp as well as personal projects I've worked on in my free time.
              Working with a team in group projects has granted me a professional reputation of leadership and effective communication skills.
              My adaptability has aided in my ability to identify issues, brainstorm and troubleshoot problems, and evaluate effective solutions.
              </p>

              <p className="bio-text">
                I am very passionate about coding and have a drive to learn more skills everyday. I thoroughly enjoy the
                coding bootcamp and hope to pursue a succesful career
                along the way. Outside of coding my hobbies include listening to audiobooks and hiking. In my freetime I
                enjoy spending time with my family. Thank you for taking the time to get to know me.
                 I hope you enjoy ezploring my projects I've been working on and that we get in contact soon!
              <div className="flex">
                  <button type="button" className="btn modal-btn" >
                    <Link className="resume-link" to="/contact">Get connected with me! </Link>
                  </button>

                  <button className="btn modal-btn">
                    <a className="resume-link" href={Resume}>View my Resume</a>
                  </button>

                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
