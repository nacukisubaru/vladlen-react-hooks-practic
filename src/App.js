import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter from "./examples/state";
import Users from "./examples/users";
import CounterUseRef from "./examples/effect";
import MemoCounter from "./examples/memo";
import CounterCallback from "./examples/callback";
import MainReducer from "./example_app/alert_reducer/Main";
import AlertReducer from "./example_app/alert_reducer/Alert";
import {AlertProviderReducer} from './example_app/alert_reducer/AlertContext';
import Main from "./example_app/alert/Main";
import Alert from "./example_app/alert/Alert";
import {AlertProvider} from './example_app/alert/AlertContext';
import InputApp from "./examples/customHooks";

function App() {
  return (
      //Провайдер
      <div className="container pt-3">
          <AlertProvider>
              <div className="wrapper">
                  <Alert />
                  <Main />
              </div>
          </AlertProvider>
          <AlertProviderReducer>
              <div className="wrapper">
                  <AlertReducer />
                  <MainReducer />
              </div>
          </AlertProviderReducer>
          <Counter />
          <Users />
          <CounterUseRef />
          <MemoCounter />
          <CounterCallback />
          <InputApp />
      </div>
  );
}

export default App;
