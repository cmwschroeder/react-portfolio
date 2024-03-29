import React from 'react';
import resume from '../resume.pdf'

function NavBar({ currentPage, handlePageChange }) {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'btn-active' : ''}>About Me</a></li>
                        <li><a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'btn-active' : ''}>Projects</a></li>
                        <li><a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'btn-active' : ''}>Contact Me</a></li>
                        <li><a href="/resume.pdf" target="_blank">Resume</a></li>
                    </ul>
                </div>
                <a href="#home" onClick={() => handlePageChange('About')} className="btn btn-ghost normal-case text-xl">Christian Schroeder</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'btn-active' : ''}>About Me</a></li>
                    <li><a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'btn-active' : ''}>Projects</a></li>
                    <li><a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'btn-active' : ''}>Contact</a></li>
                    <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;