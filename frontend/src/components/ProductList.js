import React from 'react';
import CardFeature from '../components/CardFeature';

const ProductList = () => {
  const products = [
    { image: '', name: 'Product 1', category: 'Category 1' },
    { image: 'path/to/image2.jpg', name: 'Product 2', category: 'Category 2' },
    // Add more products as needed
  ];

  return (
    <div className='flex justify-center gap-4'>
      {products.map((product, index) => (
        <CardFeature key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
