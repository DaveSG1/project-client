import React from 'react'
import { useState, useEffect } from 'react';
import Reservas from '../components/Reservas';

import Ruta from '../components/Ruta'

export default function RutasPage() {


    const [rutas, setRutas] = useState([]);


    let URL = "https://run.mocky.io/v3/085901a7-d2c6-4f22-8123-cb8fb7504288"

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
                        <Ruta ruta={ruta} />
                    </div>)
            })}
        </div>
    )
}