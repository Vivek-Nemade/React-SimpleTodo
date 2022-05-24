import React from "react";
// import styles from "./Todo.module.css"

// const Todoitem =({todo,onDelete})=>{
//     return(
//         <div className={styles.todo} key ={todo.id}>
//             <input type="checkbox"/>
//             <div>{todo.value}</div>
//             <button onClick={()=>onDelete(todo.id)}>Delete</button>
//         </div>
//     )
// }


const Todoitem =({value,onDelete})=>{
    return(
        <li>{value}
        <button onClick={()=>onDelete(value)}>Delete</button>
        </li>
    )
}
export default Todoitem;   