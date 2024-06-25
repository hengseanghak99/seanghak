import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // emailjs.sendForm('service_fjjfylf','template_3r77k8e', event.target, 'IKvdU6SPQY8n0je7m'); if i use this it working fine

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      event.target,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    }).catch(error => {
      console.error("Failed to send message:", error);
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col h-screen py-10">
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-6 border-2 border-white-500 rounded-lg shadow-md">
            <h2 className="text-xl font-mono text-white">Thank you!! for your contact.</h2>
            <p className="text-white font-mono">Your message has been sent.</p>
          </div>
        </div>
      )}
      {/* Contact Us Card Container */}
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        {/* Contact Us Card */}
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 border-2 border-white-500 rounded-lg shadow-md lg:shadow-lg bg-black">
          {/* Card Title */}
          <h2 className="text-center font-mono text-3xl lg:text-4xl text-white">
            Contact Me
          </h2>

          <form className="mt-10" autoComplete="off" onSubmit={handleSubmit}>
  {/* Name Input */}
  <label htmlFor="name" className="block text-xs font-mono text-white uppercase">
    Name
  </label>
  <input
    id="name"
    type="text"
    name="name"
    placeholder="Your Name"
    className="block w-full py-3 px-1 mt-2 font-mono bg-transparent appearance-none border-b-2 border-gray-100 text-white focus:text-white focus:outline-none focus:border-gray-200"
    required
    value={formData.name}
    onChange={handleChange}
    autoComplete="new-password"
  />

  {/* Email Input */}
  <label htmlFor="email" className="block mt-2 text-xs font-mono text-white uppercase">
    E-mail
  </label>
  <input
    id="email"
    type="email"
    name="email"
    placeholder="Your Email"
    className="block w-full py-3 px-1 mt-2 mb-4 font-mono bg-transparent appearance-none border-b-2 border-gray-100 text-white focus:text-white focus:outline-none focus:border-gray-200"
    required
    value={formData.email}
    onChange={handleChange}
    autoComplete="off"
  />

  {/* Message Input */}
  <label htmlFor="message" className="block mt-2 text-xs font-mono text-white uppercase">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    placeholder="Write your message here"
    className="block w-full h-32 py-3 px-1 mt-2 mb-4 font-mono bg-transparent appearance-none border-b-2 border-gray-100 text-white focus:text-white focus:outline-none focus:border-gray-200"
    required
    value={formData.message}
    onChange={handleChange}
    autoComplete="off"
  />
  <button
    type="submit"
    className="w-full py-3 mt-10 bg-gray-800 font-mono rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
  >
    Send Message
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
