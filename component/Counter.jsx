import { useState } from "react"

const Counter = () =>{
    const [counter,setCounter] = useState(0);
    let counterOn = () =>{
        setCounter(counter+1)
    }
    return (
        <>
            <div className="counter">{counter}</div>
            <button className="counterBtn" onClick={counterOn}>Click me</button>
        </>
    )
}

export default Counter;