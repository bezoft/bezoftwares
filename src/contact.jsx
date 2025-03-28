import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactForm = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    service: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      'service_ddf2ygd', // Replace with your EmailJS Service ID
      'template_gudui9p', // Replace with your EmailJS Template ID
      {
        user_name: formData.name,
        user_email: formData.email,
        phone_number: formData.phoneNumber,
        service: formData.service,
        message: formData.message,
      },
      'xDpmN9g6QJ-VLMZf1' // Replace with your EmailJS Public Key
    )
      .then((result) => {
        console.log('Email sent:', result.text);
        setSuccess(true);
        setFormData({ name: '', phoneNumber: '', email: '', service: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="w-full bg-transparent flex items-center justify-center p-4" id={id}>
      <div className="w-full max-w-6xl bg-opacity-80 p-6">
        <h2 className="text-5xl font-bold text-white mb-6 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />

            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
          </div>

          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-600 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            >
              <option value="" className="bg-[#1f1f1f] text-gray-400">Select Service</option>
              <option value="mobile-app" className="bg-[#1f1f1f] text-white">Mobile App</option>
              <option value="web-dev" className="bg-[#1f1f1f] text-white">Web Development</option>
              <option value="custom-software" className="bg-[#1f1f1f] text-white">Custom Software</option>
              <option value="amazon-selling" className="bg-[#1f1f1f] text-white">Amazon Selling</option>
              <option value="video-editing" className="bg-[#1f1f1f] text-white">Video Editing</option>
              <option value="image-editing" className="bg-[#1f1f1f] text-white">Image Editing</option>
              <option value="other" className="bg-[#1f1f1f] text-white">Other</option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
          </div>

          <div className="w-full flex justify-end items-center">
            <button
              type="submit"
              className="w-1/3 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </div>

          {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}

        </form>
      </div>
    </div>
  );
};

export default ContactForm;
