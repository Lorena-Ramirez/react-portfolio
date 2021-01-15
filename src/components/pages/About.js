import React from "react";
import ProfilePic from "../../assets/images/profile-pic.jpeg"
import Resume from "../../assets/resume/Lorena's_Resume.pdf"
import "../../style.css";

function About() {
  return (
    <section>

    <div className="container my-container ">
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

            <p className="bio-text">Hi there! My name is Lorena Ramirez. I am 19 years old and I am a currently enrolled in
            the UNCC coding bootcamp! I graduated from Clover High
            School in 2018. I also attended the UNCC for alittle over a year. I majored in computer science however,
            decided to do the coding bootcamp first
            to get my foot in the door of the developer world! I plan to complete my degree after the coding bootcamp
            to accumulate more experience under my belt.
            I am also currently learning Japanese. I have a passion for the culture and the language and hope to live
            there one day for a period of my life.
            </p>

            <p className="bio-text">
              I am very passionate about coding and have a drive to learn more skills everyday. I thoroughly enjoy the
              coding bootcamp and hope to pursue a succesful career
              along the way. Outside of coding my hobbies include listening to audiobooks and hiking. In my freetime I
              enjoy spending time with my family. I am
              extremely family-oriented which also fueled my passion for the tech industries in hopes of landing a job
              fully remote!

            <div className="flex">
                {/* <!--Links within modal--> */}
                <button type="button" className="btn modal-btn" data-toggle="modal" data-target="#exampleModalCenter">
                  Get connected with me!
               </button>

                <button className="btn modal-btn">
                  <a className="resume-link" href={Resume}>View my Resume</a>
                </button>

              </div>
            </p>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Get Connect!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Email: <a href="mailto:ramirezlorenaa18@gmail.com">ramirezlorenaa18@gmail.com</a> <br></br>
                        GitHub: <a href="https://github.com/Lorena-Ramirez" target="_blank">Github-Lorena-Ramirez</a> <br></br>
                        LinkedIn: <a href="https://www.linkedin.com/in/lorena-ramirez-bb788a1b8/"
                        target="_blank">LinkIn-Lorena-Ramirez</a><br></br> <br></br>
                    </p>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn modal-close-btn" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
