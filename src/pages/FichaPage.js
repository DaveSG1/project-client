import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import Ficha from '../components/Ficha';


export default function FichaPage() {


    const [rutas, setRutas] = useState([]);


    let URL = "https://run.mocky.io/v3/fd9d2731-666c-4efb-8871-1d14a7e8c38c"

    useEffect(() => {
        fetch(URL)
            .then(r => r.json())
            .then(data => setRutas(data))
            ;
    }, [URL])


    return (
        <div>
            {rutas.map(ruta => {
                return (
                    <div className="BrowserCardStyle">
                        <Ficha ruta={ruta} />
                    </div>)
            })}
        </div>
    )
}