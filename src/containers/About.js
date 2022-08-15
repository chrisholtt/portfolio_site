import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';


const About = () => {

    const [offSetX, setOffSetX] = useState('')


    const moveSkills = () => {
        setOffSetX(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', moveSkills)
    }, [])


    const actionsJs = [
        { icon: <img src="./static/react-icon.svg" alt="" />, name: 'React' },
        { icon: <img src="./static/node-icon.svg" alt="" />, name: 'Node' },
        { icon: <img src="./static/flask-icon.svg" alt="" />, name: 'Flask' }
    ];


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



    return (
        <div className='about-wrapper'>
            <Backdrop open={open} />
            <Backdrop open={openPy} />
            <Backdrop open={openSol} />

            <div className='skill-wrapper'>
                <div className="skill-top" style={{ transform: `translateY(${offSetX * 0.2}px)` }}>

                    <div className='skill'>
                        <SpeedDial sx={{ '& .MuiFab-primary': { width: 120, height: 120 } }} FabProps={{ sx: { bgcolor: '#6df1d8', '&:hover': { bgcolor: '#6df1d8' } } }} onClose={handleClose} onOpen={handleOpen} open={open} ariaLabel="SpeedDial tooltip example" icon={<img style={{ marginTop: '10px' }} src="./static/javascript-icon.svg" alt="" />}>
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
                        <SpeedDial sx={{ '& .MuiFab-primary': { width: 120, height: 120 } }} FabProps={{ sx: { bgcolor: '#6df1d8', '&:hover': { bgcolor: '#6df1d8' } } }} onClose={handleClosePy} onOpen={handleOpenPy} open={openPy} ariaLabel="SpeedDial tooltip example" icon={<img src="./static/python-icon.svg" alt="" />}>
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
                        <h1>Python</h1>
                    </div>

                    <div className="skill">
                        <SpeedDial sx={{ '& .MuiFab-primary': { width: 120, height: 120 } }} FabProps={{ sx: { bgcolor: '#6df1d8', '&:hover': { bgcolor: '#6df1d8' } } }} onClose={handleCloseSol} onOpen={handleOpenSol} open={openSol} ariaLabel="SpeedDial tooltip example" icon={<img src="./static/solidity-icon.svg" alt="" />}>
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
                        <SpeedDial sx={{ '& .MuiFab-primary': { width: 120, height: 120 } }} FabProps={{ sx: { bgcolor: '#6df1d8', '&:hover': { bgcolor: '#6df1d8' } } }} onClose={handleCloseSol} onOpen={handleOpenSol} open={openSol} ariaLabel="SpeedDial tooltip example" icon={<img src="./static/java-icon.svg" alt="" />}>
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