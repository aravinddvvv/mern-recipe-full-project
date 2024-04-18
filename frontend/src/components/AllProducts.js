import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux'




const AllProducts = ({heading}) => {
    const productData = useSelector((state) => state.product.productList);
    const categoryList = [...new Set(productData.map(el => el.category))]

      // recipes display chayannn

  const [filterby, setFilterBy] = useState("")
  const [dataFilter, setDataFilter] = useState([])

  useEffect(()=>{
    setDataFilter(productData)
  },[productData])

 

  const handleFilterProduct = (category)=>{
    const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
    setDataFilter(() => {
      return [
        ...filter
      ]
    })
  }





  
  return (
    <div className='my-5'>
    <h1 className='font-bold text-2xl py-3 mb-4'>{heading}
    </h1>
    <div className='flex gap-4 justify-center'>
      {
        categoryList[0] && categoryList.map(el => {
          return (
            <FilterProduct category={el}
            onClick={()=>handleFilterProduct(el)} />
          )
        })
      }


    </div>
    <div className='flex flex-wrap justify-center gap-5 my-6'>
      {
dataFilter.map(el=>{
return(
<CardFeature
key={el._id}
id={el._id}
image={el.image}
name={el.name}
category={el.category}/>
)
})
      }
    </div>





  </div>
  )
}

export default AllProducts