import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import AddService from '../pages/AddService/AddService';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Reviews from '../pages/Reviews/Reviews';
import Service from '../pages/Service/Service';
import Services from '../pages/Services/Services';
import Update from '../pages/Update/Update';
import PrivateRoute from '../routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: () => fetch(` https://pixel-server-itarek99.vercel.app/services?size=3`),
        element: <Home />,
      },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/services', element: <Services /> },
      {
        path: '/services/:id',
        loader: ({ params }) => fetch(` https://pixel-server-itarek99.vercel.app/services/${params.id}`),
        element: <Service />,
      },
      {
        path: '/reviews',
        element: (
          <PrivateRoute>
            <Reviews />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-service',
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:id',
        loader: ({ params }) => fetch(` https://pixel-server-itarek99.vercel.app/review/${params.id}`),
        element: <Update />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);

export default router;
