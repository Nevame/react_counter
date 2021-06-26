import React ,{useState} from 'react';

const FunctionCounter = () => {
    const[count, setCount]=useState("");

   const handleIncrease = () => {
       setCount(count+1)
    }

    const handleDecrease = () => {
        setCount(count-1)
    }

    


    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => handleIncrease()}> Add 1</button>
        <h1>{count}</h1>
        <button onClick={() => handleDecrease()}>Subtract 1</button>
        </>
    );
}

export default FunctionCounter;
