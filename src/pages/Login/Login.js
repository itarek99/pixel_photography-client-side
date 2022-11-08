import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
  const { logInWithEmailAndPassword, loginWithProvider } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithEmailAndPassword(email, password)
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    loginWithProvider(googleProvider)
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='container h-[88vh] mx-auto px-2'>
      <div className='flex items-center justify-center h-full '>
        <div className='card w-full max-w-md mx-auto shadow-2xl bg-neutral -mt-16'>
          <form onSubmit={handleLogin} className='card-body pb-4'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input type='text' placeholder='email' name='email' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input type='password' placeholder='password' name='password' className='input input-bordered' />
              <label className='label'>
                <Link to='/register' className='label-text-alt link link-hover'>
                  don't have an account?
                </Link>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
            </div>
          </form>
          <div className='px-8 mb-6'>
            <p className='text-center mb-4'>OR</p>
            <button onClick={handleGoogleLogin} className='btn btn-secondary w-full'>
              <FaGoogle /> &nbsp; Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
