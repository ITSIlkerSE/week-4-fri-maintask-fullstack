import {Todo} from "../model/Todo";
import {useState} from "react";
import TodoCard from "./TodoCard";
import axios from 'axios'


type todoListProps = {

    todos: Todo[];
}

export default function TodoList(props: todoListProps) {

    const [toDos, setToDos] = useState([""])
    const addTodo = () => setToDos(toDos)


return(



    <div>
        {props.todos.map(todo => <TodoCard todo={todo} />)}
        <input className={"input"} onChange={(event) => setToDos([event.target.value]) }/>
         <button onClick={addTodo}/>

        <p>Typed in: {toDos}</p>
    </div>


)



}

//PUT
//POST