import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AllProducts from '../components/AllProducts';
import { addCartItem } from '../redux/productSlide';
import toast from 'react-hot-toast';

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector(state => state.product.productList);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  // Find the product by ID
  const productDisplay = productData.find(el => el._id === filterby);

  // Render nothing if productDisplay is not available
  if (!productDisplay) {
    return null;
  }

  const handleAddCartProducts = (e) => {
    if (!isAuthenticated) {
      toast.error('Please log in to add to favorites.');
      return;
    }
    dispatch(addCartItem(productDisplay))
    toast.success(`${productDisplay.name} added to favorites`);
  };

  

  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4xl bg-white mx-auto md:flex rounded shadow-lg'>
        <div className='w-full md:w-1/2'>
          <div className='aspect-w-20 aspect-h-20'>
            <img src={productDisplay.image} alt={productDisplay.name} className='object-cover w-full h-full rounded-l-md hover:scale-105 transition-all rounded' />
          </div>
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <h3 className='font-semibold text-slate-600 text-center capitalize text-2xl mb-4'>{productDisplay.name}</h3>
          <h5 className='font-semibold text-slate-600 text-center capitalize text-lg mb-4'>{productDisplay.category}</h5>
          {isAuthenticated && (
            <>
              <div>
                <h6 className='font-semibold text-slate-600 capitalize text-lg mb-2'>Ingredients</h6>
                <p className='py-2 text-base'>{productDisplay.ingridents}</p>
              </div>
              <div>
                <h6 className='font-semibold text-slate-600 capitalize text-lg mb-2'>Recipe</h6>
                <p className='py-2 text-base'>{productDisplay.recipe}</p>
              </div>
            </>
          )}
          <div className='flex justify-center mt-4'>
            <button onClick={handleAddCartProducts} className='bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full text-black text-xl font-medium'>Add to Favorites</button>
          </div>
        </div>
      </div>
      <AllProducts heading={"Related Recipes"} />
    </div>
  );
};

export default Menu;
