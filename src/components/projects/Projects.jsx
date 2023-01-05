import React, { useState } from 'react'
import { Data } from '../../data/projects'
import './Projects.css'

export const Projects = () => {

  const [projects, setProjects] = useState(Data)

  const [toggle, setToggle] = useState(false)

  const handleClickMenu = () => {
    setToggle(!toggle)
  };


  return (
    <>
      <div className='containerProject' id='projects'>
        <div className='containerTitleProject'>
          <h1>PROJECTS</h1>
        </div>
        <div className='containerInfoProject'>
          {
            projects.map((project) => (
              <div className='containerCard' key={project.id}>
                <div className='cardHead'>
                  <p>{project.type}</p>
                </div>
                <div className='cardThumb'>
                  <img src={project.img} alt="" />
                </div>
                <div className='cardTitle'>
                  <h1>{project.title}</h1>
                </div>
                <div className='cardDesc'>
                  <p>{project.description}</p>
                </div>
                <div className='cardTech'>
                  <ul>
                    {project.tags.map((tech) => (
                      <li key={tech+"TAGS"}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className='cardBtn'>
                  <a href={project.deploy} className={project.btnDeploy == "Local" ? "disabled" : "btnDeploy"} onLoad={handleClickMenu}><i className='fa-solid fa-globe'></i>{project.btnDeploy}</a>
                  <a href={project.github} className='btnGithub'><i className="fa-brands fa-github"></i> Source</a>
                </div>
              </div>
            )
            )
          }
        </div>
      </div>
    </>
  )
}
