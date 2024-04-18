import React from 'react';
import signup from '../Assets/signup.gif';
import { BiShow } from 'react-icons/bi';
import { BiSolidHide } from 'react-icons/bi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { loginRedux } from '../redux/userSlice';

const Login = () => {
  const [showPassword, setShowpassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleShowpassword = () => {
    setShowpassword((prev) => !prev);
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const dataRes = await fetchData.json();
      console.log(dataRes);
      toast(dataRes.message, {
        className: 'toast-green-background', 
      });

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } else {
      toast.error('Please fill out all fields');
    }
  };

  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded'>
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
          <img src={signup} className='w-full' alt='Signup' />
        </div>
        <form className='py-2 w-full flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' className=' mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded focus-within:outline-orange-300' required value={data.email} onChange={handleOnchange} />

          <label htmlFor='password'>Password</label>
          <div className='flex px-1 py-1 bg-slate-200  rounded  mt-1 mb-2  focus-within:outline focus-within:outline-orange-300'>
            <input type={showPassword ? 'text' : 'password'} id='password' name='password' className=' w-full bg-slate-200 border-none outline-none' required value={data.password} onChange={handleOnchange} />
            <span className='flex text-xl cursor-pointer' onClick={handleShowpassword}>
              {showPassword ? <BiShow /> : <BiSolidHide />}
            </span>
          </div>

          <button type='submit' className='w-full max-w-[120px] m-auto bg-orange-500 hover:bg-green-600 cursor-pointer text-xl text-white font-medium text-center py-1 rounded-full mt-4'>
            Login
          </button>
        </form>
        <p className='mt-2'>
          Don't have an account? <Link to={'/signup'} className='text-blue-500'>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
