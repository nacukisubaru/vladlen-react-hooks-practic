import React from "react";
import { useAlert } from "./AlertContext";
//import { useAlertToggle } from "./alert/AlertContext";

export default function Main() {
    //использование публичной функции из AlertContext в которой используется useContext
    //const toggle = useAlertToggle()
    const {toggle} = useAlert()
    return (
        <>
            <h1>Пример с Context без reducer</h1>
            <button className="btn btn-success" onClick={toggle}>Показать alert</button>
        </>
    );
}
