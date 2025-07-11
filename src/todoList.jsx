import { useState } from "react"

function TodoList ({todoList, setTodoList}) {

    const toggleCheckbox = (index)=>{
        const newArr = [...todoList];
        newArr[index].isComplete = !newArr[index].isComplete;
        setTodoList(newArr)
    
    }
    return(
        <>
            {todoList.map((todo, index)=>{return(
                <div key={todo.id}>
                    <label>
                        <input
                        type="checkbox" 
                        onChange={()=>toggleCheckbox(index)}
                        checked={todo.isComplete}/>
                        {todo.todo}
                        <button >♻</button>
                        <button onClick={()=>{setTodoList(prev => prev.filter((el)=>el.id !== todo.id))
                        }}>❌</button>
                    </label>
                </div>
            )
            })}
        </>
    )
}

export default TodoList;