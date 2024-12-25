import { FaArrowRightLong } from 'react-icons/fa6';
import humanResource from "../../assets/humanResourceBanner.jpg";

const Banner = () => {
  return (
    <div
      className='bg-cover bg-center h-screen relative'
      style={{
        backgroundImage:
          `url(${humanResource})`,
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-[0.2]'></div>

      {/* Main Content */}
      <div className='container mx-auto px-6 py-12 text-center md:text-start'>
        <h2
          className='text-[59px] font-bold mb-4 text-white'
          style={{ lineHeight: '80px' }}
        >
          The best learners <br></br> are also teachers
        </h2>
        <p className='text-lg text-white mb-6'>
          Keep it concise: A slogan should be short and simple, making <br></br>{' '}
          it easier for people to remember.
        </p>
        <button className='flex items-center mx-auto md:mx-0 px-6 py-3 bg-[#FFFF00] text-black rounded-full hover:bg-[#fcfc46] transition'>
          <span className='mr-2'>Looking for Recruitment</span>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Banner;
