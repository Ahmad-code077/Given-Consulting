import image1 from '../../assets/HomePageServices/firstImg.png';
import image2 from '../../assets/HomePageServices/secondImg.png';
import image3 from '../../assets/HomePageServices/thirdImg.png';
import image4 from '../../assets/HomePageServices/fourthImg.png';
import image5 from '../../assets/HomePageServices/fifthImg.png';
import { useNavigate } from 'react-router-dom';
const ourServices = [
  {
    id: 1,
    link: 'travelling',
    image: image1,
    title: 'Travelling',
  },
  {
    id: 2,
    image: image2,
    link: 'employment',

    title: 'Employment',
  },
  {
    id: 3,
    image: image3,
    link: 'it',

    title: 'IT Services',
  },
  {
    id: 4,
    image: image4,
    title: 'Consultant',
    link: 'consultancy',
  },
  {
    id: 5,
    image: image5,
    title: 'Import & Export',
    link: 'import-export',
  },
];

const Services = () => {
  const navigate = useNavigate();
  const handleCardClick = (link) => {
    navigate(`/${link}`);
  };
  return (
    <section className='bg-gradient-to-b from-white to-[#A5B5DD] rounded'>
      <h1 className='font-judson text-4xl text-center my-12 pt-6'>Our Services</h1>
      <main className='flex flex-wrap items-center justify-evenly  '>
        {ourServices?.map((item) => {
          return (
            <div
              key={item?.id}
              className='md:mb-12 cursor-pointer'
              // onClick={() => handleCardClick(item.link)}
            >
              <div>
                <img src={item.image} alt='' className='w-full ' />
              </div>
              <h1 className='font-roboto text-center text-xl font-semibold '>
                {item?.title}
              </h1>
            </div>
          );
        })}
      </main>
    </section>
  );
};
export default Services;
