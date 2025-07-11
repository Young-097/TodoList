import { useEffect, useState } from "react"

function TodoInput () {
    const [todoList, setTodoList] = useState([])
    const [inputValue, setInputValue] = useState("")

    useEffect(()=>{
        
    },[inputValue])
    return(
        <>
            <div className="Todoinput">
                <input className="Todoinput_input" type="text" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>
                <button className="Todoinput_button" onClick={()=>{
                    const newTodo = {id: todoList.length, todo: inputValue, isComplete: false}
                    const Arr = [...todoList,newTodo];
                    setTodoList(Arr);
                    setInputValue("");
            }}>등록</button>
            </div>
        </>
    )
}

export default TodoInput;