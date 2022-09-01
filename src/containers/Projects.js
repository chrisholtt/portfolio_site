import React from 'react'
import Project from './Project'
import { Link } from "react-router-dom";


const Projects = () => {

    return (
        <div className='projects-wrapper'>
            <h2 style={{ color: 'white' }}>My projects</h2>
            <hr className='hr' />
            <div className="projects-container">
                <Link to="/calorie-tracker" style={{ textDecoration: 'none' }} >
                    <Project color={"#2596be"} lang={'PYTHON'} title={'Calorie tracker'} description={'Full stack web app using Python, Flask and postgreSQL'} />
                </Link>
                <Link to="blackjack-game" style={{ textDecoration: 'none' }}>
                    <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Blackjack game'} description={'Browser minigame created using React and MUI'} />
                </Link>
                <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Cryptocurrency App'} description={'Web app using React and Chart JS that tracks and charts the top 100 coins.'} />
                <Project color={"#2596be"} lang={'PYTHON'} title={'Calorie tracker'} description={'Full stack web app using Python, Flask and postgreSQL'} />
                <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Portfolio site'} description={'A site to call my own, made using Three.js, WebGL, and React'} />
                <Project color={"#96d9c3"} lang={'SOLIDITY'} title={'NFT PROJECT'} description={'NFT project on the Ethereum blockchain. React Dapp, Solidity smart contract and Webflow.'} />
            </div>

        </div>
    )
}

export default Projects