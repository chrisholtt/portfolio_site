import { orange } from '@mui/material/colors'
import React from 'react'
import Project from './Project'

const Projects = () => {

    return (
        <div className='projects-wrapper'>
            <h2 style={{ color: 'white' }}>My projects</h2>
            <hr className='hr' />
            <div className="projects-container">
                <Project color={"#2596be"} lang={'PYTHON'} title={'Calorie tracker'} description={'Full stack web app using Python, Flask and postgreSQL'} />
                <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Blackjack game'} description={'Browser minigame created using React and MUI'} />
                <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Cryptocurrency App'} description={'Web app using React and Chart JS that tracks and charts the top 100 coins.'} />
                <Project color={"#2596be"} lang={'PYTHON'} title={'Calorie tracker'} description={'Full stack web app using Python, Flask and postgreSQL'} />
                <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Blackjack game'} description={'Browser minigame created using React and MUI'} />
                <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Cryptocurrency App'} description={'Web app using React and Chart JS that tracks and charts the top 100 coins.'} />
            </div>

        </div>
    )
}

export default Projects