import React, { useState } from 'react'
import GenderCheck from './GenderCheck'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
    
	};
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-[#626769]'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup</h1>
        <form onSubmit={handleSubmit} >
        <div>
            <label className='label p-2'>
                        <span className='text-base label-text font-bold text-gray-300'>Full Name</span>
                    </label>
                <input type="text" 
                placeholder="Enter fullname" 
                className="input input-bordered
                 w-full max-w-xs"
                 value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                </div>
        <div>
            <label className='label p-2'>
                        <span className='text-base label-text font-bold text-gray-300'>Username</span>
                    </label>
                <input type="text" 
                placeholder="Enter Username"
                 className="input input-bordered w-full max-w-xs"
                 value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                </div>
        <div>
            <label className='label p-2'>
                        <span className='text-base label-text font-bold text-gray-300'>Password</span>
                    </label>
                <input type="password" placeholder="Enter Password" 
                className="input input-bordered w-full max-w-xs" 
                value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}/>
                </div>
        <div>
            <label className='label p-2'>
                        <span className='text-base label-text font-bold text-gray-300'>Confirm Password</span>
                    </label>
                <input type="password" 
                placeholder="Confirm Password" 
                className="input input-bordered w-full max-w-xs"
                value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                </div>
                <GenderCheck onCheckboxChange={handleCheckboxChange} selectedGender= {inputs.gender}/>
                <Link to="/login" className='text-sm hover-underline text-gray-200 hover:text-blue-600 mt-2 inline-block'>Already have an account ?</Link>
            <div>
              <button className='btn-block btn-sm mt-4 btn btn-success'disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}</button>
            </div>
        </form>



      </div>

    </div>
  )
}

export default SignUp