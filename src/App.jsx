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
  Consulting,
} from './pages';
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
      // { path: '/service/:id', element: <ServiceDetail /> },
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
