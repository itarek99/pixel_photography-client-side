import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
  const { registerUserWithEmailAndPassWord, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    registerUserWithEmailAndPassWord(email, password)
      .then(() => {
        updateUserProfile({ displayName, photoURL })
          .then(() => {})
          .catch((err) => console.error(err));
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='container h-screen mx-auto px-2'>
      <div className='flex items-center justify-center h-full '>
        <div className='card w-full max-w-md mx-auto shadow-2xl bg-base-100 -mt-20'>
          <form onSubmit={handleRegister} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input type='text' placeholder='name' name='name' className='input input-bordered' required />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input type='email' placeholder='email' name='email' className='input input-bordered' required />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo URL</span>
              </label>
              <input type='text' placeholder='photo url' name='photo' className='input input-bordered' required />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input type='password' placeholder='password' name='password' className='input input-bordered' required />
              <label className='label'>
                <Link to='/login' className='label-text-alt link link-hover'>
                  already have an account?
                </Link>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
