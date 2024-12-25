import React from "react";
import card2pic from '../../assets/consultingimages/card2pic.jpg';

const FirstCard = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center h-screen px-6 my-4">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <h1 className="text-sm font-bold">Our Services</h1>
          <h1 className="text-5xl font-bold mb-4">Consulting For Your...</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 ">
            At our consulting firm, we offer a comprehensive suite of services
            designed to address the diverse needs of businesses across
            industries. From strategic planning and organizational
            transformation to digital optimization and operational efficiency,
            we empower your business to succeed in today's dynamic environment.
          </p>
          <button className="px-6 py-3 bg-[#F2FF05] text-black rounded-full hover:bg-yellow-400 transition">
            Learn More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={card2pic}
            alt="Hero"
            className="rounded-lg shadow-lg sm:w-[497px] sm:h-[537px] mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
