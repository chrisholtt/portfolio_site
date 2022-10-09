import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [sticky, setSticky] = useState('scroll-up')

    // Modal
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    let lastScroll;
    const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll <= 0) {
            setSticky('scroll-up')
        }
        if (currentScroll > lastScroll) {
            setSticky('scroll-down')
        }
        if (currentScroll < lastScroll) {
            setSticky('scroll-up')
        }
        lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        color: 'white',
        bgcolor: 'rgb(15,15,15)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (
        <>
            <nav className={sticky}>
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>CH</li>
                    </Link>
                    <li>
                        <a href="https://github.com/chrisholtt" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare} style={{ padding: '5px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/chrisphilholt/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} style={{ padding: '5px' }} />
                        </a>
                        <a href="CV.pdf" download="Chris-Holts-CV">
                            <FontAwesomeIcon icon={faSquareEnvelope} style={{ padding: '5px' }} />
                        </a>

                    </li>
                </ul>
            </nav>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography variant='h4'>Christopher Holt</Typography>
                    <Typography variant='h6' >chrisholt@chrisholt.io</Typography>
                    <Typography variant='h6' >07496132982</Typography>
                </Box>
            </Modal>
        </>
    )
}

export default Navbar