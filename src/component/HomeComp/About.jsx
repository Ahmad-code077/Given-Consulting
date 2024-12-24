import AboutImg from '../../assets/HomePageServices/AboutImg.png';

const About = () => {
  return (
    <section className='mt-20 flex flex-col lg:flex-row lg:gap-32 mx-10'>
      {/* Image Section */}
      <div className='hidden lg:block w-1/3'>
        <img src={AboutImg} alt='About Us' className='w-full object-cover md:mt-5 rounded h-[80%]' />
      </div>

      {/* Main Content */}
      <main className='flex flex-col lg:w-3/4 ml-auto '>
        {/* Heading */}
        <h1 className='text-4xl md:text-5xl font-judson text-center'>
          About Us
        </h1>
        <p className='text-[#0A2281] text-xl md:text-3xl my-4 text-center'>
          Safe comprehensive platform
        </p>

        {/* Description */}
        <div className='flex flex-col gap-4 text-lg leading-relaxed text-center lg:text-start'>
          <p>
            Reflect your brand identity: Your slogan should align with your
            brand's values, mission, and unique selling proposition. Be
            memorable: Use catchy words, rhymes, or wordplay to make your slogan
            stand out in people's minds. Highlight benefits: Focus on the
            advantages and benefits customers can experience by choosing your
            import-export services.
          </p>
          <p>
            Reflect your brand identity: Your slogan should align with your
            brand's values, mission, and unique selling proposition. Be
            memorable: Use catchy words, rhymes, or wordplay to make your slogan
            stand out in people's minds. Highlight benefits: Focus on the
            advantages and benefits customers can experience by choosing your
            import-export services.
          </p>
        </div>

        {/* Input Field with Button */}
        <div className='mt-8 flex justify-end'>
          <div className='relative w-full max-w-md'>
            <input
              type='email'
              placeholder='Contact Us'
              className='w-full py-3 pl-4 pr-32 border border-black rounded-md shadow-sm focus:ring-2 focus:ring-[#0A2281]  focus:outline-none bg-transparent'
            />
            <button className='absolute top-1/2 right-2 -translate-y-1/2 bg-[#0A2281] text-white px-4 py-2 rounded-md hover:bg-[#083d8a] transition'>
              Email
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
