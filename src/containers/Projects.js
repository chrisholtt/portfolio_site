import React from 'react'
import Project from './Project'
import { Link } from "react-router-dom";


const Projects = () => {

    return (
        <div className='projects-wrapper'>
            <div className="top-text-space"></div>
            <h2 style={{ color: 'white' }}>My projects</h2>
            <hr className='hr' />
            <br />
            <p style={{ color: 'white' }}>A hand-picked collection of projects I've created using various languages. Feel free to check out my github <a href="">here</a></p>
            <div className="projects-container">
                <Link to="/calorie-tracker" style={{ textDecoration: 'none' }} >
                    <Project color={"#2596be"} lang={'PYTHON'} title={'Calorie tracker'} description={'Full stack web app using Python, Flask and postgreSQL'} />
                </Link>
                <Link to="blackjack-game" style={{ textDecoration: 'none' }}>
                    <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Blackjack game'} description={'Browser minigame created using React and MUI'} />
                </Link>
                <Link to="nft-project" style={{ textDecoration: 'none' }}>
                    <Project color={"#96d9c3"} lang={'SOLIDITY'} title={'NFT Project'} description={'NFT project on the Ethereum blockchain. React Dapp, Solidity smart contract and Webflow.'} />
                </Link>
                <Link to="coin-project" style={{ textDecoration: 'none' }}>
                    <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Cryptocurrency App'} description={'Web app using React and Chart JS that tracks and charts the top 100 coins.'} />
                </Link>

                <Project color={"#2596be"} lang={'PYTHON'} title={'Calorie tracker'} description={'Full stack web app using Python, Flask and postgreSQL'} />
                <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Portfolio site'} description={'A site to call my own, made using Three.js, WebGL, and React'} />
            </div>

        </div>
    )
}

export default Projects