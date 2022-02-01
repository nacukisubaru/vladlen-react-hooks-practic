import React, {useState, useEffect} from "react";

export default function Users() {
    const [type, setType] = useState('')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })
    
    const mouseMoveHandler = (event) => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    //UseEffect можно применять для того чтобы отследить текущее состояние при каком то событии и изменении состояния
    //Вывод состояния в консоль при изменении состояния, ловим измененное новое состояние
    //через useEffect
    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setData(json))
        //Мы можем возвращать callback функцию в которой будем удалять подписки на события и т.д. что-то очищать 
        return () => {
            console.log('clean type')
        }
    }, [type])

    //Ловим момент когда компонент отрендерился и готов к работе
    //Второй параметр пустой так как мы отслеживаем не состояние определенного массива, а компонента в целом 
    useEffect(() => {
        console.log('ComponentDidMount')
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div>
            <h1>Ресурс: {type}</h1>
            <button onClick={() => setType('users')}>Пользователи</button>
            <button onClick={() => setType('todo')}>Todo</button>
            <button onClick={() => setType('posts')}>Посты</button>
            <pre>{data.length > 0 ? JSON.stringify(data, null, 2) : ''}</pre>
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}