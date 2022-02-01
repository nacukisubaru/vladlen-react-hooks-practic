import React, {useState, useMemo, useEffect} from "react";

function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

export default function MemoCounter() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)
    
    //useMemo - memo от memorize запомнить нужен для кеширования состояния
    //работает это так нажимаем на кнопку добавить и изменение стилей не происходит так как стили
    //работают с состоянием colored если жмем изменить то меняется только стиль вычисления над number не происходят
    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    //используется для оптимизации передаем вторым параметром состояние с которым работаем
    //и функция которая проводит какие то вычисления над состоянием работает только в рамках одного state
    //в нашем случае number при нажатии на кнопку изменить цвет изменения будут срабатывать сразу а при изменении числа будет задержка
    //так как вызывается complexCompute
    const computed = useMemo(() => {
       return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('Styles changed')
    }, [styles])
    
    return (
        <div>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
        </div>
    )
}