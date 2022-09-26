import {Todo} from "../model/Todo";
import {useState} from "react";
import axios from 'axios'
import './TodoCard.css';

type todoElementProps = {

    todo: Todo;
}

export default function TodoCard(props: todoElementProps) {

    const onDelete = () => {

        const todoId = props.todo.id;
        axios.delete("/api/todo/" + todoId)


    }

    const onAdvance = () => {

        props.todo.status = "Done"
        const todoID = props.todo.id;
        axios.put("/api/todo/" + todoID, props.todo)


    }

    const addTodo = () => {

        const todoId = props.todo.id
        axios.post("api/todo/id/" + todoId)
    }


    return (

        <div className={"todoElement"}>

            <p>{props.todo.description} {props.todo.status}</p>

            <p>
                <button onClick={onAdvance}>Advance</button>
            </p>
            <p>
                <button onClick={onDelete}>Delete</button>
            </p>
            <p>
                <button onClick={addTodo}>Post</button>
            </p>

        </div>

    )


}