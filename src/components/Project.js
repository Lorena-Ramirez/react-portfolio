import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css";

export default function Project({title, imgUrl, deployedUrl, githubUrl}) {
  return (
    
      <div className="col my-col">
        <div className="card card-img-top shadow p-3 rounded bg-white clearfix projectsCard" >
          <h4 style={{textAlign: "center"}}>{title}</h4>
          <img src={imgUrl} className="card-img-top" alt="Project's Homepage" />
          <div className="card-body">
            <p className="portfolio-text"> Deplyed Website Link: <Link to={deployedUrl} target="_blank">{title}</Link> <br></br>
                Github Repository Link: <Link to={githubUrl} target="_blank"> Repository</Link>
            </p>
          </div>
        </div>
      </div>
    
  )
}
