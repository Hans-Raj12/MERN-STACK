import React, { useEffect, useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import axios from "axios";
let toUpdateArray = []
const Todo = () => {

  let id = sessionStorage.getItem('id')
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

 

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };
  const change = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const submit = async () => {

    if(inputs.title==="" || inputs.body === ""){
      toast.error("Title or Body shoud not be empty")
    }else{

      if(id){
        await axios.post("http://localhost:3000/api/v2/addTask",{title:inputs.title,body:inputs.body,id:id})
        .then((res)=>{
          console.log(res)
        })
        
      setInputs({ title: "", body: "" });
      toast.success("Your Task is Added")
      }
      else{
        
      setArray([...Array, inputs]);
      setInputs({ title: "", body: "" });
      toast.success("Your Task is Added")
      toast.error("Your Task is not saved! please Sign In")
      }

    }
   
    
  };
  const del = async (CardId) =>{
    if(id){
      await axios.delete(`http://localhost:3000/api/v2/deleteTask/${CardId}`,{data:{id:id}})
      .then((res)=>{
        toast.success("Your Task is Deleted")
      })    
    }
    else{
      toast.error("Please Sign In First")
    }
  }
  const display=(value)=>{
    document.getElementById('update').style.display = value
  }
  const toBeUpdate=(value)=>{
    toUpdateArray= Array[value]
  }
 
  useEffect(() => { 
    if(id){
      const fetch = async () =>{
        await axios.get(`http://localhost:3000/api/v2/getTasks/${id}`)
        .then((res)=>{
          setArray(res.data.list)
        })
      }
      fetch()
    }
  }, [submit]);

  return (
    <>
      <div className="todo">
      <ToastContainer />
      <div className="container-fluid todo-main d-flex justify-content-center align-items-center my-5 flex-column">
        <div className="d-flex flex-column todo-inputs-div w-75 p-1">
          <input
            type="text"
            placeholder="TITLE"
            className="my-3 p-2 todo-inputs"
            onClick={show}
            name="title"
            value={inputs.title}
            onChange={change}
          />
          <textarea
            id="textarea"
            type="text"
            placeholder="BODY"
            className="p-2 todo-inputs"
            name="body"
            value={inputs.body}
            onChange={change}
          />
        </div>
        <div className="d-flex justify-content-end w-lg-75 w-75 my-3">
          <button className="home-btn px-3 py-1" onClick={submit}>
            ADD
          </button>
        </div>
      </div>
      <div className="todo-body">
        <div className="container-fluid">
          <div className="row">
            {Array &&
              Array.map((item, index) => (
                <div className="col-lg-3 col-11 mx-lg-5 mx-3 my-2 " key={index}>
                  <TodoCards 
                  title={item.title}
                  body={item.body }
                  id={item._id} 
                  delId={del} 
                  display={display}
                  updateId={index} 
                  toBeUpdate={toBeUpdate}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    <div className="todo-update" id='update'>
        <div className="container update">
          <Update display={display} update={toUpdateArray}/>
        </div>
    </div>
    </>
    
  );
};

export default Todo;
