import React, {useEffect, useState} from 'react';

//Zadanie 4
const Zegar = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const Id = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(Id)
    }, []);
    return (
        <div>
            <p>Teraźniejszy czas: {time}</p>
        </div>
    );
};

export default Zegar;