import React from "react";
import "../../style.css";

function Contact() {
  return (
  <div>
    <section>
      <div className="container my-container page-container">
        <div className="col shadow p-3 rounded aboutMe-block">
          <div className="row">
            <div className="col" style={{marginTop: "auto",marginBottom: "auto"}}>
              <h1 style={{textAlign:"center"}}> Contact Me</h1>
            </div>
        </div>
          
          <div className="row">
            <div className="col" style ={{wordBreak:"break-all"}}>
              <h2 style={{textAlign:"center"}}>
              GitHub: <a href="https://github.com/Lorena-Ramirez" target="_blank" rel="noreferrer">Github-Lorena-Ramirez</a> <br></br>
              LinkedIn: <a href="https://www.linkedin.com/in/lorena-ramirez-bb788a1b8/"
              target="_blank" rel="noreferrer">LinkIn-Lorena-Ramirez</a><br></br>
              Email: <a href="mailto:ramirezlorenaa18@gmail.com">ramirezlorenaa18@gmail.com</a>
              </h2>
            </div>
         </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Contact;
