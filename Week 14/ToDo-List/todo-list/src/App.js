import './App.css';
import React, {useState} from 'react';

function App(){
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])

  return(
    <>
      {todos.map((todo, i) => <div key={i}>{todo.text}</div>)}
    </>
  );
}


export default App;
