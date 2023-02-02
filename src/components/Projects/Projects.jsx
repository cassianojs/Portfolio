import React from 'react'
import { Link } from 'react-router-dom'
import "./projects.css"

const Projects = (props) => {
  return (
        <div className="card"> 
                <img className="card-photo" src={props.img}/>
                <div className="card-info">
                    <h3 className="card-title">{props.title}</h3>
                    <span className="card-text">{props.description}</span> 
                </div>
                <div className="card-buttons"> 
                    <Link to={props.liveLink}><button>Demo</button></Link>
                    <Link to={props.sourceCode}><button>Source Code</button></Link>
                </div>
                
        </div>
  )
}

export default Projects
