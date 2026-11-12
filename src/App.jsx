import Powitanie from "./components/Powitanie.jsx";
import PierwszeRysowanie from "./components/PierwszeRysowanie.jsx";
import Klikacz from "./components/Klikacz.jsx";
import Zegar from "./components/Zegar.jsx";
import LicznikZProgiem from "./components/LicznikZProgiem.jsx";
import StatusSieci from "./components/StatusSieci.jsx";
import Informacja from "./components/Informacja.jsx";
import {useEffect, useState} from "react";

function App() {
    const [mes, setMes] = useState()
    const Send = () => {
        const message = document.getElementById("wiad").value;
        setMes(message);
    }
    useEffect(() => {
    }, [mes]);

  return (
      <>
          <Powitanie/>
          <PierwszeRysowanie/>
          <Klikacz/>
          <Zegar/>
          <LicznikZProgiem/>
          <StatusSieci/>
          <input type="text" id="wiad"/>
          <button onClick={Send}>Wyślij</button>
          <Informacja wiadomosci={mes}/>
      </>
  )
}

export default App
