import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import './tailwind.css';
import './App.css'
import TodoList from './components/TodoList';


function App() {

  const [todos, setTodos] = useState([
    {
      text: 'sample todo (tap me)',
      complete: false
    },
    {
      text: 'You can add this as an app on your home screen',
      complete: true
    },
    {
      text: 'On iOS - tap share > "Add to Home Screen"  |  On Android - chrome options on top right > "Add to Home Screen"',
      complete: false
    }
  ])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('todos'))
    if(data != null){
      setTodos(data)
    }
    console.log('todos loaded');
  }, [])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log('todos saved');
  }, [todos])

  console.log('APPPP',todos);
  return (
    <div className="text-center">
      <Header />
      <TodoList setTodos={setTodos} todos={todos}/>
      <InputBox setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
