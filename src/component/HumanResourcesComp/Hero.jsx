import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='relative'>
      <h1 className='text-[30px] text-center font-[700] mb-4 bg-[yellow] h-44 top-16'>
        Recruitment
      </h1>
      <div className='flex items-center justify-between absolute top-20 py-16 px-6 bg-white max-w-[1500px] mx-auto gap-12 lg:flex-row md:flex-col flex-col sm:text-center shadow-lg border-3 border-gray-700 rounded-lg'>
        {/* Left side image */}
        <div className='w-1/2'>
          <img
            // src={heropic}
            alt='Description'
            className='object-cover w-[500px] h-[400px] rounded-lg md:w-[100%] md:h-[200px] sm:w-[100%] sm:h-h-[100px] lg:w-[100%] lg:h-[350px]'
          />
        </div>

        {/* Right side content */}
        <div className='max-w-lg text-black justify-center flex flex-col items-center xl:left-72'>
          <h2 className='text-[48px] font-[700] mb-4 md:text-[30px] sm:text-[20px]'>
            Dream Jobs Made Simple
          </h2>
          <p className='text-lg mb-6 md:text-[15px] sm:text-[15px]'>
            our priority is matching you with the company that suits your
            professional goals, growth and happiness. Integrity, personal
            connection and deep knowledge in the field of medical sales means
            the stage is set for your success. We will coach you throughout the
            process so your job search can run flawlessly.
          </p>
          <button className='flex items-center bg-[#FFFF00] text-black px-6 py-2 rounded-full hover:bg-[#fafa45] transition'>
            <span className='mr-2'>Looking for Recruitment</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
