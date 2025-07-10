import { useState } from "react"

function TodoList () {
    const [todoList, setTodoList] = useState([
        {id: 0, todo: '밥먹기', isComplete: false},
        {id: 1, todo: '공부하기', isComplete: true},
        {id: 2, todo: '청소하기', isComplete: false},
    ])
    const toggleCheckbox = ()=>{}
    return(
        <>
            {todoList.map((todo)=>{
                <input 
                key={todo.id} 
                type="checbox" 
                onChange={toggleCheckbox}
                checked={todo.isComplete}/>
            })}
        </>
    )
}