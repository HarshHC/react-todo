import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Todo(props) {
    const [selected, setSelected] = useState(false)

    let element = 
    <div 
        onClick={() => {
            console.log('clicked');
            props.updateTodo(props.id, props.todo.text, !props.todo.complete)
        }}
        className="w-5/6 border mx-auto rounded-md p-3 text-left m-1">
        <li
            key={props.id}
            className="text-white"
            onClick={() => setSelected(!selected)}
            >{props.todo.text}</li>
    </div>

    if(props.todo.complete){
        element = 
        <div
        className="flex justify-between items-center w-5/6 border mx-auto rounded-md p-3 text-left m-1 bg-green-500">
        <FontAwesomeIcon 
            onClick={() => {
                console.log('clicked');
                props.updateTodo(props.id, props.todo.text, !props.todo.complete)
             }}
            className="text-white text-xl"
            icon={faCheckCircle}></FontAwesomeIcon>
        <li
            onClick={() => {
                console.log('clicked');
                props.updateTodo(props.id, props.todo.text, !props.todo.complete)
            }}
            key={props.id}
            className="text-white text-left flex-grow mx-4"
            >{props.todo.text}
        </li>
        <FontAwesomeIcon 
            onClick={() => {
                console.log('clicked');
                props.updateTodo(props.id, null, !props.todo.complete)
            }}
            className="del text-xl" icon={faTrashAlt}
        ></FontAwesomeIcon>

    </div>
    }

    return (
        <div>
             {element}
        </div>
    )
}

export default Todo
