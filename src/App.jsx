import './App.css'
import Cerificates from './components/Certificates/Cerificates'
import AboutMe from './components/AboutMe/AboutMe'
import ContactMe from './components/ContactMe/ContactMe'
import Education from './components/Education/Education'
import Headline from './components/Headline/Headline'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Services from "./components/services/Services.jsx";
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Headline/>
    <Services/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Headline/>
    <Education/>
    <Cerificates/>
    <Headline/>
    <ContactMe/>
    <Headline/>
    <Footer/>
    </>
  )
}

export default App
