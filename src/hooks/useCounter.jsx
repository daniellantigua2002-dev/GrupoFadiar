import { useState } from "react";

export const useCounter = ({ state = 0 }) => {

    const [counter, setCounter] = useState(state);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        if (counter <= 1) return;
        setCounter(counter - 1);
    };


    const handleReset = () => {
        setCounter(state);
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleReset
    };
};
