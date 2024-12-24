import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const { profile } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    message: '',
  });
  const {loading,setLoading} = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if(!profile){
      toast.warn('Please login to send message');
      navigate('/login');
    }
    setLoading(true);
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          toast.success('Email sent successfully!',{position:'top-center'});
          setFormData({
            name: '',
            contactNumber: '',
            email: '',
            message: '',
          });
          setLoading(false);
        },
        (error) => {
          toast.error('Failed to send email. Please try again.',{position:'top-center'});
        }
      );
      setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-0 sm:p-6">
    {/* Image Section */}
    <div className="lg:w-1/2 w-full h-full sm:h-[620px] flex justify-center lg:justify-end mb-8 lg:mb-0">
      <img
        src="https://s3-alpha-sig.figma.com/img/d750/0d2b/64fa43613f7d20cbe78ab977ef025fd6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF2d9SS2u-JJY6ksTGlXGzt8qDR4TCU43OuY~-PbjyHIXLKCPI1wv-9O5jv5o88a2fUepJL~Q6qlMlFiN6dCtQ3~iBtEa2g4FWrThocmKxh4py03zLJKqoUN3oGlyXYdoDI1u-Ox9OceUkwSkep0NbMgZCdJ397EtbyJxtqeP9mb2mi~9A5KntlUOIftq-dYXUuQQsevtXGE0h~Z-yZE9C1ifRzUc8crh1S9v3oprGx~Xt9A0n0jlUuWks3if2cO32HFSscy8dpqduHh0~k708KV6pi26c7L0NfOmsKtcYwVQs0HIBQUfkT8BXRRxAORb1rafVD8lVc3udZDoaZCOg__"
        alt="Contact Us"
        className="rounded-lg shadow-lg object-cover w-full h-full lg:h-auto"
      />
    </div>
  
    {/* Form Section */}
    <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-lg flex items-center h-full">
      <form ref={formRef} className="space-y-4 w-full" onSubmit={sendEmail}>
        <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">Contact Us</h2>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2 text-lg">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your full name"
            required
          />
        </div>
  
        {/* Contact Number */}
        <div>
          <label htmlFor="contactNumber" className="block text-gray-700 mb-2 text-lg">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contact_number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your contact number"
          />
        </div>
  
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2 text-lg">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email address"
            required
          />
        </div>
  
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2 text-lg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>
  
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
          >
            {loading ? 'Sending...':'Submit'}
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
}

export default Contact;
