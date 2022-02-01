import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button className='btn btn-success' onClick={increment} >Добавить</button>
      <button className='btn btn-danger' onClick={decrement}>Убрать</button>
    </div>
  );
}

export default App;
