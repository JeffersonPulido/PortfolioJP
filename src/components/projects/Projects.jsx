import React, { useState } from 'react'
import { Data } from '../../data/projects'
import './Projects.css'

export const Projects = () => {

  const [projects, setProjects] = useState(Data)

  const menuTypeDev = [...new Set(projects.map((Val) => Val.typeProject))]
  const menuTypeTech = [...new Set(projects.map((Val) => Val.type))]

  console.log(menuTypeDev)
  console.log(menuTypeTech)

  return (
    <>
      <div className='containerProject' id='projects'>
        <div className='containerTitleProject'>
          <h1>PROJECTS</h1>
        </div>
        <div className='containerButtons'>
          <div className='btnDev'>
            <p className='titleBtnFilter'>Tipo Desarrollo</p>
            {
              menuTypeDev.map((btnTypeDev) => (
                <button key={btnTypeDev + "typeProjectFilter"} className='btnFilter'>{btnTypeDev}</button>
              ))
            }
          </div>
          <div className='btnTech'>
            <p className='titleBtnFilter'>Tecnologias</p>
            {
              menuTypeTech.map((btnTypeTech) => (
                <button key={btnTypeTech + "typeTechFilter"} className='btnFilter'>{btnTypeTech}</button>
              ))
            }
          </div>
        </div>
        <div className='containerInfoProject'>
          {
            projects.map((project) => (
              <div className='containerCard' key={project.id}>
                <div className='cardHead'>
                  <p key={project.type + "TYPE"}>&nbsp;{project.type}</p>
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
                      <li key={tech + "TAGS"}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className='cardBtn'>
                  <a href={project.deploy} className={project.deploy == "#" ? "disabled" : "btnDeploy"}><i className='fa-solid fa-globe'></i>{project.deploy == "#" ? "Local" : "Web"}</a>
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
