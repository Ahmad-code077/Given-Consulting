import uk from '../assets/InternationalPictures/UK.png';
import us from '../assets/InternationalPictures/US.png';
import Austra from '../assets/InternationalPictures/Australia.png';
import cana from '../assets/InternationalPictures/Canada.png';
import ireland from '../assets/InternationalPictures/Ireland.png';
import newzea from '../assets/InternationalPictures/New zealand.png';
import solution from '../assets/InternationalPictures/solution.png';
import Help from '../assets/InternationalPictures/HelpBg.png';

import { HeroBanner } from '../component';
import { GiMaterialsScience } from 'react-icons/gi';
import { MdAccountBalance, MdEngineering } from 'react-icons/md';

const International = () => {
  const CountryCards = [
    {
      id: 1,
      img: uk,
      title: 'United Kingdom',
    },
    {
      id: 2,
      img: us,
      title: 'United state',
    },
    {
      id: 3,
      img: Austra,
      title: 'Australia',
    },
    {
      id: 4,
      img: cana,
      title: 'Canada',
    },
    {
      id: 5,
      img: ireland,
      title: 'Ireland',
    },
    {
      id: 6,
      img: newzea,
      title: 'New Zealand',
    },
  ];

  const HelpCards = [
    {
      id: 1,
      title: 'Fast-Track your Study Dreams',
      desc: 'Easily check your eligibility with IDP FastLane before applying for your course.',
    },
    {
      id: 2,
      title: 'Scholarships – over 5,100 opportunities await',
      desc: 'Explore scholarships from 370+ top institutions around the world and take the first step toward making your dreams come true.',
    },
    {
      id: 3,
      title: 'Cost Calculator',
      desc: 'Manage your budget with ease as an international student, using our easy-to-use cost calculator',
    },
    {
      id: 4,
      title: 'IDP in Your Pocket',
      desc: 'Simplify your journey with the IDP Live App—browse courses, apply to universities, and track your progress—all at your fingertips.',
    },
    {
      id: 5,
      title: 'Student Essentials',
      desc: 'From visas to accommodation and health cover, we’ve got everything you need to thrive and make your journey stress-free.',
    },
    {
      id: 6,
      title: 'Expert Advice',
      desc: 'Your dedicated counsellor will guide you every step of the way, guiding you smoothly toward your dream institutions.',
    },
  ];

  const Courses = [
    {
      id: 1,
      text: 'Social Science',
      icons: <GiMaterialsScience className='text-black' />,
      desc: 'Unlocking Your Potential',
    },
    {
      id: 2,
      text: 'Accounting',
      icons: <MdAccountBalance className='text-black' />,
      desc: 'Driving Measurable Outcomes',
    },
    {
      id: 3,
      text: 'Engineering',
      icons: <MdEngineering className='text-black' />,
      desc: 'Sustainable Transformation',
    },
  ];

  return (
    <>
      <HeroBanner
        img={solution}
        text={'Solutions crafted for success'}
        desc={'Here You meet with best consultants!! '}
      />
      <div className='main-par'>
        <div className='mt-10'>
          <h2 className='text-3xl font-roboto'>
            Your Dream Study Destination Awaits
          </h2>
          <div className='md:w-[15%] h-[7px] w-[15%] bg-red-600 rounded-full'></div>
          <p className='text-sm sm:text-lg mt-3 font-judson'>
            Begin an exciting academic journey in these varied and welcoming
            study locations!
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-10 my-9 mx-5'>
          {CountryCards.map((data) => {
            return (
              <div className='relative' key={data.id}>
                <img src={data.img} alt='' />
                <div className='absolute bottom-5 w-36 text-center left-1/2 -translate-x-1/2 text-lg font-semibold text-text-color font-roboto'>
                  {data.title}
                </div>
              </div>
            );
          })}
        </div>
        <div className='mt-10 font-roboto'>
          <h2 className='text-3xl'>How We can help you?</h2>
          <div className='md:w-[15%] h-[7px] w-[15%] bg-red-600 rounded-full mb-6'></div>
          <div className='relative w-full h-full md:h-screen mt-2'>
            <img
              src={Help}
              alt=''
              className='absolute top-0 left-0 w-full h-full object-cover'
            />

            <div className='relative inset-0 flex items-center justify-center'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-9 mx-5 text-center'>
                {HelpCards.map((carddata) => {
                  return (
                    <div
                      className='card px-6 h-64 pt-20 border-[1.5px] rounded-2xl text-text-color bg-black opacity-75 border-black'
                      key={carddata.id}
                    >
                      <h1 className='text-xl font-bold'>{carddata.title}</h1>
                      <p className='text-sm mt-4'>{carddata.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 font-roboto'>
          <h2 className='text-3xl mt-20'>Popular courses among Pakistani students</h2>
          <div className='md:w-[15%] h-[7px] w-[15%] bg-red-600 rounded-full'></div>
          <div className='flex flex-wrap justify-center items-center gap-8 my-9'>
            {Courses.map((course) => (
              <div className='bg-[#faf7f3] flex flex-col items-center justify-center w-80 h-60 rounded'>
                <p className='text-3xl bg-bodyColor p-4 rounded-full'>
                  {course.icons}
                </p>
                <h1 className='mt-4 text-[#656468] text-xl'>{course.text}</h1>
                <p className='mt-2 text-[#868487]'>{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default International;
