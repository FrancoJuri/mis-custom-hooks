import { useState } from 'react';

const useCounter = (initialState = 10) => {
    
    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(c => c + 1);
    }

    const decrement = () => {
        setCounter(c => c - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    };
}

export default useCounter;
