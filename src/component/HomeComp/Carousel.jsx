import { useState } from 'react';
import img from '../../assets/HomePictures/ShipHomePage.png';
import img2 from '../../assets/HomePictures/ShipSide.png';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import Button, { FilledButton } from '../ButtonComponents/BorderButton';

const Carousel = () => {
  // List of images for the carousel
  const images = [img, img2];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className='relative w-full h-[600px]'>
      {/* Image with overlay text */}
      <div className='relative w-full h-full'>
        <img
          src={images[currentIndex]}
          alt='carousel'
          className='w-full h-full object-cover rounded-md'
        />
        {/* Text Overlay */}
        <div className='absolute inset-0 flex items-center text-white  bg-black bg-opacity-50 justify-between font-roboto'>
          <main className='mx-4  max-w-96'>
            <h1 className=' text-5xl font-semibold leading-snug'>
              Most Affordable way to Ship Product{' '}
            </h1>
            <p className='text-lg font-semibold'>
              Keep it concise: A slogan should be short and simple, making it
              easier for people to remember
            </p>
            <div className='flex items-center justify-center gap-4 text-white'>
              <Button
                className='text-white hover:text-black'
                // this approach is not working to give the color to the button
                text={'Get Started'}
              />
              <FilledButton text={'Contact Us'} />
            </div>
          </main>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className='absolute bottom-6 right-4  flex gap-4'>
        <IoIosArrowDropleft
          size={'50px'}
          onClick={prevSlide}
          className='text-[#FFFFFF85]'
        />

        <IoIosArrowDropright
          size={'50px'}
          className='text-[#FFFFFF85]'
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;
