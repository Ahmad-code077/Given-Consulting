import uk from '../assets/ServicePictures/UK.png';
import us from '../assets/ServicePictures/US.png';
import Austra from '../assets/ServicePictures/Australia.png';
import cana from '../assets/ServicePictures/Canada.png';
import ireland from '../assets/ServicePictures/Ireland.png';
import newzea from '../assets/ServicePictures/New zealand.png';

const Services = () => {
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
      title: 'Fast-Track your Study Dreams ',
      desc: 'Easily check your eligibility with IDP FastLane before applying for your course.',
    },
    {
      id: 2,
      title: 'Fast-Track your Study Dreams ',
      desc: 'Easily check your eligibility with IDP FastLane before applying for your course.',
    },
    {
      id: 3,
      title: 'Fast-Track your Study Dreams ',
      desc: 'Easily check your eligibility with IDP FastLane before applying for your course.',
    },
    {
      id: 4,
      title: 'Fast-Track your Study Dreams ',
      desc: 'Easily check your eligibility with IDP FastLane before applying for your course.',
    },
    {
      id: 5,
      title: 'Fast-Track your Study Dreams ',
      desc: 'Easily check your eligibility with IDP FastLane before applying for your course.',
    },
    {
      id: 6,
      title: 'Fast-Track your Study Dreams ',
      desc: 'Easily check your eligibility with IDP FastLane before applying for your course.',
    },
  ];

  return (
    <div className='main-par bg-bodyColor'>
      <div className='mt-8'>
        <h2 className='text-3xl font-roboto'>
          Your Dream Study Destination Awaits
        </h2>
        <div className='w-[5%] h-[7px] bg-red-600 rounded-full'></div>
        <p className='text-sm mt-3 font-judson'>
          Begin an exciting academic journey in these varied and welcoming study
          locations!
        </p>
      </div>

      <div className='grid grid-cols-3 gap-10 my-8 mx-5'>
        {CountryCards.map((data) => {
          return (
            <div className='relative' key={data.id}>
              <img src={data.img} alt='' />
              <div className='absolute bottom-5 left-1/2 -translate-x-1/2 text-lg font-semibold text-text-color font-roboto'>
                {data.title}
              </div>
            </div>
          );
        })}
      </div>
      <div className='mt-8'>
        <h2 className='text-3xl font-roboto'>How We can help you?</h2>
        <div className='w-[5%] h-[7px] bg-red-600 rounded-full'></div>
        {}
      </div>
    </div>
  );
};
export default Services;
