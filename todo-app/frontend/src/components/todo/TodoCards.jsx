import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GrDocumentUpdate } from 'react-icons/gr'
const TodoCards = ({title, body, id, delId, display, updateId,toBeUpdate}) => {
  
  return (
    <div className='todo-cards p-3'>
      <div>
        <h5>{title}</h5>
        <p className='todo-card-p'>
            {body.split("",77)}...
        </p>
      </div>
     <div className='d-flex justify-content-around '>
        <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 ' onClick={()=>{
          display("block")
          toBeUpdate(updateId)
        }}>
           Update <GrDocumentUpdate size={20} className='card-icons'/>
        </div>

     <div  className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger' onClick={()=>{
      delId(id)
     }}>
       Delete <AiFillDelete size={20} className='card-icons del'/>
      </div>
     </div>
    </div>
  )
}

export default TodoCards
