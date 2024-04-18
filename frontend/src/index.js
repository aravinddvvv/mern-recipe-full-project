import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom';
import Home from './Page/Home';
import Menu from './Page/Menu';
import About from './Page/About';
import Contact from './Page/Contact';
import Login from './Page/Login';
import Addrecipes from './Page/Addrecipes';
import Signup from './Page/Signup';
import { store } from './redux/index';
import { Provider } from 'react-redux'  ;
import Cart from './Page/Cart';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      {/* <Route path="menu" element={<Menu />} /> */}
      <Route path="menu/:filterby" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="addrecipes" element={<Addrecipes/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="Cart" element={<Cart/>} />
      
      
      </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <RouterProvider router ={router}/>
 </Provider>
);


