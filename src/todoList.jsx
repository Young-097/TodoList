import { useState } from "react"
import "./todoList.css"
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
                <div className="labelTop" key={todo.id}>
                    <label className="label">

                        <input
                        type="checkbox" 
                        onChange={()=>toggleCheckbox(index)}
                        checked={todo.isComplete}/>


                        {editingId === todo.id ? (
                            <>
                                <input type="text" 
                                value={editInput} 
                                onChange={(e)=>{setEditInput(e.target.value)}}/>
                                <button className="Editcomplete" onClick={handleEditComplete}>♻</button>
                            </>

                        ) :(
                            <>
                                <span>{todo.todo}</span>
                                <button className="Editcomplete_2" onClick={()=>{handleEditButtonClick(todo.id, todo.todo)}}>♻</button>
                            </>
                        )
                    }
                        <button className="DeletButton" onClick={()=>{handleDeleteButtonClick(todo.id)
                        }}>❌</button>
                    </label>
                </div>
            )
            })}
        </>
    )
}


export default TodoList;