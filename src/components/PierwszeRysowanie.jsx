import {useEffect} from 'react';

//Zadanie 2
const PierwszeRysowanie = () => {
    useEffect(() => {
        console.log("Komponent został uruchomiony tylko raz!");
    },[])
};

export default PierwszeRysowanie;