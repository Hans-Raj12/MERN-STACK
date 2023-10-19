import React,{useState} from 'react'
import './signup.css'
import axios from 'axios'
import HeadingComp from './HeadingComp'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'
const Signin = () => {

  const [inputs, setInputs] = useState({email: '', password: ''})
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const change = (e) => {
    const {name, value }  = e.target;
    setInputs({...inputs, [name]: value })
  }

  const submit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:3000/api/v1/signin", inputs)
    .then(res => {
      setInputs({email:"",password:""})
      sessionStorage.setItem('id', res.data.user._id)
      dispatch(authActions.login())
      navigate('/todo')
    })
  }



  return (
    <div>
       <div className="signup">
      <div className="container">
        <div className="row">
        <div className=" d-none col-lg-4 d-lg-flex justify-content-center align-items-center column col-left my-1">
           <HeadingComp first="Sign" second='In'/>
          </div>
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className='d-flex flex-column w-100 p-3'>
              
              <input
                className="p-2 my-3 input-signup"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={inputs.email}
                onChange={change}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={inputs.password}
                onChange={change}
              />
              <button className='btn-signup' onClick={submit}>SignIn</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signin
