import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, MuiThemeProvider } from '@mui/material'





const ProjectPage = ({ slides, accent, title, lang }) => {

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
                            <Typography variant='h4'>
                                {title}
                            </Typography>
                            {/* <h1 style={{ fontSize: '3rem' }}>{title}</h1> */}
                            <hr style={{ border: `1px solid ${accent}` }} />

                        </div>
                        <div className="project-carousel">
                            <Box sx={{
                                width: {
                                    xs: 200,
                                    sm: 400,
                                    md: 500,
                                    lg: 700,
                                    xl: 800
                                }
                            }}>
                                <Slider {...settings}>
                                    {slideNodes}
                                </Slider>
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectPage