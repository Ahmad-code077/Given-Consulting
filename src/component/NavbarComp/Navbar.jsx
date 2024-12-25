import { useState } from 'react';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';
import BorderButton, { FilledButton } from '../ButtonComponents/BorderButton';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../../Redux/userRoutes/userApi';
import { toast } from 'react-toastify';
import { clearProfile } from '../../Redux/userRoutes/userSlice';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { profile } = useSelector((state) => state.user);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await logout();
      setIsDropdownOpen(false);
      dispatch(clearProfile());
      toast.success(res?.message || 'Logout successful', { position: 'top-center' });
    } catch (error) {
      toast.error(error?.data?.message || 'Logout failed', { position: 'top-center' });
    }
  };

  const profileInitial = profile?.name ? profile.name.charAt(0).toUpperCase() : '';
  const profilePic = profile?.profilePic.url;

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between py-3 text-black">
      {/* Logo */}
      <div className="text-lg font-bold w-16 h-16 sm:w-20 sm:h-20 cursor-pointer" onClick={()=>window.location.href="/"}>
        <img style={{mixBlendMode:'color-burn'}} src={logo} alt="logo" className="w-full h-full object-cover" />
      </div>

      {/* Hamburger and Profile Icon */}
      <div className="flex items-center space-x-4 lg:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="block text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
        {profile && (
          <div className="relative">
            <div
              className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold cursor-pointer"
              onClick={handleProfileClick}
            >
              {profilePic ? (
                <img src={profilePic} alt="profile" className="w-full h-full object-cover rounded-full" />
              ) : (
                profileInitial
              )}
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-32 text-sm z-20">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Desktop Links */}
      <main className="hidden lg:flex items-center justify-between space-x-8 bg-[#9d9d9d]/30 px-12 py-6 w-[90%] rounded-3xl">
        {navList.map((item) => (
          <div key={item.id} className="relative group">
            <Link to={item.link} className="text-sm lg:text-xl font-medium">
              {item.title}
            </Link>
            {item.dropDownList && (
              <div className="absolute left-0 top-5 hidden group-hover:block mt-2 rounded shadow-lg w-max z-20 bg-white">
                {item.dropDownList.map((dropItem) => (
                  <Link
                    key={dropItem.id}
                    to={dropItem.link}
                    className="block px-4 py-2 text-md font-semibold hover:bg-btn-yellow rounded"
                  >
                    {dropItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Profile Section */}
        <div className="relative md:flex md:space-x-4 md:items-center">
          {profile ? (
            <div
              className="w-10 h-10 cursor-pointer rounded-full bg-blue-500 text-white flex items-center justify-center font-bold"
              onClick={handleProfileClick}
            >
              {profilePic ? (
                <img src={profilePic} alt="profile" className="w-full h-full object-cover rounded-full" />
              ) : (
                profileInitial
              )}
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
          {isDropdownOpen && (
            <div className="absolute right-0 mt-32 bg-white shadow-lg rounded-lg w-36 text-sm sm:text-[16px] z-20">
              <Link
                to="/profile"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-2 text-left w-full hover:bg-gray-100 rounded-lg"
              >
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-left w-full hover:bg-gray-100 rounded-lg"
              >
                Logout
              </button>
            </div>
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
          {navList.map((item) => (
            <div key={item.id} className="relative group">
              <Link to={item.link} className="block font-medium py-2">
                {item.title}
              </Link>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
