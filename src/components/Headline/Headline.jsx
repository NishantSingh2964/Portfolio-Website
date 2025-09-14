import React from 'react'
import './Headline.css'
import { FaAsterisk} from 'react-icons/fa'

const Headline = () => {
  return (
    <section className='headline'>
      <div className="moving-text">
        <div className="container">
            <h5>Web design</h5>
            <FaAsterisk className='star'/>
            <h5>App design</h5>
            <FaAsterisk className='star'/>
            <h5>Responsive design</h5>
            <FaAsterisk className='star'/>
            <h5>UI/UX design</h5>
            <FaAsterisk className='star'/>
        </div>
        <div className="container">
            <h5>Web design</h5>
            <FaAsterisk className='star'/>
            <h5>App design</h5>
            <FaAsterisk className='star'/>
            <h5>Responsive design</h5>
            <FaAsterisk className='star'/>
            <h5>UI/UX design</h5>
            <FaAsterisk className='star'/>
        </div>
        <div className="container">
            <h5>Web design</h5>
            <FaAsterisk className='star'/>
            <h5>App design</h5>
            <FaAsterisk className='star'/>
            <h5>Responsive design</h5>
            <FaAsterisk className='star'/>
            <h5>UI/UX design</h5>
            <FaAsterisk className='star'/>
        </div>
      </div>
    </section>
  )
}

export default Headline
