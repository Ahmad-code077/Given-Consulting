const reviewsData = [
  {
    id: 1,
    title: 'Number of Trusted Clients',
    desc: '2000+',
  },
  {
    id: 2,
    title: 'Established Years',
    desc: '5+ Years',
  },
  {
    id: 3,
    title: 'Rating',
    desc: '4.5',
  },
];

const Reviews = () => {
  return (
    <section className='bg-[#2A2047] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 p-6 mt-12 '>
      {reviewsData?.map((item) => {
        return (
          <div
            key={item?.id}
            className='flex items-center py-4  gap-y-8 flex-col font-roboto shadow-2xl'
          >
            <h1 className=' text-text-color font-medium'>{item.title}</h1>
            <h1 className='text-[#E1FF00] font-semibold text-2xl'>
              {item.desc}
            </h1>
          </div>
        );
      })}
    </section>
  );
};
export default Reviews;
