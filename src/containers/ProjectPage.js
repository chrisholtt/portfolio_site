import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


const ProjectPage = ({ accent, title, lang }) => {
    return (
        <>
            <Navbar />
            <section className='sec1'>
                <div className='project-page-container'>
                    <Link to="/" className='project-page-back-container'>
                        <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: 'white', fontSize: '1.5rem' }} />
                        <h4>Back to main</h4>
                    </Link>

                    <div className="project-page-container-inner">
                        <div className="project-page-inner-banner" style={{ background: accent }}></div>
                        <div className="project-page-container-inner-inner">
                            <h2 style={{ color: accent }}>{lang}</h2>
                            <h1 style={{ fontSize: '3rem' }}>{title}</h1>
                            <hr style={{ border: `0.5px solid ${accent}` }} />

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectPage