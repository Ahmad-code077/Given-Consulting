import React from 'react';
import { useParams } from 'react-router-dom';

const serviceDetails = {
  1: {
    title: 'Travelling',
    description:
      'We offer premium travel solutions including bookings, itineraries, and more.',
  },
  2: {
    title: 'Employment',
    description:
      'Our employment services help connect job seekers and employers efficiently.',
  },
  3: {
    title: 'IT Services',
    description:
      'Comprehensive IT solutions including development, maintenance, and support.',
  },
  4: {
    title: 'Consultant',
    description: 'Expert consulting services tailored to your business needs.',
  },
  5: {
    title: 'Import & Export',
    description:
      'Global import and export services to expand your business reach.',
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return <h1>Service not found!</h1>;
  }

  return (
    <section className='bg-gradient-to-b from-white to-[#A5B5DD] p-6'>
      <h1 className='font-judson text-4xl text-center my-12'>
        {service.title}
      </h1>
      <p className='font-roboto text-lg text-center'>{service.description}</p>
    </section>
  );
};

export default ServiceDetail;
