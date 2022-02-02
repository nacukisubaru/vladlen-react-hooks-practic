import React, {useState, useCallback} from "react";
import ItemsList from "./itemsList";


export default function CounterCallback() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)
    
    const styles = {
        color: colored ? 'darked' : 'black'
    }

    //useCallback отличается от useMemo тем что useCallback возращает callback функцию в которую можно передать параметры, а useMemo
    //возвращает результат выполненной функции
    const generateItemsFromAPI = useCallback((itemIndex) => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + itemIndex}`)
    }, [count])

    //передав в свойство компонента getItems функцию мы можем вызвать ее внутри компонента ItemsList
    return (
        <div>
            <h1 style={styles}>Вычисляемое свойство: {count}</h1>
            <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
            <ItemsList getItems={generateItemsFromAPI} />
        </div>
    )
}