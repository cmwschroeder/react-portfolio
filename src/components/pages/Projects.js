import React from 'react';
import Project from '../Project';
import pethub from '../../images/pethub.png'
import artketplace from '../../images/artketplace.png'
import weather_dashboard from '../../images/weather-dashboard.png'
import tech_blog from '../../images/tech-blog.png'
import code_quiz from '../../images/code-quiz.png'
import note_taker from '../../images/note-taker.png'

function Projects() {
    return (
        <section id="projects">
            <div className="w-full bg-base-200 shadow-xl m-auto">
                <div className="card-body w-5/6 m-auto">
                    <h2 className="text-3xl">Projects: </h2>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around">
                        <Project projImg={pethub} projName="Pethub" gitLink="https://github.com/cmwschroeder/pethub" depLink="https://cmwschroeder.github.io/pethub/" />
                        <Project projImg={artketplace} projName="ARTketplace" gitLink="https://github.com/cmwschroeder/artketplace" depLink="https://artketplace.herokuapp.com/" />
                        <Project projImg={weather_dashboard} projName="Weather Dashboard" gitLink="https://github.com/cmwschroeder/weather-dashboard" depLink="https://cmwschroeder.github.io/weather-dashboard/" />
                        <Project projImg={tech_blog} projName="Tech Blog" gitLink="https://github.com/cmwschroeder/tech-blog" depLink="https://safe-mountain-78939.herokuapp.com/" />
                        <Project projImg={code_quiz} projName="Code Quiz" gitLink="https://github.com/cmwschroeder/code-quiz" depLink="https://cmwschroeder.github.io/code-quiz/" />
                        <Project projImg={note_taker} projName="Note Taker" gitLink="https://github.com/cmwschroeder/note-taker" depLink="https://intense-springs-41633.herokuapp.com/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;