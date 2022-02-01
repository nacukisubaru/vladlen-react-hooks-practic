import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function computeInitialCounter() {
  console.log('Some calc....')
  return Math.trunc(Math.random() * 20)
}

function App() {
  //useState может принимать колбэк который может вернуть нам функцию которая вернет значение чтобы не производить вычисления заново на каждом рендере
  const [counter, setCounter] = useState(()=> {
    return computeInitialCounter()
  })

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
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

  // Работа с объектом при изменении состояния. Изменяем состояние свойство title но при этом используем старые
  // предыидущие свойства объекта
  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'Новое значение'
      }
    })
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button className='btn btn-success' onClick={increment} >Добавить</button>
      <button className='btn btn-danger' onClick={decrement}>Убрать</button>
      <button className='btn btn-default' onClick={updateTitle}>Изменить</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
