import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaFigma } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ThirdCard = () => {
  const cards = [
    { icon: <FaReact size={40} />, title: "Discover our Expertise", description: "Unlocking Your Potential" },
    { icon: <FaHtml5 size={40} />, title: "Innovative Solutions", description: "Driving Measurable Outcomes" },
    { icon: <FaCss3Alt size={40} />, title: "Tailored Strategies", description: "Sustainable Transformation" },
    { icon: <FaNodeJs size={40} />, title: "Empowering Your Success", description: "Comprehensive Consulting Solutions" },
    { icon: <FaDatabase size={40} />, title: "Trusted Partnerships", description: "Lasting Impact" },
    { icon: <FaFigma size={40} />, title: "Personalized Approach", description: "Cultivating Long-Term Growth" },
  ];

  return (
    <div className="py-0">
      {/* Heading Section */}
      <div className="text-center mb-12 px-2">
        <h1 className="text-4xl font-bold mb-4">Our Proven Approach</h1>
        <p className="text-lg text-gray-600 sm:px-20">
          At the heart of our consulting practice is a proven, iterative approach that ensures the success of every engagement.We begin by deeply immersing ourselves in your business, working closely with your team to achieve your goals.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="text-yellow-500 mb-4 flex items-center justify-center">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-12">
        <Link to='/contact' className="px-6 py-3 bg-[#DBFB1C] text-black rounded-full hover:bg-yellow-400 transition">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ThirdCard;
