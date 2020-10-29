import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle,faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

function Todo(props) {
    const [selected, setSelected] = useState(false)
    const [isEditable, setIsEditable] = useState(false)
    const [text, setText] = useState("")

    let element = 
    <div 
        onClick={() => {
            console.log('clicked');
        }}
        className="w-5/6 border mx-auto rounded-md p-3 text-left m-1">
        <li
            key={props.id}
            className="flex text-white justify-between items-center"
            >
            <div className="flex-grow" onClick={() => props.updateTodo(props.id, props.todo.text, true)}>{props.todo.text}</div>
            <FontAwesomeIcon 
            onClick={() => {
                setIsEditable(true)
                setText(props.todo.text)
                props.updateTodo(props.id, props.todo.text, false)
                console.log("EDITTING");
            }}
            className="edit text-xl text-right ml-3 flex-end" icon={faEdit}
        ></FontAwesomeIcon></li>
    </div>

    if(isEditable){
        element = 
        <div 
            onClick={() => {
                console.log('clicked');
            }}
            className="w-5/6 border mx-auto rounded-md p-3 text-left m-1">
            <li
                key={props.id}
                className="flex text-white justify-between items-center"
                >
                
                <input onChange={(e) => setText(e.target.value)} value={text} className="flex-grow p-1 text-black"/>

                <FontAwesomeIcon 
                onClick={() => {
                    setIsEditable(false)
                    props.updateTodo(props.id, text, false)
                }}
                className="edit text-xl ml-3 text-right flex-end" icon={faCheckCircle}
            ></FontAwesomeIcon></li>
        </div>
    }

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
                console.log('del clicked');
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
