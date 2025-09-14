import React from 'react'
import './AboutMe.css'
import AboutImage from '../../assets/about-image.png'
import CV from '../../assets/resume.pdf'

const AboutMe = () => {
  return (
    <section id='AboutMe'>
      <div className='wrapper py-9 border-btm border-bottom'>
      <div className='flex gap-20 mt-12'>
        <div className="about-image">
         <img src={AboutImage} alt="" />
        </div>
        <div className="about-content">
          <span className='sub-text overlay-text' datatype='About me'>About Me</span>
          <h2>Who is <span className='green-text'>Nishant Raj</span></h2>
          <p className='para'>
            a web developer passionate about clean code, modern design, user experience, and building responsive, accessible, and high-performing digital products.
          </p>

          <div className="flex gap-10 m-block-3 numbers">
            <div>
              <h6>20+</h6>
              <p> Personal Projects</p>
            </div>
            <div>
              <h6>02</h6>
              <p>Internships</p>
            </div>
            <div>
              <h6>200+</h6>
              <p>LeetCode Questions</p>
            </div>
          </div>
          <a href={CV} download='Nishant-cv' className=" btn">Download Resume</a>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default AboutMe
