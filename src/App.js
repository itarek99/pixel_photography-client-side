import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Service from './pages/Service/Service';
import Services from './pages/Services/Services';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', loader: () => fetch(`http://localhost:5000/services?size=3`), element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/services', loader: () => fetch(`http://localhost:5000/services`), element: <Services /> },
        {
          path: '/services/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
          element: <Service />,
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
