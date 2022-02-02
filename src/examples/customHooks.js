import React, {useEffect, useState} from "react"


function useLogger(value) {
   useEffect(() => {
       console.log('Value changed', value)
   }, [value])
}

//Собственный хук
function useInput(initial) {
    const [value, setValue] = useState(initial)
    
    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
       bind: {value, onChange},
       value,
       clear
    }
}

export default function InputApp() {
    const input = useInput('')

    useLogger(input.value)

    return (
        <div className={'wrapper'}>
            <h1>Собственные хуки</h1>
            <h1>{input.value}</h1>
            <input type="text" {...input.bind}></input>
            <button className="btn btn-warning" onClick={() => input.clear()}>Очистить</button>
        </div>
    )

}