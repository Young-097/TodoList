import TodoInput from "./TodoInput";
import './Todo.css';
import { useState } from "react";
import TodoList from "./todoList";


function Todo () {
    const [todoList, setTodoList] = useState([
            {id: 0, todo: '밥먹기', isComplete: false},
            {id: 1, todo: '공부하기', isComplete: true},
            {id: 2, todo: '청소하기', isComplete: false},
        ])
    const [inputValue, setInputValue] = useState("")
    return(
        <>
            <div className="Todo">
                <div>
                    <TodoInput 
                    todoList={todoList}
                    setTodoList={setTodoList}
                    inputValue={inputValue}
                    setInputValue={setInputValue}/>
                </div>
                <div>
                    <TodoList
                    todoList={todoList}
                    setTodoList={setTodoList}/>
                </div>
            </div>
        </>
    )
}

export default Todo;