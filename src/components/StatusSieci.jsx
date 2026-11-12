import React, {useEffect, useState} from 'react';

//Zadanie 6
const StatusSieci = () => {
    const [JestOnline, setJestOnline] = useState(navigator.onLine)
    useEffect(() => {
        window.addEventListener('online', ()=>setJestOnline(true));
        window.addEventListener('offline', ()=>setJestOnline(false));
    },[navigator.onLine])
    useEffect(() => {
        window.removeEventListener('online', ()=>setJestOnline(false));
        window.removeEventListener('offline', ()=>setJestOnline(true));
    }, [JestOnline]);
    return (
        <div>
            <h3>Status: {JestOnline ? "Jesteś online" : "Brak połączenia"}</h3>
        </div>
    );
};

export default StatusSieci;