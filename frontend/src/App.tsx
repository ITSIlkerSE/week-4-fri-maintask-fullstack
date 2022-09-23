import React, {useEffect, useState} from 'react';

import './App.css';
import axios from "axios";
import TodoList from './components/TodoList';



export default function App() {

    const [todos, setTodo] = useState([]);

    useEffect(() => {
        axios.get("/api/todo")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setTodo(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])


    return (


        <div className="App">

            <TodoList todos={todos}/>

        </div>
    );
}
