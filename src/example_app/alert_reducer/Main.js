import React from "react";
import { useAlert } from "./AlertContext";
//import { useAlertToggle } from "./alert/AlertContext";

export default function Main() {
    //использование публичной функции из AlertContext в которой используется useContext
    //const toggle = useAlertToggle()
    const {show} = useAlert()
    console.log(show)
    return (
        <>
            <h1>Пример Context с reducer</h1>
            <button className="btn btn-success" onClick={() => show('Этот текст из main.js')}>Показать alert</button>
        </>
    );
}
