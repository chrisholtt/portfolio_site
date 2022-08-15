import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import ContactPageIcon from '@mui/icons-material/ContactPage';

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
                    <li>Chris Holt</li>
                    <Button variant="contained" startIcon={<ContactPageIcon />} onClick={handleOpen}>Contact</Button>
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