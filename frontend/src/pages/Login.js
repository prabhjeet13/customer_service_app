import React from 'react'

const Login = () => {
  return (
    <div className='max-w-[1260px] w-11/12 mx-auto flex flex-col items-center'>
            <p className='text-2xl underline text-black font-mono font-bold'>LOGIN</p>
            <button className='bg-white text-black p-2 m-2 w-fit rounded-md transition-all duration-200 hover:scale-90'>Login with google</button>
    </div>
  )
}

export default Login