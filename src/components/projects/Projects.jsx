import React, { useState } from 'react'
import { Data } from '../../data/projects'
import './Projects.css'

export const Projects = () => {

  const [projects, setProjects] = useState(Data)

  return (
    <>
      <div className='containerProject' id='projects'>
        <div className='containerTitleProject'>
          <h1>PROJECTS</h1>
        </div>
        <div className='containerInfoProject'>
          {
            projects.map((project) => (
              <div className='containerCard'>
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
                    <li>HTML</li>
                    <li>HTML</li>
                    <li>HTML</li>
                    <li>HTML</li>
                    <li>HTML</li>
                    <li>HTML</li>
                  </ul>
                </div>
                <div className='cardBtn'>
                  <a href={project.deploy} className='btnDeploy'><i className="fa-solid fa-globe"></i> Preview</a>
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
