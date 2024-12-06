import image1 from '../../assets/HomePageServices/firstImg.png';
import image2 from '../../assets/HomePageServices/secondImg.png';
import image3 from '../../assets/HomePageServices/thirdImg.png';
import image4 from '../../assets/HomePageServices/fourthImg.png';
import image5 from '../../assets/HomePageServices/fifthImg.png';
import { useNavigate } from 'react-router-dom';
const ourServices = [
  {
    id: 1,
    image: image1,
    title: 'Travelling',
  },
  {
    id: 2,
    image: image2,
    title: 'Employment',
  },
  {
    id: 3,
    image: image3,
    title: 'IT Services',
  },
  {
    id: 4,
    image: image4,
    title: 'Consultant',
  },
  {
    id: 5,
    image: image5,
    title: 'Import & Export',
  },
];

const Services = () => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <section className='bg-gradient-to-b from-white to-[#A5B5DD] '>
      <h1 className='font-judson text-4xl text-center my-12'>Our Services</h1>
      <main className='flex flex-wrap items-center justify-evenly  '>
        {ourServices?.map((item) => {
          return (
            <div
              key={item?.id}
              className='md:mb-12 cursor-pointer'
              onClick={() => handleCardClick(item.id)}
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
