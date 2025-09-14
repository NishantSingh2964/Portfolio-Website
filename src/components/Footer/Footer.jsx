import React, { useState } from 'react'
import './Footer.css'
import CV from '../../assets/resume.pdf'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
    const [data, setData] = useState("");

    const handleClick = () => {
        if (data.trim() === "") {
            toast.error("Please fill the email first");
            return;
        }
        toast.success("We will connect soon!")     
        setData("");
    };


    return (
        <footer>
            <Toaster position="top-right" reverseOrder={false} />
            <div className='wrapper'>
                <div className='flex between border-bottom p-block-2 gap-16'>
                    <h2>Let's <span className='green-text'> Connect </span>There</h2>
                    <a href={CV} download='Nishant-cv' className=" btn border-btn self-end">Download Resume</a>
                </div>

                <div className='p-block-7 flex flex-start gap-12 md:gap-0'>
                    <div className="footer-wrapper">
                        <a href="#" className='logo'>
                            <span>N</span>ishant.
                        </a>

                        <p className='mt-8'>Thanks for stopping by— Available for freelance projects and collaborations. Let’s create something unforgettable together.</p>

                        <div className="flex gap-4 mt-8">
                            <a href="#" className="icon-container green-inverse"><FaFacebookF /></a>
                            <a href="#" className="icon-container green-inverse"><FaXTwitter /></a>
                            <a href="#" className="icon-container green-inverse"><FaEnvelope /></a>
                            <a href="#" className="icon-container green-inverse"><FaInstagram /></a>
                            <a href="#" className="icon-container green-inverse"><FaLinkedin /></a>
                        </div>
                    </div>

                    <ul className='footer-wrapper'>
                        <li>
                            <h6>Navigation</h6>
                        </li>
                        <li className='mt-8'>
                            <a href="#" className='links'>Home</a>
                        </li>
                        <li className='mt-8'>
                            <a href="#" className='links'>Services</a>
                        </li>
                        <li className='mt-8'>
                            <a href="#" className='links'>About Me</a>
                        </li>
                        <li className='mt-8'>
                            <a href="#" className='links'>Projects</a>
                        </li>
                        <li className='mt-8'>
                            <a href="#" className='links'>Certifications</a>
                        </li>
                        <li className='mt-8'>
                            <a href="#" className='links'>Contect Me</a>
                        </li>
                    </ul>

                    <ul className='footer-wrapper'>
                        <li>
                            <h6>Contact</h6>
                        </li>
                        <li className='mt-8'>
                            <a href="#" className='links'>7859084667</a>
                        </li>
                        <li className='mt-8'>
                            <a href="#" className='links'>nishantraj7859@gmail.com</a>
                        </li>
                        <li className='mt-8'>
                            <a href="https://www.linkedin.com/in/nishant-singh2964/" className='links'>Know More</a>
                        </li>
                        <li className='mt-8'>
                            <a href="#" className='links'>Ricco, kukaas, Jaipur <br /> Rajasthan(302028)</a>
                        </li>
                    </ul>

                    <div className="footer-wrapper">
                        <h6>Visited? Let me know</h6>
                        <div className='footer-input mt-8'>
                            <input
                                type="email"
                                autoComplete="off"
                                placeholder="Drop your email"
                                className="email-field"
                                value={data}                         // ✅ controlled input
                                onChange={e => setData(e.target.value)}
                            />
                            <button
                                onClick={handleClick}
                                className="input-btn"
                            >
                                <FaPaperPlane />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='copyright'>
                <div className="wrapper flex between">
                    <p>Copyright &copy; Nishant. All Rights Reserved</p>
                    <p>User Terms & Condition | Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
