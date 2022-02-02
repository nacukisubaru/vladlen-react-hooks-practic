import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Counter from "./examples/state";
import Users from "./examples/users";
import CounterUseRef from "./examples/effect";
import MemoCounter from "./examples/memo";
import CounterCallback from "./examples/callback";
import Main from "./example_app/Main";
import Alert from "./example_app/Alert";

export const AlertContext = React.createContext()

function App() {
  const [alert, setAlert] = useState(false)

  const toggleAlert = () => setAlert(prev => !prev)

  return (
      //Пример с счетчиком и useState
      <AlertContext.Provider value={alert}>
        <div className="container pt-3">
            <Alert />
            <Main toggle={toggleAlert}/>
            <Counter />
            <Users />
            <CounterUseRef />
            <MemoCounter />
            <CounterCallback />
        </div>
      </AlertContext.Provider>
  );
}

export default App;
