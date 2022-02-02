import React, {useContext, useState} from "react";

const AlertContext = React.createContext()
const AlertToggleContext = React.createContext()

//Публичные функции которые можно импортировать в файлах
//Используем AlertContext.Provider в значение которого передали состояние alert
//useContext нужен для того чтобы получить контект
export const useAlert = () => {
    return useContext(AlertContext)
}

export const useAlertToggle = () => {
    return useContext(AlertToggleContext)
}

//функция провайдер 
//children - компоненты которые находятся внутри AlertProvider из App.js

export const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false)
    const toggle = () => setAlert(prev => !prev)
    return (
        <AlertContext.Provider value={alert}>
            <AlertToggleContext.Provider value={toggle}>
                {children}
            </AlertToggleContext.Provider>
        </AlertContext.Provider>
    )
}