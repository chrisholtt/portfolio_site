import React, { useState } from 'react'
import { Link } from 'react-scroll'


const Progress = () => {

    return (
        <>
            <div className='progress-wrapper'>
                <Link activeClass='active' className='non-active' duration={500} smooth spy to='sec1'>
                </Link>

                <Link activeClass='active' className='non-active' duration={500} smooth spy to='sec2'>
                </Link>

                <Link activeClass='active' className='non-active' duration={500} smooth spy to='sec3'>
                </Link>

                <Link activeClass='active' className='non-active' duration={500} smooth spy to='sec4'>
                </Link>

            </div>
        </>
    )
}

export default Progress