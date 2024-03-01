import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-[#626769]">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
            </h1>
            <form>
                
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text font-bold text-gray-300'>Username</span>
                    </label>
                <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" />
                </div>
                
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text font-bold text-gray-300'>Password</span>
                    </label>
                <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
              <button className='btn-block btn-sm mt-4 btn btn-success'>Login</button>
            </div>
            
            </form>
        </div>
    </div>
  )
}

export default Login