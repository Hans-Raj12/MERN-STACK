import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
const Update = ({display, update}) => {

  useEffect(() => {
    setInputs({title:update.title,body:update.body})
  },[update])
  const [inputs, setInputs] = useState({title:"",body:""})


  const change = (e) => {
    const {name, value} = e.target;
    setInputs(inputs => ({...inputs, [name]:value}))
  }
  const submit = async () => {
    
    await axios.put(`http://localhost:3000/api/v2/updateTask/${update._id}`,inputs)
      .then((res)=>{
        toast.success("Your Task is Updated")
      })  
    console.log(inputs)
    display('none')
  }
  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
      <h3>Update your Task</h3>
      <input type="text"  className='todo-inputs my-4 w-100 p-3' value={inputs.title} name="title"  onChange={change}/>
      <textarea id="" className='todo-inputs w-100 p-3' value={inputs.body} name="body" onChange={change}></textarea>
      <div>
      <button className='btn btn-dark my-4' onClick={submit}>Update</button>
      <button className='btn btn-danger my-4 mx-3' onClick={()=>{
        return display('none')
      }}>Close</button>
      </div>
    </div>
  )
}

export default Update
