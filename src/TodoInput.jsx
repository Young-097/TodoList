import { useEffect, useState } from "react"

function TodoInput ({todoList, setTodoList, inputValue, setInputValue}) {

    useEffect(()=>{
        
    },[inputValue])
    return(
        <>
            <div className="Todoinput">
                <input className="Todoinput_input" type="text" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>

                <button className="Todoinput_button" onClick={()=>{
                    const newTodoList = {id: Number(new Date()), todo: inputValue, isComplete: false}
                    const Arr = [...todoList, newTodoList];
                    setTodoList(Arr);
                    setInputValue("");
            }}>등록</button>
            </div>
        </>
    )
}

export default TodoInput;