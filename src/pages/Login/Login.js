import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useDynamicTitle from '../../hooks/useDynamicTitle';

const Login = () => {
  const { logInWithEmailAndPassword, loginWithProvider } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  useDynamicTitle('Pixel - Login');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = { email: user.email };

        fetch(` https://pixel-server-itarek99.vercel.app/jwt`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem('genius-token', data.token);
          });

        navigate(from, { replace: true });
        toast.success('Login Successful!');
        setLoading(false);
        form.reset();
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
        console.error(err);
      });
  };

  const handleGoogleLogin = () => {
    loginWithProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        const currentUser = { email: user.email };

        fetch(` https://pixel-server-itarek99.vercel.app/jwt`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem('genius-token', data.token);
          });

        navigate(from, { replace: true });
        toast.success('Login Successful!');
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <div className='container h-[88vh] mx-auto px-2'>
      <div className='flex items-center justify-center h-full '>
        <div className='card w-full max-w-md mx-auto shadow-2xl bg-neutral -mt-16'>
          {loading ? <LoadingSpinner /> : null}
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
