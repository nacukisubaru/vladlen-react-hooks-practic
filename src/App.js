import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function computeInitialCounter() {
  console.log('Some calc....')
  return Math.trunc(Math.random() * 20)
}

function App() {
  const [counter, setCounter] = useState(()=> {
    return computeInitialCounter()
  })

  function increment() {
    //setCounter(counter + 1)
    // установка нового состояния в зависимости от предыидущего 
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
   // setCounter(prev => prev + 1)
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
