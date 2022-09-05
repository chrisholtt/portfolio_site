import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Box from '@mui/material/Box';


const ProjectPage = ({ slides, accent, title, lang, infoObj }) => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slideNodes = slides.map((slide) => {
        return <img src={slide} alt="slide" className='carousel-img' />
    })

    const challengeNodes = infoObj.challenges.map((challenge, index) => {
        return (
            <li key={index}>
                {challenge}
            </li>
        )
    })

    const toolNodes = infoObj.tools.map((tool, index) => {
        return (
            <li key={index}>
                {tool}
            </li>
        )
    })

    const reflectionsNodes = infoObj.reflections.map((reflection, index) => {
        return (
            <li key={index}>
                {reflection}
            </li>
        )
    })

    return (
        <>
            <Navbar />
            <section className='sec-project'>
                <div className='project-page-container'>
                    <Link to="/" className='project-page-back-container'>
                        <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: 'white', fontSize: '1.5rem' }} />
                        <h4>Back to main</h4>

                    </Link>

                    <div className="project-page-container-inner">
                        <div className="project-page-inner-banner" style={{ background: accent }}></div>
                        <div className="project-page-container-inner-inner">
                            <h2 style={{ color: accent }}>{lang}</h2>
                            {/* <Typography variant='h4'> */}
                            <h1>{title}</h1>
                            {/* </Typography> */}

                            <div className="project-video-container">
                                <hr style={{ border: `1px solid ${accent}`, width: '80vw' }} />
                                <div className="project-carousel">
                                    <Box sx={{
                                        width: '80vw'
                                    }}>
                                        <Slider {...settings}>
                                            {slideNodes}
                                        </Slider>
                                    </Box>
                                </div>
                                <hr style={{ border: `1px solid ${accent}`, width: '80vw' }} />
                            </div>

                            <div className="project-description-container">

                                <div>
                                    <h2 style={{ color: accent }}>BRIEF</h2>
                                    <p>{infoObj.brief}</p>
                                </div>
                                <div>
                                    <h2 style={{ color: accent }}>DESCRIPTION</h2>
                                    <p>{infoObj.description}</p>
                                    <br />
                                </div>
                                <div>
                                    <h2 style={{ color: accent }}>CHALLENGES</h2>
                                    <ul>
                                        {challengeNodes}
                                    </ul>
                                </div>
                                <div>
                                    <h2 style={{ color: accent }}>TOOLS</h2>
                                    <ul>
                                        {toolNodes}
                                    </ul>
                                </div>
                                <div>
                                    <h2 style={{ color: accent }}>REFLECTIONS</h2>
                                    <ul>
                                        {reflectionsNodes}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectPage