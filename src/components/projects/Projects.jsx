import React, { useState } from 'react'
import { Data } from '../../data/projects'
import './Projects.css'
import { useTranslation } from 'react-i18next'

export const Projects = () => {

  const [t, i18n] = useTranslation("global");

  //State con DATA Original
  const [projects, setProjects] = useState(Data)
  //State con DATA Filtrada
  const [dataFilter, setDataFilter] = useState(projects)
  //Quitar repetidos de tipos de proyecto y tecnologias, metiendo el resultado en arrays nuevos
  const menuTypeDev = ['Todos', ...new Set(projects.map((Val) => Val.typeProject))]
  const menuTypeTech = ['Todos', ...new Set(projects.map((Val) => Val.type))]
  //Funcion de filtrar tipos de proyectos
  const filterTypeProject = (categoryProject) => {
    const newItem = Data.filter((newVal) => {
      return newVal.typeProject === categoryProject;
    });

    if (categoryProject === 'Todos') {
      setDataFilter(projects);
    } else {
      setDataFilter(newItem);
    }
  };
  //Funcion de filtrar tecnologias
  const filterTechs = (techProject) => {
    const newItem = Data.filter((newVal) => {
      return newVal.type === techProject;
    });

    if (techProject === 'Todos') {
      setDataFilter(projects);
    } else {
      setDataFilter(newItem);
    }
  };

  return (
    <>
      <div className='containerProject' id='projects'>
        <div className='containerTitleProject'>
          <h1>{t("titles.projects")}</h1>
        </div>
        <div className='containerButtons'>
          <div className='btnDev'>
            <p className='titleBtnFilter'>{t("titles.typeprojects")}</p>
            {
              menuTypeDev.map((btnTypeDev) => (
                <button key={btnTypeDev + "typeProjectFilter"} className='btnFilter' onClick={() => filterTypeProject(btnTypeDev)}>{btnTypeDev}</button>
              ))
            }
          </div>
          <div className='btnTech'>
            <p className='titleBtnFilter'>{t("titles.typetech")}</p>
            {
              menuTypeTech.map((btnTypeTech) => (
                <button key={btnTypeTech + "typeTechFilter"} className='btnFilter' onClick={() => filterTechs(btnTypeTech)}>{btnTypeTech}</button>
              ))
            }
          </div>
        </div>
        <div className='containerInfoProject'>
          {
            dataFilter.map((project) => (
              <div className='containerCard' key={project.id}>
                <div className='cardHead'>
                  <p key={project.type + "TYPE"}>{project.typeProject}&nbsp;-&nbsp;{project.type}</p>
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
