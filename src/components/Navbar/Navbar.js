import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const navItems = (
    <>
      {user?.uid ? (
        <>
          <li>
            <Link to={'/'}>My Reviews</Link>
          </li>
          <li>
            <Link to={'/'}>Add Service</Link>
          </li>
        </>
      ) : null}
    </>
  );

  const handleLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className='container mx-auto'>
      <div className='navbar py-4'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItems}
            </ul>
          </div>
          <Link to='/' className='normal-case text-2xl font-bold'>
            PIXEL
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>{navItems}</ul>
        </div>
        <div className='navbar-end'>
          {user?.uid ? (
            <button onClick={handleLogOut} type='submit' className='btn btn-error'>
              Log Out
            </button>
          ) : (
            <Link to='/login' className='btn'>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
