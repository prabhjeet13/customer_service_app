import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import {useSelector} from 'react-redux';
import axios from 'axios';
const Form = () => {

  const [cat,setcat] = useState([]);
  const {user,token} = useSelector((state) => state.profile);

  useEffect(() => {
      // get categories
      const fetch = async () => {
          const toastid = toast.loading('loading....');
          try {

            // const response = await axios.get('http://localhost:4000/api/v1/user/get-categories');
            const response = await axios.get('https://customer-service-app-z8n9.onrender.com/api/v1/user/get-categories');
            if(!response.data.success)
            {
              throw new Error('not able to do');
            }else {
              setcat(response.data.categories);
              toast.success('categories fetch');
            }
          }catch(e)
          {
             toast.error('server down');
          }
          toast.dismiss(toastid);
      }
      fetch();
  },[]);

  const [formData,setFormData] = useState({
      category : '',
      additionalComments : '',
      userId : user?._id
   })

   
  if(!user || !token)
    {
        return (<div>loading.....</div>)
    }

  const submitHandler = async (e) => {
      e.preventDefault(); 

      if(!formData.userId || !formData.additionalComments || !formData.category)
      {
         return toast.error('give all details');
      }
      const categoryFind = cat.find((c) => c.name === formData.category);
      formData.category = categoryFind._id;
      // console.log(formData);
      const toastid = toast.loading('loading....');
      try {
        // const response = await axios.post('http://localhost:4000/api/v1/user/add-request',formData);
        const response = await axios.post('https://customer-service-app-z8n9.onrender.com/api/v1/user/add-request',formData);
        if(!response.data.success)
        {
          throw new Error('not able to do');
        }else {
          console.log(response);
          toast.success('request submitted');
        }
      }catch(e)
      {
         toast.error('server down');
      }
      toast.dismiss(toastid);
  }

  const changeHandler = (e) => {
       setFormData((prev) => ({
          ...prev,
          [e.target.name] : e.target.value,
       }))
  }


  return (
    <div className='w-11/12 border-2 border-blue-900 bg-purple-500 m-1 p-3'>
        <form onSubmit={submitHandler} className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
              <label className='font-bold text-lg font-mono'>Select a Category for Request: </label>
              <select onChange={changeHandler} className='p-1 m-2' id = 'category' name = 'category' value = {formData.category}>
              <option>select any category ... </option>
              {
                 cat && cat.length > 0 && (cat.map((c,index) => 
                  { 
                    return (<option className='text-black'>{c.name}</option>)
                  }))
              }
              </select>
          </div>
          <div className='flex-col flex gap-2'>
              <label className='font-bold text-lg font-mono'>Comments:</label>
              <textarea rows={5} cols = {5} onChange={changeHandler} className='text-black p-1' placeholder='Comments...' id = 'additionalComments' name = 'additionalComments' value = {formData.additionalComments} required/>
          </div>
          <button type = 'submit' className='rounded-md transition-all duration-200 hover:scale-90 font-bold text-xl bg-green-400 w-fit p-1 m-1 mx-auto'>submit </button>
        </form>
    </div>
  )
}

export default Form