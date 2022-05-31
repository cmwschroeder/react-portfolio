import React from 'react';

function Project({ projImg, projName, gitLink, depLink }) {
    return (
        <div className="card m-auto lg:m-2 lg:w-2/5 bg-base-100 border-2 border-black">
            <figure><img src={projImg} className="h-96" alt="Project preview" /></figure>

            <h3 className="card-title m-3">{projName}</h3>
            <div className="card-actions justify-around m-3">
                <a href={depLink} target="_blank" className="btn btn-primary" rel="noreferrer">Visit Site</a>
                <a href={gitLink} target="_blank" className="btn btn-secondary" rel="noreferrer">Visit Repo</a>
            </div>
        </div>
    )
}

export default Project;