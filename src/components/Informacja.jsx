import React, {useEffect} from 'react';

//Zadanie 7
const Informacja = (props) => {
    useEffect(() => {
        console.log("Nowa wiadomość: "+props.wiadomosci)
    }, [props.wiadomosci]);
    return (
        <div>

        </div>
    );
};

export default Informacja;