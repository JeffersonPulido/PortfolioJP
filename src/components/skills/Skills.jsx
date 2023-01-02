import React from 'react'
import './Skills.css'

export const Skills = () => {
    return (
        <>
            <div className='containerSkill' id='skills'>
                <div className='containerTitleProject'>
                    <h1>SKILLS</h1>
                </div>
                <div className='containerStats'>
                    <div className="skills">
                        <div className="skills-title">TECHNICAL </div>
                        <div className="skills-bar">
                            <div className="bar">
                                <div className="info">
                                    <span>HTML - CSS</span>
                                </div>
                                <div className="progress-line"><span className="html"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>JAVASCRIPT</span>
                                </div>
                                <div className="progress-line"><span className="javascript"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>PHP</span>
                                </div>
                                <div className="progress-line"><span className="php"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>REACTJS</span>
                                </div>
                                <div className="progress-line"><span className="react"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>PYTHON</span>
                                </div>
                                <div className="progress-line"><span className="py"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>SQL</span>
                                </div>
                                <div className="progress-line"><span className="db"></span></div>
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="skills-title">PROFESSIONAL</div>
                        <div className="skills-bar">
                            <div className="bar">
                                <div className="info">
                                    <span>Comunicación</span>
                                </div>
                                <div className="progress-line"><span className="comunicacion"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>Trabajo en Equipo</span>
                                </div>
                                <div className="progress-line"><span className="trabajo"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>Creatividad</span>
                                </div>
                                <div className="progress-line"><span className="creatividad"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>Autonomia</span>
                                </div>
                                <div className="progress-line"><span className="autonomia"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>Puntualidad</span>
                                </div>
                                <div className="progress-line"><span className="puntualidad"></span></div>
                                <div className="bar"></div>
                                <div className="info">
                                    <span>Liderazgo</span>
                                </div>
                                <div className="progress-line"><span className="liderazgo"></span></div>
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
