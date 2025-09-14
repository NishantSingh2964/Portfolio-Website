import React, { useEffect, useState } from 'react'
import { FiSun } from 'react-icons/fi'
import { IoMoonOutline } from 'react-icons/io5'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'
import './Navbar.css'

const Navbar = () => {
    const [isMenuActive, setMenuActive] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
        console.log(theme);
    };


    const toggleFunction = () => {
        setMenuActive(prev => !prev)
    }
    return (
        <header>
            <nav className='flex between wrapper navbar'>
                <a href="#" className='logo'>
                    <span>N</span>ishant.
                </a>

                {/* Desktop menu */}
                <ul className='flex gap-8 desktop-menu'>
                    <li>
                        <a href="#Hero" className='links'>Home</a>
                    </li>
                    <li>
                        <a href="#Services" className='links'>Services</a>
                    </li>
                    <li>
                        <a href="#AboutMe" className='links'>About Me</a>
                    </li>
                    <li>
                        <a href="#Projects" className='links'>Projects</a>
                    </li>
                    <li>
                        <a href="#Skills" className='links'>Skills</a>
                    </li>
                    <li>
                        <a href="#ContactMe" className='links'>Contect Me</a>
                    </li>
                </ul>

                <div className='flex gap-8 nav-action'>
                    <a
                        onClick={toggleTheme}
                        className='icon-container border-inverse'>
                            {theme == 'light'? <IoMoonOutline/>: <FiSun />}
                    </a>
                    <a href="#ContactMe" className='btn'>Lets Talk</a>
                    <a href="#" className='hamburger' onClick={() => toggleFunction()} >
                        {isMenuActive ? <FaXmark /> : <FaBarsStaggered />}
                    </a>
                </div>

                {/* mobile menu */}
                <ul className={`mobile-menu ${isMenuActive ? 'mobile-menu-active' : ''}`}>
                    <li>
                        <a href="#" className='links' onClick={()=>setMenuActive(false)}>Home</a>
                    </li>
                    <li>
                        <a href="#Services" className='links' onClick={()=>setMenuActive(false)}>Services</a>
                    </li>
                    <li>
                        <a href="#AboutMe" className='links' onClick={()=>setMenuActive(false)}>About Me</a>
                    </li>
                    <li>
                        <a href="#projects" className='links' onClick={()=>setMenuActive(false)}>Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className='links' onClick={()=>setMenuActive(false)}>Skills</a>
                    </li>
                    <li>
                        <a href="#contectme" className='links' onClick={()=>setMenuActive(false)}>Contect Me</a>
                    </li>
                    <li>
                        <a href="#contectme" className='btn' onClick={()=>setMenuActive(false)}>Lets Talk</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
