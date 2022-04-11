import React, {useState} from 'react';

const Counter = function(){

    const [value, setValue] = useState(0);
    const sum = (value) => {
        return value + value
    } 
    const SountSum = sum(value);
    console.log(SountSum);
    console.log(value);

    function increment(){
        setValue( value + 1)
    }

    function decrement(){
        setValue( value - 1)
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={increment}>+ 1</button>
            <button onClick={decrement}>- 1</button>
        </div>
    );    

};

export default Counter;