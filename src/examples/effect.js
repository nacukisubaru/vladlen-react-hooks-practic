import React, {useState, useEffect, useRef} from "react";

export default function CounterUseRef() {
    //useState возвращает кортеж
    //Кортеж это массив который содержит состояние и функцию для изменения этого состояния
    const [value, setValue] = useState('initial')
    //Используется для изменения состояния без рендера useRef возвращает объект а не кортеж
    //Задаем текущее состояние useRef как null
    const renderCount = useRef(null)

    //Изменяем current текущее значение объекта каждый раз когда дергаем useState
    //дергаем useState когда изменяем значение в input
    useEffect(() => {
        renderCount.current++
    })

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        </div>
    )
}