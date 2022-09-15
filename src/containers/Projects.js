import React from 'react'
import Project from './Project'
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';


const Projects = () => {

    return (
        <div className='projects-wrapper'>
            <div className="top-text-space"></div>
            <h2 style={{ color: 'white' }}>My Projects</h2>
            <hr className='hr' />
            <br />
            <p style={{ color: 'white' }} className='hr'>A hand-picked collection of projects I've created using various languages. Feel free to check out my github <a href="https://github.com/chrisholtt" target='_blank'>here</a>. </p>
            <div className="projects-container">
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item lg={4}>
                        <Link to="/calorie-tracker" style={{ textDecoration: 'none' }} >
                            <Project color={"#2596be"} lang={'PYTHON'} title={'Calorie tracker'} description={'Full stack web app using Python, Flask and postgreSQL'} />
                        </Link>
                    </Grid>

                    <Grid item lg={4}>
                        <Link to="blackjack-game" style={{ textDecoration: 'none' }}>
                            <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Blackjack game'} description={'Browser minigame created using React and MUI'} />
                        </Link>
                    </Grid>

                    <Grid item lg={4}>
                        <Link to="nft-project" style={{ textDecoration: 'none' }}>
                            <Project color={"#96d9c3"} lang={'SOLIDITY'} title={'NFT Project'} description={'NFT project on the Ethereum blockchain. React Dapp, Solidity smart contract and Webflow.'} />
                        </Link>
                    </Grid>

                    <Grid item lg={4}>
                        <Link to="coin-project" style={{ textDecoration: 'none' }}>
                            <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Cryptocurrency App'} description={'Web app using React and Chart JS that tracks and charts the top 100 coins.'} />
                        </Link>
                    </Grid>

                    <Grid item lg={4} >
                        <Link to="site-project" style={{ textDecoration: 'none' }}>
                            <Project color={"#e4d44c"} lang={'JAVASCRIPT'} title={'Portfolio site'} description={'A site to call my own, made using Three.js, WebGL, and React'} />
                        </Link>
                    </Grid>

                    <Grid item lg={4}>
                        <Project color={"#2596be"} lang={'COMING SOON'} title={'COMING SOON'} description={'COMING SOON'} />
                    </Grid>
                </Grid>

            </div>

        </div>
    )
}

export default Projects