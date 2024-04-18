import React from 'react'
import signup from '../Assets/signup.gif'
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import toast from 'react-hot-toast';





const Signup = () => {
    const navigate=useNavigate()
    const [showPassword, setShowpassword] = useState(false)

    const [showConfirmPassword, setShowConfirmpassword] = useState(false)

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: ""
    });
    console.log(data);

    const handleShowpassword = () => {
        setShowpassword(prev => !prev)
    }

    const handleconfirmShowpassword = () => {
        setShowConfirmpassword(prev => !prev)
    }
    const handleOnchange = (e) =>{
        const {name,value}=e.target
        setData((prev)=>{
            return{
                ...prev,
                [name]:value

            };
        });


    };
    const handleUploadProfileImage=async(e)=>{
        
        const data = await ImagetoBase64(e.target.files[0])
        console.log(data);
        setData((prev)=>{
            return{
                ...prev,
                image:data
            }
        })

    }

    console.log(process.env.REACT_APP_SERVER_DOMIN);

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {firstName,email,password,confirmPassword}=data
        if(firstName && email &&  password && confirmPassword){
            if(password===confirmPassword){
                const fetchData =await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                })
                const dataRes = await fetchData.json()
                console.log(dataRes)
                // alert(dataRes.message)
                toast(dataRes.message)
                if(dataRes.alert){
                    navigate("/login")

                }



               
        }
        else{
            alert( "Passwords do not match.")
        }
    }
    else{
        alert("Please fill out all fields")
    }}










    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded'>

                <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative '>
                    <img src={data.image ? data.image :signup} className='w-full h-full' />
                    <label htmlFor='profileImage'>
                    <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>
                        <p className='text-sm text-white p-1'>Upload</p>
                    </div>
                    <input type={"file"} id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage}/>
                    </label>
                </div>
                <form className='py-2 w-full flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor='firstName'>First Name</label>
                    <input type={"text"} id='firstName' name='firstName' className=' mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded focus-within:outline-orange-300' required value={data.firstName} onChange={handleOnchange} />

                    <label htmlFor='lastName'>Last Name</label>
                    <input type={"text"} id='lastName' name='lastName' p className=' mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded focus-within:outline-orange-300' required value={data.lastName} onChange={handleOnchange} />

                    <label htmlFor='email'>Email</label>
                    <input type={"email"} id='email' name='email' p className=' mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded focus-within:outline-orange-300' required value={data.email} onChange={handleOnchange} />

                    <label htmlFor='password'>Password</label>
                    <div className='flex px-1 py-1 bg-slate-200  rounded  mt-1 mb-2  focus-within:outline focus-within:outline-orange-300'>
                        <input type={showPassword ? "text" : "password"} id='password' name='password' p className=' w-full bg-slate-200 border-none outline-none' required value={data.password} onChange={handleOnchange} />
                        <span className='flex text-xl cursor-pointer' onClick={handleShowpassword}>{showPassword ? <BiShow /> : <BiSolidHide />}</span>
                    </div>

                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <div className='flex px-1 py-1 bg-slate-200  rounded  mt-1 mb-2 focus-within:outline  focus-within:outline-orange-300'>
                        <input type={showConfirmPassword ? "text" : "password"} id='confirmPassword' name='confirmPassword' p className=' w-full bg-slate-200 border-none outline-none' required value={data.confirmPassword} onChange={handleOnchange} />
                        <span className='flex text-xl cursor-pointer' onClick={handleconfirmShowpassword}>{showConfirmPassword ? <BiShow /> : <BiSolidHide />}</span>
                    </div>
                    <button  className='w-full max-w-[120px] m-auto bg-orange-500 hover:bg-green-600 cursor-pointer text-xl text-white font-medium text-center py-1 rounded-full mt-4'>Sign up</button>
                </form>
                <p className='mt-2'>Already have account ? <Link to={"/login"} className='text-blue-500'>Login</Link></p>







            </div>
        </div>
    )
}

export default Signup