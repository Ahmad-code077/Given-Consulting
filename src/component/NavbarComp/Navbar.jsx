import { useState } from 'react';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';
import BorderButton, { FilledButton } from '../ButtonComponents/BorderButton';
const navList = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Services',
    link: '/services',
    dropDownList: [
      { id: 78, title: 'Travelling', link: '/service/1' },
      { id: 79, title: 'Employement', link: '/service/2' },
      { id: 80, title: 'IT Services', link: '/service/3' },
    ],
  },
  {
    id: 3,
    title: 'Consultancy',
    link: '/consultancy',
  },
  {
    id: 4,
    title: 'Human Resource',
    link: '/human-resources',
  },
  {
    id: 5,
    title: 'Import & Export',
    link: '/import-export',
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className=' flex items-center justify-between   py-3 text-black '>
      {/* Logo */}
      <div className='text-lg font-bold w-16 h-16 sm:w-20 sm:h-20 '>
        <img src={logo} alt='logo' className='w-full h-full object-cover' />
      </div>
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className='block lg:hidden text-2xl focus:outline-none'
      >
        <FaBars />
      </button>
      {/* Desktop Links */}
      <main className='hidden lg:flex items-center justify-between space-x-8 bg-[#9d9d9d]/30 px-12 py-6 w-[90%] rounded-3xl'>
        {/* make the glass morphisim effect here  */}
        {navList?.map((item) => (
          <div key={item.id} className='relative group'>
            <Link to={item?.link} className='text-sm lg:text-xl font-medium '>
              {item.title}
            </Link>
            {item.dropDownList && (
              <div className='absolute left-0 top-5 hidden mt-2  shadow-lg group-hover:block w-max z-20 bg-white'>
                {item.dropDownList.map((dropItem) => (
                  <Link
                    key={dropItem.id}
                    to={dropItem.link}
                    className='block px-4 py-2 text-sm hover:bg-btn-yellow'
                  >
                    {dropItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className='hidden lg:flex space-x-4'>
          <Link to={'/login'}>
            <BorderButton text={'Login'} color={'black'} />
          </Link>
          <Link to={'/signup'}>
            <FilledButton text={'Signup'} />
          </Link>
        </div>
      </main>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50  bg-white text-black shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className='flex items-center justify-between p-4'>
          <div className='text-lg font-bold w-12 h-12  '>
            <img src={logo} alt='logo' className='w-full h-full object-cover' />
          </div>{' '}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className='text-2xl focus:outline-none'
          >
            <GiCrossMark />
          </button>
        </div>
        <div className='flex flex-col space-y-4 px-4'>
          {navList?.map((item) => (
            <div key={item.id} className='relative group'>
              <Link to={item.link} className='block  font-medium py-2 '>
                {item.title}
              </Link>
              {item.dropDownList && (
                <div className='pl-4'>
                  {item.dropDownList.map((dropItem) => (
                    <Link
                      key={dropItem.id}
                      href={dropItem.link}
                      to={dropItem?.link}
                      className='block text-sm py-1 '
                    >
                      {dropItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to={'/login'} className='block w-full '>
            <BorderButton text={'Login'} color={'black'} />
          </Link>

          <Link to={'/signup'} className='block w-full '>
            <FilledButton text={'Signup'} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
