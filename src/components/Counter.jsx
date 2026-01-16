import { useState } from "react";

function CountDown() {
    const [count, setCount] = useState(5);

    return (
        <>
        <h1>Value of counter: {count}</h1>

        <button onClick={ () => setCount(count + 1)}>Increment</button>
        <button onClick={ () => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default CountDown;