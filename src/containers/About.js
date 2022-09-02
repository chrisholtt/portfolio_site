import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';


const About = () => {

    const [offSetX, setOffSetX] = useState('')


    const moveSkills = () => {
        setOffSetX(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', moveSkills)
    }, [])


    const actionsJs = [
        { icon: <FontAwesomeIcon icon={faTruckFast} />, name: 'Express.js' },
        { icon: <img src="./static/node-icon.svg" alt="" />, name: 'Node' },
        { icon: <img src="./static/react-icon.svg" alt="" />, name: 'React' }
    ];

    const actionsPy = [
        { icon: <img src="./static/flask-icon.svg" alt="" />, name: 'Flask' },

    ]


    // JS
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Python
    const [openPy, setOpenPy] = React.useState(false);
    const handleOpenPy = () => setOpenPy(true);
    const handleClosePy = () => setOpenPy(false);

    // Solidity
    const [openSol, setOpenSol] = React.useState(false);
    const handleOpenSol = () => setOpenSol(true);
    const handleCloseSol = () => setOpenSol(false);

    // Java
    const [openJava, setOpenJava] = React.useState(false);
    const handleOpenJava = () => setOpenJava(true);
    const handleCloseJava = () => setOpenJava(false);


    return (
        <div className='about-wrapper'>
            <Backdrop open={open} />
            <Backdrop open={openPy} />
            <Backdrop open={openSol} />
            <Backdrop open={openJava} />

            <div className='skill-wrapper'>
                <div className="skill-top" style={{ transform: `translateY(${offSetX * 0.2}px)` }}>

                    <div className='skill'>
                        <SpeedDial sx={{ '& .MuiFab-primary': { width: 120, height: 120 } }} FabProps={{ sx: { bgcolor: '#202124', '&:hover': { bgcolor: '#202124' } } }} onClose={handleClose} onOpen={handleOpen} open={open} ariaLabel="SpeedDial tooltip example" icon={<img style={{ marginTop: '10px' }} src="./static/javascript-icon.svg" alt="" />}>
                            {actionsJs.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    tooltipOpen
                                    onClick={handleClose}
                                    FabProps={{ size: 'large' }}
                                />
                            ))}
                        </SpeedDial>
                        <h1>JavaScript</h1>
                    </div>

                    <div className="skill">
                        <SpeedDial sx={{ '& .MuiFab-primary': { width: 120, height: 120 } }} FabProps={{ sx: { bgcolor: '#202124', '&:hover': { bgcolor: '#202124' } } }} onClose={handleClosePy} onOpen={handleOpenPy} open={openPy} ariaLabel="SpeedDial tooltip example" icon={<img src="./static/python-icon.svg" alt="" />}>
                            {actionsPy.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    tooltipOpen
                                    onClick={handleClose}
                                    FabProps={{ size: 'large' }}
                                />
                            ))}
                        </SpeedDial>
                        <h1>Python</h1>
                    </div>

                    <div className="skill">
                        <SpeedDial sx={{ '& .MuiFab-primary': { width: 120, height: 120 } }} FabProps={{ sx: { bgcolor: '#202124', '&:hover': { bgcolor: '#202124' } } }} onClose={handleCloseSol} onOpen={handleOpenSol} open={openSol} ariaLabel="SpeedDial tooltip example" icon={<img src="./static/solidity-icon.svg" alt="" />}>
                            {actionsJs.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    tooltipOpen
                                    onClick={handleClose}
                                    FabProps={{ size: 'large' }}
                                />
                            ))}
                        </SpeedDial>
                        <h1>Solidity</h1>
                    </div>

                    <div className="skill">
                        <SpeedDial sx={{ '& .MuiFab-primary': { width: 120, height: 120 } }} FabProps={{ sx: { bgcolor: '#202124', '&:hover': { bgcolor: '#202124' } } }} onClose={handleCloseJava} onOpen={handleOpenJava} open={openJava} ariaLabel="SpeedDial tooltip example" icon={<img src="./static/java-icon.svg" alt="" />}>
                            {actionsJs.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    tooltipOpen
                                    onClick={handleClose}
                                    FabProps={{ size: 'large' }}
                                />
                            ))}
                        </SpeedDial>
                        <h1>Java</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About