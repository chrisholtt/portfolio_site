import React, { useState } from 'react'
import { BufferGeometryLoader } from 'three';


const Navbar = () => {

    const [sticky, setSticky] = useState('scroll-up')

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


    return (
        <nav className={sticky}>
            <ul>
                <li>Chris Holt</li>
                <li><button>Contact me</button></li>
            </ul>
        </nav>
    )
}

export default Navbar