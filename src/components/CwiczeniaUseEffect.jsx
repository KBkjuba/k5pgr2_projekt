import React, { useState, useEffect } from "react";

const CwiczeniaUseEffect = () => {
    const [licznik, setLicznik] = useState(10)
    const [suma, setSuma] = useState(0)
    useEffect(() => {
        console.log("Wykonanie useEffect lub aktualizacja")
    })
    useEffect(() => {
        console.log("Wyrenderowanie tylko jeden raz")
        const timer = setInterval(() => {
            console.log("Zegar włączony...")
        },1000);
        return () => {
            clearInterval(timer);
            console.log("Zatrzymano zegar")
        }
    }, [])
    useEffect(() => {
        console.log("Wyrenderowanie po zmianie licznik: "+licznik)
    }, [licznik])
    return (
        <div>
            <button onClick={() => setLicznik(licznik+1)}>Zwiększ</button>
            <button onClick={() => setSuma(suma+licznik)}>Suma</button>
            <hr  />
            <p>Licznik: {licznik}</p>
            <p>Suma: {suma}</p>
        </div>
    );
};

export default CwiczeniaUseEffect;