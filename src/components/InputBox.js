import React,{useState} from 'react'
import '../App.css'

function InputBox({setTodos, todos}) {

    const [input, setInput] = useState('')


    const addTodo = (event) => {
        event.preventDefault()
        let newTodo = {text: input, complete: false}
        var data = [];
        if(todos != null){
          data = todos.slice()
        }
        data.push(newTodo)
        setTodos(data)
        setInput('')
        var objDiv = document.getElementById("todo-list");
        objDiv.scrollTop = objDiv.scrollHeight;
    
      }

    return (
        <div>
            <div className="inp-box flex flex-col">
              <form>
                <input 
                  value={input}
                  onChange= {event => setInput(event.target.value)}
                  placeholder="write your task here"
                  className="shadow-xl text-center place-self-center sm:flex-col m-2 w-5/6 rounded-lg p-3  bg-gray-200"></input>
                  <button 
                    disabled={!input}
                    onClick={addTodo} 
                    className="inp_btn shadow-xl place-self-center w-5/6 text-white font-bold rounded-lg p-3 mb-12"
                >ADD</button>
                </form>
            </div>
        </div>
    )
}

export default InputBox
