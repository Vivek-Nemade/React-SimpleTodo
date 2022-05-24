import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import TodoInput from "./TodoInput";
import Todoitem from "./Todoitem";
import TodoList from "./TodoList";




const Todoapp=()=>{
        const[todos, setTodos]=useState([])

        const addTodo = ((newTodo)=>{
            return(
                setTodos(
                    [...todos,
                    {id:uuidv4(), value:newTodo}]
                )
            )
        })

        const onDelete=((value)=>{
            setTodos(todos.filter((todo)=> todo.value!==value))
        })
        











    return (
        <div>
            TodoApp
            <TodoInput addTodo={addTodo}/>
            <TodoList>
                <ul>
                    {todos.map((todo)=>(
                        <Todoitem key={todo.id} value={todo.value} onDelete={onDelete}/>
                    ))}
                </ul>
            </TodoList>
        </div>
    )
}

export default Todoapp