import uk from '../assets/InternationalPictures/UK.png';
import us from '../assets/InternationalPictures/US.png';
import Austra from '../assets/InternationalPictures/Australia.png';
import cana from '../assets/InternationalPictures/Canada.png';
import ireland from '../assets/InternationalPictures/Ireland.png';
import newzea from '../assets/InternationalPictures/New zealand.png';
import solution from '../assets/InternationalPictures/solution.png';

import { HeroBanner } from '../component';

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

  const Buttons = [
    {
      id: 1,
      text: 'Social Science',
    },
    {
      id: 2,
      text: 'Accounting',
    },
    {
      id: 3,
      text: 'Engineering',
    },
    {
      id: 4,
      text: 'Pharmacy',
    },
    {
      id: 5,
      text: 'Doctors',
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
          <div className='md:w-[5%] h-[7px] w-[15%] bg-red-600 rounded-full'></div>
          <p className='text-sm mt-3 font-judson'>
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
          <div className='md:w-[5%] h-[7px] w-[15%] bg-red-600 rounded-full'></div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 my-9 mx-5 gap-10'>
            {HelpCards.map((carddata) => {
              return (
                <div
                  className='card px-6 h-72 pt-20 border-[1.5px] rounded-2xl bg-text-color opacity-75 border-black'
                  key={carddata.id}
                >
                  <h1 className='text-xl font-bold'>{carddata.title}</h1>
                  <p className='text-sm mt-4'>{carddata.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='mt-10 font-roboto'>
          <h2 className='text-3xl'>Popular courses among Pakistani students</h2>
          <div className='md:w-[5%] h-[7px] w-[15%] bg-red-600 rounded-full'></div>
          <div className='flex flex-wrap justify-center items-center md:gap-x-72 gap-7 lg:gap-y-16 md:gap-y-12 my-9 md:mx-20 mx-0'>
            {Buttons.map((btn) => (
              <button
                className='px-6 py-3 bg-content-bg border border-black text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200'
                key={btn.id}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default International;
