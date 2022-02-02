import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Counter from './examples/state';
import Users from './examples/users';
import CounterUseRef from './examples/effect';
import MemoCounter from './examples/memo';
import CounterCallback from './examples/callback';

function App() {

  return (
  //Пример с счетчиком и useState
  <div className="wrapper">
   <Counter />
   <Users />
   <CounterUseRef />
   <MemoCounter />
   <CounterCallback />
   </div>
  );
}

export default App;
