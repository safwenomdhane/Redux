import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { addTodo } from '../Redux/TodoActions';
const Addtask = () => {
    const [todo , setTodo] =useState("")
    
    const dispatch = useDispatch()
    const handleChange = e => setTodo(e.target.value);
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo("")
     }
    return(

        <form  className="add" onSubmit={handleSubmit}>
        <input class="form-control" type='text' 
        name='todo' 
        placeholder='to do'
        onChange={handleChange}
        value={todo}></input>
        
        <button className="btn btn-info" onClick={handleSubmit}>Add</button>
        
        </form>
    )
}
export default Addtask;