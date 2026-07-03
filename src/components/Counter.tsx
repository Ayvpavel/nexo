import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className='counter'>
            <div>Привет Паша 😊</div>
            <button onClick={() => setCount(i => i - 1)}>-</button>
            <span style={{ fontWeight: 'bold' }}>{count}</span>
            <button onClick={() => setCount(i => i + 1)}>+</button>
        </div>
    )
}