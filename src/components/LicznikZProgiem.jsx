import React, {useEffect, useState} from 'react';

//Zadanie 5
const LicznikZProgiem = () => {
    const [counter, setCounter] = useState(0)
    const [clickable, setClickable] = useState(true)
    useEffect(() => {
        if(counter >= 10)
        {
            setClickable(false)
            console.log("Uwaga! Osiągnięto limit kliknięć.")
        }
    }, [counter])
    const Click = () => {
        if(clickable)
        {
            setCounter(counter + 1)
        }
    }

    return (
        <div>
            <button onClick={() => Click()}>Licznik wciśnięć (2)</button>
            <h3>Licznik: {counter}</h3>
        </div>
    );
};

export default LicznikZProgiem;