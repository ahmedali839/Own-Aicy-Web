import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaYoutube, FaMapPin } from "react-icons/fa"
import { MapPin } from 'lucide-react';
import { useLoading } from '../Header/Header'


export default function Contact() {

    const { startLoading, stopLoading } = useLoading();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        type: "Business",
        concern: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.concern) {
            toast.error("Please fill out all required fields.");
            return;
        }

        try {
            startLoading()
            const response = await fetch("https://formspree.io/f/mdkldary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Thank you! Your message has been sent.");
                setFormData({ name: "", email: "", phone: "", type: "Business", concern: "" });
            } else {
                toast.error("Oops! Something went wrong.");
            }
        } catch (error) {
            // console.error(error);
            toast.error("Network error, please try again later.");
        } finally {
            stopLoading()
        }
    };


    return (
        <section className="min-h-screen bg-gray-100 py-12 px-6">
            <ToastContainer />
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Let’s Connect 🤝</h2>
                <p className="text-gray-600 mt-2">
                    I usually reply within 24 hours. Fill out the form or reach me through the details below.
                </p>
            </div>

            {/* Main Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Left Info Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-700">Contact Information</h3>
                    <p className="text-gray-500">
                        Feel free to message or call anytime. Whether it’s about business, projects, or just a friendly hello.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-blue-500" />
                            <span>ahmedyarr1212@gmail.com</span>
                        </div>
                        {/* <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-green-500" />
                            <span>+923053403570</span>
                        </div> */}
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-red-500" />
                            <span>Islamabad, Pakistan</span>
                        </div>
                    </div>


                    {/* Social Links */}
                    <div className="flex gap-5 mt-6">
                        <a href="https://github.com/ahmedali839/" target="_blank" rel="noreferrer">
                            <FaGithub className="text-2xl text-gray-700 hover:text-black transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmed-yar-rasheed/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition" />
                        </a>
                        <a
                            // href="https://www.youtube.com/@CodewithAhmedYar"
                            target="_blank" rel="noreferrer">
                            <FaYoutube className="text-2xl text-red-600 hover:text-red-800 transition" />
                        </a>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-6">Send me a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="outline-none w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="outline-none w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone (optional)"
                                className="outline-none w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600">Type</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="outline-none w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="Business">Business</option>
                                <option value="Personal">Personal</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600">Message <span className="text-red-500">*</span></label>
                            <textarea
                                name="concern"
                                value={formData.concern}
                                onChange={handleChange}
                                placeholder="Share your message with us in detail here..."
                                required
                                className="outline-none w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-400 h-28"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg py-3 shadow hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="max-w-4xl mx-auto mt-12">
                <h3 className="text-center text-lg font-medium text-gray-700 mb-4">Find Me Here
                    <MapPin className="inline h-8 w-6" />
                </h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.265843258415!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df959fc0e3e07f%3A0xf3e5b2c62f33cf29!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692383017892!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-2xl shadow"
                ></iframe>
            </div>
        </section>
    )
}
