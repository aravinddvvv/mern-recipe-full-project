import React from 'react';
import logo from '../Assets/logoss.png';
import './Header.css';
import { Link} from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import { toast } from 'react-hot-toast';


const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData.email);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = (e) => {
    dispatch(logoutRedux());
    toast.success('Logout Successfully', {});
    window.location.href = '/';
  };
  console.log(process.env.REACT_APP_ADMIN_EMAIL);

  const cartItemNumber = useSelector((state)=>state.product.cartItem)

  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      <div className='flex items-center h-full justify-between'>
        <Link to={''}>
          <div className='h-12'>
            <img src={logo} className='h-full' alt='Logo' />
          </div>
        </Link>
        <div className='flex items-center gap-5 md:gap-7  text-bold'>
          <nav className='gap-5 md:gap-7 text-bold md:text-lg hidden md:flex'>
            <Link to={''}>Home</Link>
            <Link to={'menu/6616c80c820c99110690d49e'}>Recipes</Link>
            <Link to={'about'}>About Us</Link>
       
          </nav>
          <div className='text-2xl relative'>
           <Link to={"cart"}> <FaHeart />
            <div className='absolute -top-1 -right-2 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>{cartItemNumber.length}</div></Link>
          </div>
          <div className='text-xl' onClick={handleShowMenu}>
            <div className='text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop'>
              {userData.image ? <img src={userData.image} className='h-full w-full' alt='User Profile' /> : <HiOutlineUserCircle />}
            </div>
            {showMenu && (
              <div className='absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center'>
                {
                  userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={'addrecipes'} className='whitespace-nowrap cursor-pointer px-2'>Add Recipes</Link>
                }
                
                
                {userData.image ? 
                  <p className='cursor-pointer text-white px-2 bg-red-500' onClick={handleLogout}>Logout ({userData.firstName})</p>
                 : 
                  <Link to={'login'} className='whitespace-nowrap cursor-pointer  px-2'>Login</Link>
                }

<nav className=' text-bold md:text-lg flex flex-col md:hidden'>
            <Link to={''} className='px-2 py-1'>Home</Link>
            <Link to={'menu/6616c80c820c99110690d49e'} className='px-2 py-1'>Recipes</Link>
            <Link to={'about'} className='px-2 py-1'>About Us</Link>
            
          </nav>








              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
