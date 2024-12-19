import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Footer, Navbar } from './component';
import {
  Home,
  HumanResources,
  PageNotFound,
  ImprotExport,
  Login,
  SignUp,
  International,
  RecruitmentComp,
  Consulting,
} from './pages';
import VerifySignupOtp from './pages/verifySignupOTP';
import { useMyProfileQuery } from './Redux/userRoutes/userApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from './Redux/userRoutes/userSlice';
// import ServiceDetail from './pages/ServiceDetail';

const MainLayout = () => (
  <div className='px-4 lg:mx-auto lg:max-w-7xl'>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/international', element: <International /> },
      { path: '/consultancy', element: <Consulting /> },
      { path: '/human-resources', element: <HumanResources /> },
      { path: '/import-export', element: <ImprotExport /> },
      { path: '/recruitment-comp', element: <RecruitmentComp /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path:'/verify-signup-otp',
    element:<VerifySignupOtp />
  }
]);
function App() {
  const dispatch = useDispatch();
  const {data:profile} = useMyProfileQuery();
  useEffect(()=>{
    dispatch(setProfile(profile?.user))
    // console.log("app user data---------",profile?.user)
  },[profile,dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
