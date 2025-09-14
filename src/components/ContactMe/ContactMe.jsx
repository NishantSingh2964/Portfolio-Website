import React, { useState } from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
    const [status, setStatus] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("");

        const formData = new FormData(event.target);
        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const message = formData.get("message")?.trim();

        if (!name || !email || !message) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setStatus("Sending...");

        formData.append("access_key", "3b1886d2-fad0-4e02-9043-9e392b1f2873");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("I will reach out to you soon!");
                event.target.reset();
                setStatus("");
            } else {
                toast.error(data.message || "Submission failed.");
                setStatus("");
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong. Please try again.");
            setStatus("");
        }
    };

    return (
        <section>
            <Toaster position="top-right" reverseOrder={false} />
            <div id="contectme" className="wrapper py-36">
                <div id="ContactMe" className="text-center">
                    <span className="sub-text overlay-text middle-ele" datatype="contact me">
                        Contact Me
                    </span>
                    <h2 className="skills-title">
                        Let’s create <br /> <span className="green-text">Something together</span>
                    </h2>
                </div>

                <div className="flex mt-20  gap-10">
                    {/* Contact Form */}
                    <motion.form
                        onSubmit={onSubmit}
                        noValidate
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 lg:w-2/3 bg-[var(--surface-clr)] text-[var(--text-primary-clr)] shadow-lg rounded-xl p-8"
                    >
                        {/* Name Field */}
                        <div className="w-full">
                            <label className="block text-sm font-semibold">Your Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-600 bg-[var(--background-clr)] text-[var(--text-primary-clr)] outline-none focus:border-[var(--accent-clr)]"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="w-full">
                            <label className="block text-sm font-semibold">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-600 bg-[var(--background-clr)] text-[var(--text-primary-clr)] outline-none focus:border-[var(--accent-clr)]"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div className="w-full">
                            <label className="block text-sm font-semibold">Message</label>
                            <textarea
                                name="message"
                                rows={7}
                                placeholder="Enter your message"
                                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-600 bg-[var(--background-clr)] text-[var(--text-primary-clr)] outline-none focus:border-[var(--accent-clr)] resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="self-start bg-[var(--accent-clr)] text-[var(--fixed-clr)] px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                        >
                            Submit
                        </button>

                        {status && <p className="text-sm text-[var(--accent-clr)] mt-2">{status}</p>}
                    </motion.form>

                    {/* Info Card */}
                    <div className="info">
                        {/* Details */}
                        <div className="detail">
                            <div>
                                <h6 className="">Address</h6>
                                <p className="">
                                    SP-42, Kukaas, Jaipur <br /> Rajasthan-302028
                                </p>
                            </div>

                            <div>
                                <h6 className="">Contact</h6>
                                <p className="">
                                    Phone: 7859084667 <br />
                                    Email: nishantraj7859@gmail.com
                                </p>
                            </div>

                            <div>
                                <h6 className="">Time</h6>
                                <p className="">
                                    Monday-Friday: 10:00 - 08:00 <br />
                                    Saturday-Sunday: 10:00 - 06:00
                                </p>
                            </div>
                        </div>

                        <div className="bg-header rounded-b p-4 md:p-8">
                            <h5>Stay Connected</h5>
                            <div className="flex gap-4">
                                <a href="#" className="icon-container black-inverse"><FaFacebookF /></a>
                                <a href="#" className="icon-container black-inverse"><FaXTwitter /></a>
                                <a href="nishantraj7859@gmail.com" className="icon-container black-inverse"><FaEnvelope /></a>
                                <a href="#" className="icon-container black-inverse"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/nishant-singh2964/" target="_blank" className="icon-container black-inverse"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactMe;
