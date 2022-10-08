import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faVial } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const About = () => {

    const [offSetX, setOffSetX] = useState('')


    const moveSkills = () => {
        setOffSetX(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', moveSkills)
    }, [])


    const actionsJs = [
        { icon: <FontAwesomeIcon icon={faTruckFast} />, name: 'Express' },
        { icon: <img src="./static/node-icon.svg" alt="" />, name: 'Node' },
        { icon: <img src="./static/react-icon.svg" alt="" />, name: 'React' }
    ];

    const actionsPy = [
        { icon: <img src="./static/flask-icon.svg" alt="" />, name: 'Flask' },
        { icon: <FontAwesomeIcon icon={faGuitar} />, name: 'Django' },
        { icon: <FontAwesomeIcon icon={faCubes} />, name: 'numpy' }
    ]

    const actionsJava = [
        { icon: <FontAwesomeIcon icon={faLeaf} />, name: 'Spring' },
        { icon: <FontAwesomeIcon icon={faVial} />, name: 'JUNIT' },
        { icon: <FontAwesomeIcon icon={faFile} />, name: 'IntelliJ' }
    ]

    const actionsSolidity = [
        { icon: <FontAwesomeIcon icon={faHelmetSafety} />, name: 'hardhat' },
        { icon: <FontAwesomeIcon icon={faEthereum} />, name: 'ethereum' },
        { icon: <FontAwesomeIcon icon={faHeadphones} />, name: "REMIX" }

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
                <div className="skill-top" >
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <div className='skill'>
                                <SpeedDial sx={{ '& .MuiFab-primary': { width: { xs: 60, md: 90, lg: 120 }, height: { xs: 60, md: 90, lg: 120 } } }} FabProps={{ sx: { bgcolor: '#202124', '&:hover': { bgcolor: '#202124' } } }} onClose={handleClose} onOpen={handleOpen} open={open} ariaLabel="SpeedDial tooltip example" icon={<img className='speed-dial-img' src="./static/javascript-icon.svg" alt="" />}>
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
                                <Typography sx={{
                                    fontSize: {
                                        lg: 30,
                                        md: 25,
                                        sm: 20,
                                        xs: 15
                                    }
                                }}>
                                    JavaScript
                                </Typography>
                            </div>

                        </Grid>
                        <Grid item xs={3}>
                            <div className="skill">
                                <SpeedDial sx={{ '& .MuiFab-primary': { width: { xs: 60, md: 90, lg: 120 }, height: { xs: 60, md: 90, lg: 120 } } }} FabProps={{ sx: { bgcolor: '#202124', '&:hover': { bgcolor: '#202124' } } }} onClose={handleClosePy} onOpen={handleOpenPy} open={openPy} ariaLabel="SpeedDial tooltip example" icon={<img className='speed-dial-img' src="./static/python-icon.svg" alt="" />}>
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
                                <Typography sx={{
                                    fontSize: {
                                        lg: 30,
                                        md: 25,
                                        sm: 20,
                                        xs: 15
                                    }
                                }}>
                                    Python
                                </Typography>
                            </div>

                        </Grid>
                        <Grid item xs={3}>
                            <div className="skill">
                                <SpeedDial sx={{ '& .MuiFab-primary': { width: { xs: 60, md: 90, lg: 120 }, height: { xs: 60, md: 90, lg: 120 } } }} FabProps={{ sx: { bgcolor: '#202124', '&:hover': { bgcolor: '#202124' } } }} onClose={handleCloseSol} onOpen={handleOpenSol} open={openSol} ariaLabel="SpeedDial tooltip example" icon={<img className='speed-dial-img' src="./static/solidity-icon.svg" alt="" />}>
                                    {actionsSolidity.map((action) => (
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
                                <Typography sx={{
                                    fontSize: {
                                        lg: 30,
                                        md: 25,
                                        sm: 20,
                                        xs: 15
                                    }
                                }}>
                                    Solidity
                                </Typography>

                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="skill">
                                <SpeedDial sx={{ '& .MuiFab-primary': { width: { xs: 60, md: 90, lg: 120 }, height: { xs: 60, md: 90, lg: 120 } } }} FabProps={{ sx: { bgcolor: '#202124', '&:hover': { bgcolor: '#202124' } } }} onClose={handleCloseJava} onOpen={handleOpenJava} open={openJava} ariaLabel="SpeedDial tooltip example" icon={<img className='speed-dial-img' src="./static/java-icon.svg" alt="" />}>
                                    {actionsJava.map((action) => (
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
                                <Typography sx={{
                                    fontSize: {
                                        lg: 30,
                                        md: 25,
                                        sm: 20,
                                        xs: 15
                                    }
                                }}>
                                    Java
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>



                </div>
            </div>
        </div>
    )
}

export default About