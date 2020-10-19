import React from 'react'
import Todo from './Todo'

function TodoList(props) {

    const updateTodo= (id, todoText, todoComplete) => {
        let data = props.todos.slice()

        if(todoText != null){
            data[id] = {
                text: todoText,
                complete: todoComplete
            }
        }else{
            data.splice(id, 1)
        }
        
        console.log('done');
        console.log(data);
        props.setTodos(data)
    }

    return (
        <div>
            <div id="todo-list" className="todo_list text-center">
            <ul>
                {
                    props.todos.map((todo, id) =>
                        (<Todo key={id} id={id} todo={todo} updateTodo={updateTodo}/>)
                    )
                }
            </ul>
            </div>
        </div>
    )
}

export default TodoList

