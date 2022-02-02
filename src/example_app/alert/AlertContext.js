import React, {useContext, useState} from "react";

const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

//Публичные функции которые можно импортировать в файлах
//Используем AlertContext.Provider в значение которого передали состояние alert
//useContext нужен для того чтобы получить контект
export const useAlert = () => {
    return useContext(AlertContext)
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }

//функция провайдер 
//children - компоненты которые находятся внутри AlertProvider из App.js

export const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false)
    const toggle = () => setAlert(prev => !prev)
    return (
        //можем передать в контекст объект который будет хранить в себе свойства и методы
        //за счет чего можем пользоваться ими из объекта и не создавать еще больше контекстов провайдеров
        <AlertContext.Provider value={{
            visible:alert,
            toggle
        }}>
            {children}
        </AlertContext.Provider>
    )
}