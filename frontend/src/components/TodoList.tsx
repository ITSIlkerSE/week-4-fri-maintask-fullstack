import {Todo} from "../model/Todo";
import {useState} from "react";
import TodoCard from "./TodoCard";
import axios from "axios";
import './TodoList.css';


type todoListProps = {

    todos: Todo[];
}

export default function TodoList(props: todoListProps) {

    const [toDos, setToDos] = useState([""])
    const addTodo = () => setToDos(toDos)


    return (

        <div className={"container"}>
        <div className={"Card"}>
            {props.todos.map(todo => <TodoCard todo={todo}/>)}
            <input className={"input"} onChange={(event) => setToDos([event.target.value])}/>
            <button onClick={addTodo}>Press to Post</button>

            <p>Typed in: {toDos}</p>
        </div>
        </div>

    )


}

//PUT
//POST