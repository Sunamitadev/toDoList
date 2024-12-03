import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [todos, setTodos] = useState([

    {
      id:1,
      text: "Criar funcionalidade X no Sistema",
      category:"Trabalho",
      isCompled: false,
    },
    {
      id:2,
      text: "Ir na Academia",
      category:"Pessoal",
      isCompled: false,
    },
    {
      id:3,
      text: "Estudar React",
      category:"Estudos",
      isCompled: false,
    },
  ]);
  
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <div className='todo' key={todo.id}>
            <div className='content'>
              <p>{todo.text}</p>
              <p className='category'>({todo.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App
