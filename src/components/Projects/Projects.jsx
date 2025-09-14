import React from 'react'
import './Projects.css'
import Project1 from '../../assets/project1.png'
import Project2 from '../../assets/project2.png'
import Project3 from '../../assets/project3.png'
import Project4 from '../../assets/project4.png'
import Project5 from '../../assets/project5.png'
import Project6 from '../../assets/project6.png'
import { FaArrowRight } from 'react-icons/fa'

const projectsData = [
    {
        id: 1,
        title: "zaptro-ecommerce-app",
        Description: "An online platform enabling businesses to easily sell physical products, digital goods, or services directly to customers via the internet with secure payments,user-friendly experience.",
        image: Project1,
        src: 'https://github.com/NishantSingh2964/zaptro-ecommerce-app',
        tech: [
            {
                id: 1,
                list: 'Rect js'
            },
            {
                id: 2,
                list: 'Node.js'
            },
            {
                id: 3,
                list: 'Express.js'
            },

        ]
    },
    {
        id: 2,
        title: "Food-Delivery-Website",
        Description: "An online platform that acts as an intermediary, allowing customers to browse menus from various restaurants, place food orders, and have them delivered to their doorstep.",
        image: Project2,
        src: 'https://github.com/NishantSingh2964/Food-Delivery-Website',
        tech: [
            {
                id: 1,
                list: 'React.js'
            },
            {
                id: 2,
                list: 'Tailwind'
            },
            {
                id: 3,
                list: 'Express.js'
            }
        ]
    },
    {
        id: 3,
        title: "Reaction-Speed-Game",
        Description: "A simple game designed to improve a person's reaction time. This version involves tapping the screen as quickly as possible and increase your score.",
        image: Project3,
        src: 'https://github.com/NishantSingh2964/Reaction-Speed-Game',
        tech: [
            {
                id: 1,
                list: 'React.js'
            },
            {
                id: 2,
                list: 'Tailwind'
            },
            {
                id: 3,
                list: 'Redux'
            }
        ]
    },
    {
        id: 4,
        title: "Marketing-agency-website",
        Description: "A Marketing Agency Website that highlights services, portfolio, and client success stories, designed with a modern UI to attract businesses, showcase expertise, and generate leads.",
        image: Project4,
        src: 'https://github.com/NishantSingh2964/Marketing-agency-website',
        tech: [
            {
                id: 1,
                list: 'React'
            },
            {
                id: 2,
                list: 'Framer Motion'
            },
            {
                id: 2,
                list: 'Redux'
            }
        ]
    },
    {
        id: 5,
        title: "NGO-website",
        Description: "An NGO website that showcases the organization’s mission, activities, and impact, while providing sections like Home, About Us, and Volunteer Form to encourage participation, and build trust.",
        image: Project5,
        src: 'https://github.com/NishantSingh2964/NGO-website',
        tech: [
            {
                id: 1,
                list: 'React.js'
            },
            {
                id: 2,
                list: 'Tailwind'
            },
            {
                id: 1,
                list: 'Router'
            }
        ]
    },
    {
        id: 6,
        title: "Digital Course Purchasing App",
        Description: "A Digital Course Purchasing App that allows users to browse, purchase, and access online courses with secure payments, user-friendly UI, and real-time progress tracking.",
        image: Project6,
        src: 'https://github.com/NishantSingh2964/Digital-Course-Purchase-App',
        tech: [
            {
                id: 1,
                list: 'React.js'
            },
            {
                id: 2,
                list: 'Express.js'
            },
            {
                id: 1,
                list: 'MongoDB'
            }
        ]
    },
]

const Projects = () => {

    const renderProjectsData = projectsData.map((project, id)=>{
        return(
            <div key={id} className='card1 project'>
                <div className="project-image">
                   <img src={project.image} alt="" />
                </div>

                <div className="project-content">
                    <ul className='flex gap-4'>
                        {project.tech.map((technology, index)=>{
                            return (
                                <li key={index} className='list'>{technology.list}</li>
                            )
                        })}
                    </ul>
                    <h3 className='mt-8'>{project.title}</h3>
                    <p className='para'>{project.Description}</p>
                    <a href={project.src} target='_blank' className='icon-container border-inverse rotate'><FaArrowRight/></a>
                </div>
            </div>
        )
    })
    return (
        <section id='projects'>
            <div className="wrapper py-36">
                <div id='Projects' className="flex between gap-4">
                    <div>
                        <span className='sub-text overlay-text' datatype='Portfolio'>My Protfolio</span>
                        <h2>
                            Let's Have a look <br /> at <span className='green-text'>My Portfolio</span>
                        </h2>
                    </div>
                    <a href="https://github.com/NishantSingh2964?tab=repositories" target='_blank' className='btn self-end'>View all Projects</a>
                </div>

                <div className=' mt-20'>
                    {renderProjectsData}
                </div>
            </div>

        </section>
    )
}

export default Projects
