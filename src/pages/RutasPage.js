import React, { useContext } from 'react'
import { useEffect } from 'react';
import { GlobalContext } from '../App';


import Ruta from '../components/Ruta'

export default function RutasPage() {


    const { rutas, setRutas } = useContext(GlobalContext);


    let URL = "https://run.mocky.io/v3/fd9d2731-666c-4efb-8871-1d14a7e8c38c"

    useEffect(() => {
        fetch(URL)
            .then(r => r.json())
            .then(data => setRutas(data))
            ;
    }, [rutas, URL, setRutas])


    return (

        <div className="gridRutas" >
            {rutas.map(ruta => {
                return (
                    <div className="BrowserCardStyle">
                        <Ruta ruta={ruta} />
                    </div>)
            })}
        </div>
    )
}