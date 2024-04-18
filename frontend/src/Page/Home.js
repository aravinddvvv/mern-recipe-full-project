import React, { useRef, useState } from 'react';
import cook from '../Assets/cookingg-unscreen.gif'
import CardFeature from '../components/CardFeature';
import { useSelector } from 'react-redux';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import AllProducts from '../components/AllProducts';
import verify from '../Assets/verified-unscreen.gif';
import Contact from './Contact';



const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const categoriesToInclude = ["Chicken", "Vegan", "Seafood", "Cakes  "];
  const homeProductCartListTop = productData.filter(el => categoriesToInclude.includes(el.category));
  console.log(homeProductCartListTop);
  const slideProductRef = useRef()
  const [showThanks, setShowThanks] = useState(false);
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 400

  }
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 400

  };
  const handleSubscribe = () =>{
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 3000);

  }





  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-3'>

        <div className='md:w-1/2'>
          <div className='flex gap-2 bg-yellow-200 w-33 px-2 items-center rounded-full'>
            <p className='text-sm font-medium'>Cooking Made Easy.. Recipes Made Exciting..Start Your Journey Here. Unleash Your Inner Chef..</p>
            <img src='https://cdn-icons-png.flaticon.com/512/843/843311.png' className='h-7' alt='chef hat' />
          </div><br />
          <h2 className='text-6xl font-bold md:text-6xl'>From Our Kitchen to Yours.. <br /> Discover  <span className='text-red-700'>Delicious Creations</span> </h2>
          <p className='py-4 text-base'>Welcome to our culinary haven, where every dish tells a story and every recipe is a masterpiece waiting to be shared. Embark on a gastronomic journey like no other as you explore our vibrant community of food enthusiasts, home cooks, and professional chefs. From timeless classics to bold innovations, our recipe-sharing website is a treasure trove of culinary delights, curated to tantalize your taste buds and ignite your passion for cooking. Join us as we celebrate the art of food and the joy of sharing, one recipe at a time. </p>
          <button onClick={handleSubscribe} className='font-bold bg-red-600 text-slate-200 px-4 py-2 rounded-md'>Subscribe</button>
        </div>

        <div className='w-1/2 flex justify-end'>
          <img src={cook} className='max-w-full h-auto rounded-md' alt='food' />
        </div>

      </div>
      {/* next */}

      <div className=''>
        <div className='flex w-full items-center'>
          <h1 className='font-bold text-2xl py-3 mb-4'>Top rated recipes
          </h1 >
          <div className='ml-auto flex gap-4'>
            <button onClick={preveProduct} className='bg-yellow-300 hover:bg-yellow-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextProduct} className='bg-yellow-300 hover:bg-yellow-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {
            homeProductCartListTop.map(el => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  image={el.image}
                />
              )
            })
          }

        </div>



      </div>

      {showThanks && (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-0">
    <div className="bg-white p-5 rounded-md">
      <img src={verify} className="mx-auto mb-4" alt="verified" /> {/* GIF inside the card */}
      <h2 className="text-2xl font-bold mb-4 items-center justify-center">Thank You for Subscribing!</h2>
      <p className="text-lg items-center justify-center">We're excited to have you join our community.</p>
    </div>
  </div>
)}

      {/* next section */}

   
<AllProducts heading={"What to cook  today?"}/>
















<Contact/>
    </div>
   


  );
};

export default Home;
