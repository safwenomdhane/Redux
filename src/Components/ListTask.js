import { useDispatch, useSelector } from 'react-redux'
import { doneTodo,undoneTodo, allTodo } from '../Redux/TodoActions'
import Task from "./Task"

const ListTask =({})=>{
    const todos = useSelector(state=>state.todos)
    const done = useSelector(state=>state.done)
    const dispatch = useDispatch()
    
    return(
        <div>
            <button className="btn btn-warning"onClick={()=>dispatch(allTodo())}>all</button>
            <button className="btn btn-warning" onClick={()=>dispatch(doneTodo())}>done</button>
            <button className="btn btn-warning" onClick={()=>dispatch(undoneTodo())}>undone</button>
            {todos.filter(elm=>done==="all"?elm:done==="done"?elm.isDone==="Done":elm.isDone==="Undone").map((elm,i)=><Task todo={elm} idx={i}/>)}
            
        </div>

    )
}

export default ListTask