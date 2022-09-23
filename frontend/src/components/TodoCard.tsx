import {Todo} from "../model/Todo";
import {useState} from "react";
import axios from 'axios'

type todoElementProps = {

    todo: Todo;
}

export default function TodoCard(props: todoElementProps) {

    const onDelete = () => {

           const todoId = props.todo.id;
            axios.delete("/api/todo/" + todoId)


    }
    //todo if anweisung mit open / in progress / done
    const onAdvance = () => {
        props.todo.status = "Done"
        const todoID = props.todo.id;
        axios.put("/api/todo/" + todoID, props.todo)


    }


    return (
        <div className={"todoElement"}>

            <p>{props.todo.description} {props.todo.status}</p>

            <p><button onClick={onAdvance}>Advance</button></p>
            <p><button onClick={onDelete}>Delete </button></p>


        </div>
    )







}