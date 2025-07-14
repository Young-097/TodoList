import TodoInput from "./TodoInput";
import './Todo.css';
import { useState } from "react";
import TodoList from "./todoList";
import Filter from "./Filter";


function Todo () {
    const [todoList, setTodoList] = useState([
            {id: 0, todo: '밥먹기', isComplete: false},
            {id: 1, todo: '공부하기', isComplete: true},
            {id: 2, todo: '청소하기', isComplete: false},
        ])
    const [inputValue, setInputValue] = useState("")
    const [filterId, setFilterId] = useState(0)

    const getFilteredList = ()=>{
        if(filterId === 1){
            return todoList.filter((el)=> !el.isComplete)
        }else if(filterId === 2){
            return todoList.filter((el)=> el.isComplete)
        }
        return todoList;
    }
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
                    <Filter
                    filterId={filterId}
                    setFilterId={setFilterId}/>
                </div>
                <div>
                    <TodoList
                    todoList={getFilteredList()}
                    setTodoList={setTodoList}/>
                </div>
            </div>
        </>
    )
}

export default Todo;