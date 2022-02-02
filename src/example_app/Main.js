import React from "react";
import { useAlert } from "./alert/AlertContext";
//import { useAlertToggle } from "./alert/AlertContext";

export default function Main() {
    //использование публичной функции из AlertContext в которой используется useContext
    //const toggle = useAlertToggle()
    const {toggle} = useAlert()
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button className="btn btn-success" onClick={toggle}>Показать alert</button>
        </>
    );
}
