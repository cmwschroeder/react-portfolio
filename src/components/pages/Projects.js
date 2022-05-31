import React from 'react';
import Project from '../Project';

function Projects() {
    return (
        <section id="projects">
            <div className="w-full bg-base-200 shadow-xl m-auto">
                <div className="card-body w-5/6 m-auto">
                    <h2 className="text-3xl">Projects: </h2>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around">
                        <Project projImg="/images/pethub.png" projName="Pethub" gitLink="https://github.com/cmwschroeder/pethub" depLink="https://cmwschroeder.github.io/pethub/"/>
                        <Project projImg="/images/artketplace.png" projName="ARTketplace" gitLink="https://github.com/cmwschroeder/artketplace" depLink="https://artketplace.herokuapp.com/"/>
                        <Project projImg="/images/weather-dashboard.png" projName="Weather Dashboard" gitLink="https://github.com/cmwschroeder/weather-dashboard" depLink="https://cmwschroeder.github.io/weather-dashboard/"/>
                        <Project projImg="/images/tech-blog.png" projName="Tech Blog" gitLink="https://github.com/cmwschroeder/tech-blog" depLink="https://safe-mountain-78939.herokuapp.com/"/>
                        <Project projImg="/images/code-quiz.png" projName="Code Quiz" gitLink="https://github.com/cmwschroeder/code-quiz" depLink="https://cmwschroeder.github.io/code-quiz/"/>
                        <Project projImg="/images/note-taker.png" projName="Note Taker" gitLink="https://github.com/cmwschroeder/note-taker" depLink="https://intense-springs-41633.herokuapp.com/"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;