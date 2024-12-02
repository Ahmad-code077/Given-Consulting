import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Footer, Navbar } from './component';
import {
  Consultancy,
  Home,
  HumanResources,
  PageNotFound,
  Services,
  ImprotExport,
  Login,
  SignUp,
} from './pages';

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <Services /> },
      { path: '/consultancy', element: <Consultancy /> },
      { path: '/human-resources', element: <HumanResources /> },
      { path: '/import-export', element: <ImprotExport /> },
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
