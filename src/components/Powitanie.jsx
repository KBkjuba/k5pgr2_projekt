import React, {useEffect, useState} from 'react';

//Zadanie 1
const Powitanie = () => {
    const [press, setPress] = useState(0)
    useEffect(() => {
        console.log("Komponent został wyrenderowany!");
    })
    return (
        <div>
            <button onClick={() => setPress(press+1)}>Wyrenderuj ponownie</button>
        </div>
    );
};

export default Powitanie;