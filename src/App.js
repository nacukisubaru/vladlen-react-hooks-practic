import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter from "./examples/state";
import Users from "./examples/users";
import CounterUseRef from "./examples/effect";
import MemoCounter from "./examples/memo";
import CounterCallback from "./examples/callback";
import Main from "./example_app/Main";
import Alert from "./example_app/alert/Alert";
import {AlertProvider} from './example_app/alert/AlertContext'

function App() {
  return (
      //Пример с счетчиком и useState
      <AlertProvider>
        <div className="container pt-3">
            <Alert />
            <Main/>
            <Counter />
            <Users />
            <CounterUseRef />
            <MemoCounter />
            <CounterCallback />
        </div>
      </AlertProvider>
  );
}

export default App;
