import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, setStateName } from '../features/counterSlice'

function Counter() {
    const count = useSelector((state) => state.value)
    const name = useSelector((state) => state.name)

    const dispatch = useDispatch()
    
    const [customValue, setCustomValue] = useState(0)
    const [inputName, setInputName] = useState(name)

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(customValue)))
    }

    const onSubmitName = (e) => {
        e.preventDefault()
        dispatch(setStateName(inputName))
    }


    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
             <div>
            <h2> Increment by Value</h2>
             <form onSubmit={onSubmit}>
                    <input type="number" onChange={e => setCustomValue(e.target.value)} />
                    <button>Custom Increment</button>
                </form>
                </div>
            <div>
        <h3> Update Name: {name}</h3>
        <form onSubmit={onSubmitName}>
                <input type="text" onChange={e => setInputName(e.target.value)} />
                <button>Update Name</button>
        </form>
            </div>
        </div>
    )
}

export default Counter
