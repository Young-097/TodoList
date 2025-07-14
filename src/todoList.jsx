import { useState } from "react"

function TodoList ({todoList, setTodoList}) {
    const [editingId, setEditingId] = useState(null);
    const [editInput, setEditInput] = useState('')

    const toggleCheckbox = (index)=>{
        const newArr = [...todoList];
        newArr[index].isComplete = !newArr[index].isComplete;
        setTodoList(newArr)
    };
    
    const handleDeleteButtonClick = (id) => {setTodoList(prev => prev.filter((el)=>el.id !== id))}
    const handleEditButtonClick = (id, todo) => {
        setEditingId(id);
        setEditInput(todo)}

    const handleEditComplete = ()=>{setTodoList(prev => 
        prev.map((el) => 
            el.id === editingId ? {...el, todo:editInput} : el))}
    return(
        <>
            {todoList.map((todo, index)=>{return(
                <div key={todo.id}>
                    <label>

                        <input
                        type="checkbox" 
                        onChange={()=>toggleCheckbox(index)}
                        checked={todo.isComplete}/>


                        {editingId === todo.id ? (
                            <>
                                <input type="text" 
                                value={editInput} 
                                onChange={(e)=>{setEditInput(e.target.value)}}/>
                                <button onClick={handleEditComplete}>♻</button>
                            </>

                        ) :(
                            <>
                                <span>{todo.todo}</span>
                                <button onClick={()=>{handleEditButtonClick(todo.id, todo.todo)}}>♻</button>
                            </>
                        )
                    }
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