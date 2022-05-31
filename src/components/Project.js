import React from 'react';

function Project({ projImg, projName, gitLink, depLink }) {
    return (
        <div class="card m-auto lg:m-2 lg:w-2/5 bg-base-100 border-2 border-black">
            <figure><img src={projImg} class="h-96" alt="Project preview" /></figure>

            <h3 class="card-title m-3">{projName}</h3>
            <div class="card-actions justify-around m-3">
                <a href={depLink} target="_blank" class="btn btn-primary" rel="noreferrer">Visit Site</a>
                <a href={gitLink} target="_blank" class="btn btn-secondary" rel="noreferrer">Visit Repo</a>
            </div>
        </div>
    )
}

export default Project;