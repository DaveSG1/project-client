import React, { useContext } from 'react'
import { useEffect } from "react";
import { GlobalContext } from '../App';
import Ficha from '../components/Ficha';


export default function FichaPage() {

    const { rutas, idRuta } = useContext(GlobalContext);
    // const [ficha, setFicha] = useState({});


    const ficha = rutas.filter((ruta) => ruta.id === idRuta);
    // setFicha(fichaFiltrada);

    useEffect(() => {
        console.log(ficha);

    }, [ficha])


    /* let URL = "https://run.mocky.io/v3/fd9d2731-666c-4efb-8871-1d14a7e8c38c"

    useEffect(() => {
        fetch(URL)
            .then(r => r.json())
            .then(data => setRutas(data))
            ;
    }, [URL]) */


    return (
        <div>
            <div className="BrowserCardStyle">
                <Ficha ficha={ficha} />
            </div>
        </div>
    )
}