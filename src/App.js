import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Counter from './examples/state';
import Users from './examples/users';

function App() {

  return (
  //Пример с счетчиком и useState
  <div className="wrapper">
   <Counter />
   <Users />
   </div>
  );
}

export default App;
