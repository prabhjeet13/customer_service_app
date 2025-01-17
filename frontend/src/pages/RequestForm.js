import React , {useEffect} from 'react'
import Form from '../Components/Form'
import { useDispatch } from 'react-redux'
import { setToken, setUser } from '../slices/profileSlice';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
const RequestForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user,token,email} = useParams();

  useEffect(() => {
      if(user && token)
      {
              toast.success('login successfully');           
              console.log(user,token,email);
              localStorage.setItem('user',JSON.stringify({_id:user,email}));
              localStorage.setItem('token',JSON.stringify(token));
              dispatch(setUser({_id:user,email}));
              dispatch(setToken(token));
      }
  },[]);

  const logoutHandler = () => {
      dispatch(setToken(null));
      dispatch(setUser(null));
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      navigate('/');
  }
  
  return (
    <div className='max-w-[1260px] w-11/12 p-1 mx-auto flex items-center flex-col gap-10'>
            <button onClick = {logoutHandler} className='bg-white text-black p-3 m-2 w-fit rounded-md transition-all duration-200 hover:scale-90 font-bold text-xl'>Logout</button>
            <p className='text-2xl font-mono font-bold underline uppercase text-black'>Request Form</p>
             <Form/>
    </div>
  )
}

export default RequestForm