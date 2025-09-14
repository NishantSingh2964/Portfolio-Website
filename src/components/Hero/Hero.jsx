import React, { useEffect } from 'react'
import './Hero.css'
import HeroImage from '../../assets/hero-image.png'
import CV from '../../assets/resume.pdf'
import Typed from 'typed.js'

const Hero = () => {
  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ["Front-end Dev", "WebDeveloper", "Full-stack Dev"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section>
      <div className='hero-section flex wrapper gap-4'>
        <div className="hero-content">
          <span className='sub-text'>Hello there!</span>
          <h1>
            <span className="green-text">I'm Nishant Raj,</span>
            <br /><span className='auto-type'></span><br /> based in India.
          </h1>
          <p className='para'>
            I'am a web developer specializing in building React applications. Currently I am focused on building full-stack applications.
          </p>
          <div className='flex gap-6 button'>
            <a href="#Projects" className='btn'>View My Works</a>
            <a href={CV} download='Nishant-cv' className="border-btn btn">Download Resume</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero
