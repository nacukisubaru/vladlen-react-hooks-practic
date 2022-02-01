import React, {useState, useEffect} from "react";

export default function Users() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])

    //UseEffect можно применять для того чтобы отследить текущее состояние при каком то событии и изменении состояния
    //Вывод состояния в консоль при изменении состояния, ловим измененное новое состояние
    //через useEffect
    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setData(json))
    }, [type])

    //Ловим момент когда компонент отрендерился и готов к работе
    //Второй параметр пустой так как мы отслеживаем не состояние определенного массива, а компонента в целом 
    useEffect(() => {
        console.log('ComponentDidMount')
    }, [])

    return (
        <div>
            <h1>Ресурс: {type}</h1>
            <button onClick={() => setType('users')}>Пользователи</button>
            <button onClick={() => setType('todo')}>Todo</button>
            <button onClick={() => setType('posts')}>Посты</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}