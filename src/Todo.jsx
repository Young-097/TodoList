import TodoInput from "./TodoInput";
import TodoList from "./todoList";
import './Todo.css';

function Todo () {
    return(
        <>
            <div className="Todo">
                <div>
                    <TodoInput/>
                </div>
                <div>
                    <TodoList/>
                </div>
            </div>
        </>
    )
}

export default Todo;