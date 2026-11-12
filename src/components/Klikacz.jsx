import React, {useEffect, useState} from 'react';

//Zadanie 3
const Klikacz = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log("Efekt został uruchomiony. Kliknięto "+counter+" razy.")
    },[counter])
    return (
        <div>
            <button onClick={() => setCounter(counter+1)}>+1</button>
            <h3>Kliknięto {counter} razy</h3>
        </div>
    );
};

export default Klikacz;