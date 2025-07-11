import { useState } from "react"

function TodoList ({todoList, setTodoList}) {
    const [editingId, setEditingId] = useState(null);
    const [editInput, seteditInput] = useState('')

    const toggleCheckbox = (index)=>{
        const newArr = [...todoList];
        newArr[index].isComplete = !newArr[index].isComplete;
        setTodoList(newArr)
    };
    
    const handleDeleteButtonClick = (id) => {setTodoList(prev => prev.filter((el)=>el.id !== id))}
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

                        <button onClick={()=>{handleDeleteButtonClick(todo.id)
                        }}>❌</button>
                    </label>
                </div>
            )
            })}
        </>
    )
}


export default TodoList;