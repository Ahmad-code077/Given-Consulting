import { useState } from 'react';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';
import BorderButton, { FilledButton } from '../ButtonComponents/BorderButton';
import { useSelector } from 'react-redux';

const navList = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Services',
    link: '#',
    dropDownList: [
      { id: 78, title: 'International', link: '/international' },
      { id: 79, title: 'IT Services', link: '/it' },
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

  // const {profile} = useSelector((state)=>state.user)
  // console.log('redux profile',profile)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { profile } = useSelector((state) => state.user); // Fetch profile from Redux state
  console.log("profile data.......",profile)

  // Ensure that the profile object exists before trying to access its properties
  const profileInitial = profile?.name ? profile.name.charAt(0).toUpperCase() : '';

  return (
    <nav className="flex items-center justify-between py-3 text-black">
      {/* Logo */}
      <div className="text-lg font-bold w-16 h-16 sm:w-20 sm:h-20">
        <img src={logo} alt="logo" className="w-full h-full object-cover" />
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="block lg:hidden text-2xl focus:outline-none"
      >
        <FaBars />
      </button>

      {/* Desktop Links */}
      <main className="hidden lg:flex items-center justify-between space-x-8 bg-[#9d9d9d]/30 px-12 py-6 w-[90%] rounded-3xl">
        {navList?.map((item) => (
          <div key={item.id} className="relative group">
            <Link to={item.link} className="text-sm lg:text-xl font-medium">
              {item.title}
            </Link>
            {/* Dropdown for Services */}
            {item.dropDownList && (
              <div className="absolute left-0 top-5 hidden group-hover:block mt-2 shadow-lg w-max z-20 bg-white">
                {item.dropDownList.map((dropItem) => (
                  <Link
                    key={dropItem.id}
                    to={dropItem.link}
                    className="block px-4 py-2 text-sm hover:bg-btn-yellow"
                  >
                    {dropItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Conditional Profile/Logout or Login/Signup */}
        <div className="hidden lg:flex space-x-4">
          {profile ? (
            <div className="w-10 h-10 cursor-pointer rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              {profileInitial}
            </div>
          ) : (
            <>
              <Link to={'/login'}>
                <BorderButton text={'Login'} color={'black'} />
              </Link>
              <Link to={'/signup'}>
                <FilledButton text={'Signup'} />
              </Link>
            </>
          )}
        </div>
      </main>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-white text-black shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="text-lg font-bold w-12 h-12">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-2xl focus:outline-none"
          >
            <GiCrossMark />
          </button>
        </div>
        <div className="flex flex-col space-y-4 px-4">
          {navList?.map((item) => (
            <div key={item.id} className="relative group">
              <Link to={item.link} className="block font-medium py-2">
                {item.title}
              </Link>
              {/* Sidebar dropdown */}
              {item.dropDownList && (
                <div className="pl-4">
                  {item.dropDownList.map((dropItem) => (
                    <Link
                      key={dropItem.id}
                      to={dropItem.link}
                      className="block text-sm py-1"
                    >
                      {dropItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {profile ? (
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              {profileInitial}
            </div>
          ) : (
            <>
              <Link to={'/login'} className="block w-full">
                <BorderButton text={'Login'} color={'black'} />
              </Link>

              <Link to={'/signup'} className="block w-full">
                <FilledButton text={'Signup'} />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
