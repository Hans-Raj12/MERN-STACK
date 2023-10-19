import React, { useState } from 'react'
import './signup.css'
import HeadingComp from './HeadingComp';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
const Signup = () => {
  
  const [inputs, setInputs] = useState({email: '', password: '', username: ''})
  const navigate = useNavigate()

  const change = (e) => { 
    const {name, value }  = e.target;
    setInputs({...inputs, [name]: value })
  }

  const submit = async (e) => { 
    e.preventDefault()
    
    await axios.post('http://localhost:3000/api/v1/register', inputs)
    .then(res => {
      if(res.data.message==="User already exists") 
      {
        toast.success(res.data.message)
      }
      else{
        toast.success(res.data.message)
      setInputs({email:"", password:"", username:""})
      navigate('/signin')
      }
    })

  }

  return (
    <div className="signup">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className='d-flex flex-column w-100 p-3'>
              <input
                className="p-2 my-3 input-signup"
                type="text"
                placeholder="Enter your Username"
                name="username"
                onChange={change}
                value={inputs.username}
              />
              <input
                className="p-2 my-3 input-signup"
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={change}
                value={inputs.email}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                placeholder="Enter your Password"
                name="password"
                onChange={change}
                value={inputs.password}
              />
              <button className='btn-signup' onClick={submit}>Signup</button>
            </div>
          </div>
          <div className="col-lg-4 d-lg-flex justify-content-center align-items-center column col-left my-1 d-none">
           <HeadingComp first="Sign" second='Up'/>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Signup
