import React from 'react'
import './services.css'
import {FaArrowRight, FaLaptopCode, FaPenRuler} from 'react-icons/fa6'
import { FaPenNib } from 'react-icons/fa'


const servicesData = [
    {
       id:1,
       title: 'Web Developer',
       description: "As a MERN stack developer, I provide end-to-end solutions including front-end design, back-end development and full stack integrations. In this digital world, I help people in build there buisness and brand digitally",
       icon: <FaPenNib/>
    },
    {
       id:2,
       title: 'SEO',
       description: "I provide  SEO in every buisness for getting their business in first, which help people to make stand their business in google search first.",
       icon: <FaPenRuler/>
    },
    {
       id:3,
       title: 'UI/UX Design',
       description: "I offer professional UI/UX design services that blend aesthetics with functionality, creating intuitive, user-friendly interfaces. My designs enhance user engagement, ensure seamless experiences, and align perfectly with your brand’s goals across web and mobile platforms.",
       icon: <FaLaptopCode/>
    }
]

const Services = () => {
    const randerServicesData = servicesData.map((service, id)=>{
        return(
            <div className='card design' key={id}>
                <span className='service-icon'>{service.icon}</span>
                <h4>{service.title}</h4>
                <p className='m-block-1 hide-text line-clamp-2'>{service.description}</p>
                <a href="#" className='link'>
                    Learn More
                    &nbsp;
                    <FaArrowRight className='arrow green-text'/>
                </a>
            </div>
        )
    })
    return (
        <section id='Services' className="services-section">
            <div className="wrapper sm: py-5 md:py-16 ">
                <div className="flex between gap-4">
                    <div>
                        <span className='sub-text overlay-text' datatype='Services'>My Specialization</span>
                        <h2>
                            <span className='green-text'>Services</span> I Provide
                        </h2>
                    </div>
                    <a href="#" className='btn self-end'>View All Services</a>
                </div>

               <div className="flex mt-5 stretch gap-6">
                {randerServicesData}
                </div> 
            
            
            </div>


        </section>
    )
}

export default Services
