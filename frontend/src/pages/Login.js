import React , {useEffect} from 'react'
import toast from 'react-hot-toast';
import Googleicon from '../assets/googleicon.png';

const Login = () => {
  const loginHandler = async () => {
    const toastid = toast.loading('Waiting...');
    try {
      window.location.href = 'http://localhost:4000/api/v1/auth/google';
    } catch (error) {
      toast.error('Server down, try again later');
    }
    toast.dismiss(toastid);
  }


  return (
    <div className='max-w-[1260px] w-11/12 mx-auto flex flex-col items-center justify-center h-full gap-10'>
            <p className='text-4xl underline text-black font-mono font-bold mt-5 uppercase'>Customer Service Platform</p>
            {/* <p className='text-4xl underline text-black font-mono font-bold mt-5'>LOGIN</p> */}
            <button onClick = {loginHandler} className='bg-white text-black p-5 m-2 w-fit rounded-md transition-all duration-200 hover:scale-90 font-bold text-xl'>
            <div className='flex items-center gap-2'><img className = 'w-10' src={Googleicon}/> <p>Sign-in with Google</p></div>
            </button>
    </div>
  )
}

export default Login