import {useState} from 'react'
import { useDispatch} from 'react-redux';
import { deleteTodo, toggleTodo, todoEdit } from '../Redux/TodoActions';
const Task = ({todo,idx}) => {
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState(todo.description)
  let dispatch = useDispatch();
  const handleDone =()=>{
    dispatch(toggleTodo(todo.id))
     
  }
   console.log(todo)
    return (
     
      <div className="container">
          <div>#{idx+1}</div>
          <div className="col">
              {editable ?
                  <textarea className="form-control" type="text" className="task"
                      value={name}
                      onChange={(e) => {
                          setName(e.target.value);
                      }}
                  />
                  :
                  <h4 className={todo.isDone.toString()} >{todo.description}</h4>}
          </div>
          <button className="btn btn-info"
              onClick={() => {
                  dispatch(todoEdit(name,todo.id))
                  if(editable) {
                   setName(name);   
                  }
                  setEditable(!editable);
                  setName(todo.description); 
                

              }}
          >{editable?"Update":"Edit"}</button>
        
        <button className="btn btn-secondary" onClick={handleDone}>
        {todo.isDone}
        </button>
        <div style={{cursor:"pointer",fontSize:"25px"}} onClick={()=>dispatch(deleteTodo(idx))}>
            x
        </div>
        </div>
       

    )
}
export default Task;
