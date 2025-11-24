import React, { useState } from "react";
import SectionContainer from "./SectionContainer.jsx";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import axios from "axios";
import { portfolioData } from "../data/portfolioData.js";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);


        // Define API URL based on environment
        const API_BASE_URL = import.meta.env.PROD
            ? "https://aayushpatel036.onrender.com"
            : "http://localhost:5000";

        try {
            const res = await axios.post(`${API_BASE_URL}/contact`, formState);

            if (res.status === 200) {
                setIsSuccess(true);
                setFormState({ name: "", email: "", message: "" });
                setTimeout(() => setIsSuccess(false), 5000);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to send email");
        } finally {
            setIsSubmitting(false);
        }

        // Simulate network request
        // setTimeout(() => {
        //   console.log("Form submitted:", formState);
        //   setIsSubmitting(false);
        //   setIsSuccess(true);
        //   setFormState({ name: '', email: '', message: '' });

        //   // Reset success message after 3 seconds
        //   setTimeout(() => setIsSuccess(false), 5000);
        // }, 1500);
    };


    return (
        <SectionContainer id="contact" className="bg-gradient-to-b from-dark-900 to-black">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                {/* Left Column — Contact Info */}
                <div>
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">
                        Get in Touch
                    </span>

                    <h2 className="text-4xl font-bold text-white mb-6">
                        Let's Build Something Together
                    </h2>

                    <p className="text-gray-400 mb-10 leading-relaxed">
                        I'm currently open to freelance opportunities or full-time roles.
                        Whether you have a question or just want to say hi, I’ll try my best
                        to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-dark-800 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>

                            <div>
                                <h4 className="text-white font-medium">Email</h4>
                                <a
                                    href={`mailto:${portfolioData.email}`}
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    {portfolioData.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-dark-800 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>

                            <div>
                                <h4 className="text-white font-medium">Location</h4>
                                <p className="text-gray-400">Remote / Worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column — Form */}
                <div className="bg-dark-800 p-8 rounded-2xl border border-white/5 shadow-xl">
                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle className="text-green-500" size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">
                                Message Sent!
                            </h3>

                            <p className="text-gray-400">
                                Thank you for reaching out. I'll get back to you shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
