import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import { toast } from 'react-hot-toast';


const Addrecipes = () => {
  const [data,setData] = useState({
    name:"",
    category: "",
    image: "",
    ingridents:"",
    recipe:""

  })

  const handleOnchange = (e)=>{
    const {name,value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]: value
      }

    })

  }





  const uploadImage = async (e)=>{
    const data = await ImagetoBase64(e.target.files[0])
        // console.log(data);
        setData((preve)=>{
          return{
            ...preve,
            image : data
          }

        })

  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(data)

    const {name,image,category,ingridents,recipe}=data
    if(name &&  image &&  category  &&  ingridents  &&    recipe){

      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
        method : "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const fetchRes = await fetchData.json()
      console.log(fetchRes)
      toast(fetchRes.message)
      setData(()=>{
        return{
          name:"",
    category: "",
    image: "",
    ingridents:"",
    recipe:""


        }
      })
    }
    else{
      toast("Enter Required Fields")
    }


 
  }




  return (
    <div className="p-3">
      <form className='m-auto w-full max-w-md  shadow flex flex-col p-1 bg-white' onSubmit={handleSubmit}>
       
        <label htmlFor="name">Name </label>
        <input type={"text"} name='name' className='bg-slate-300 rounded p-1 my-1' onChange={handleOnchange} value={data.name} />
        <label htmlFor='category'>Category</label>
        <select className='bg-slate-300 rounded p-1 my-1 p-1' id='category' name='category' onChange={handleOnchange} value={data.category}>
          <option>Salads</option>
          <option>Cakes</option>
          <option>Rolls</option>
          <option>Deserts</option>
          <option>Sandwich</option>
          <option>Vegan</option>
          <option>Pasta</option>
          <option>Noodles</option>
          <option>Chicken</option>
          <option>Beef</option>
          <option>Seafood</option>
        </select>
        <label htmlFor='image'>Image
        <div className='h-40 w-full bg-slate-300 rounded flex items-center  justify-center cursor-pointer'>

          {
            data.image ?  <img src={data.image} className='h-full'/> :  <span className='text-7xl'><IoCloudUploadOutline /></span>
          }



         
         
          <input type={"file"} accept='image/*' id='image' onChange={uploadImage} className='hidden'/>
        </div></label>

        <label className='my-1' htmlFor='ingridents'>Ingridents</label>
        <textarea rows={2} name='ingridents'  className='rounded text-sm  bg-slate-300 my-1 p-1 resize-none'   onChange={handleOnchange} value={data.ingridents}></textarea>

        <label className='my-1' htmlFor='recipe'>Add your recipe</label>
        <textarea rows={2}className='bg-slate-300 rounded text-sm  p-1 my-1 resize-none' name='recipe'  onChange={handleOnchange} value={data.recipe}></textarea>

        <button className='bg-red-500 hover:bg-blue-500 rounded text-white text-lg font-medium my-4 drop-shadow'>UPLOAD</button>


        








      </form>
    </div>
  )
}

export default Addrecipes