import React, { useState } from 'react'
import cook from '../Assets/about.gif'
import verify from '../Assets/verified-unscreen.gif';
import Contact from './Contact';

const About = () => {
  const [showThanks, setShowThanks] = useState(false);
  const handleSubscribe = () =>{
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 5000);

  }
  return (
   <>
   <div className='p-2 md:p-4'>
   <div className='md:flex gap-4 py-3'>

<div className='md:w-1/2'>
  
  <h2 className='text-6xl font-bold md:text-5xl '>Welcome to <span className='text-red-500'>Recipes</span> , your ultimate destination for culinary inspiration and community-driven recipe sharing.</h2>
  <p className='py-4 text text-bold'>we believe that cooking is not just about creating meals; it's about fostering connections, sharing stories, and celebrating cultures through the universal language of food.<br/>Our platform is designed to bring together food enthusiasts, home cooks, and professional chefs from around the globe. Whether you're a seasoned chef looking to showcase your signature dishes, a passionate home cook eager to explore new recipes, or someone simply seeking culinary inspiration, you'll find a vibrant community of like-minded individuals here.<br/>We celebrate the rich tapestry of global cuisines, offering a diverse array of recipes spanning continents and cultures. From comforting classics to innovative creations, our recipe database is constantly growing, curated by our passionate community members. </p>
  <button onClick={handleSubscribe} className='font-bold bg-red-600 text-slate-200 px-4 py-2 rounded-md'>Subscribe</button>
</div>
{showThanks && (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-0">
    <div className="bg-white p-5 rounded-md">
      <img src={verify} className="mx-auto mb-4" alt="verified"/>
      <h2 className="text-2xl font-bold mb-4 items-center justify-center">Thank You for Subscribing!</h2>
      <p className="text-lg items-center justify-center">We're excited to have you join our community.</p>
    </div>
  </div>
)}

<div className='w-1/2 flex justify-end'>
  <img src={cook} className='max-w-full h-auto rounded-md' alt='food' />
</div>
</div>
</div>
<Contact/>
   
   
   
   
   
   
   
   </>
  )
}

export default About