import React from 'react'
/* import  from '../components/ ' */

export default function EmpresaPage() {
    return (
        <div>




            <div className="heading">

                <img className="mainImage" src="https://elegirhoy.com/uploads/fichas-eventos-imagenes/ruta-nocturna.jpg" alt="" />
                <div className="text">
                    <h2 className="">Rutas exclusivas a caballo por toda España</h2>
                    <span className="">Somos una web dedicada al turismo activo. Nuestra principal actividad son las rutas a caballo por España, aptas para cualquier persona y edad, con el fin de ofrecer sensaciones únicas y momentos inolvidables a nuestros clientes.</span>
                </div>

                <div className="roundedImages">
                    <div className="roundedBox">
                        <img className="rounded" src="https://perfectvenue.es/wp-content/uploads/2018/04/horse-riding-route-in-mallorca-2.jpg?v=162610863" alt="" />
                        <p>Hemos seleccionado las mejores y más espectaculares rutas a caballo disponibles en España para que el cliente no se tenga que preocupar de nada, solamente de disfrutar de la experiencia.</p>
                    </div>
                    <div className="roundedBox">
                        <img className="rounded" src="https://perfectvenue.es/wp-content/uploads/2018/04/horse-riding-route-in-mallorca.jpg?v=1626108637" alt="" />
                        <p>Nuestros guías son profesionales nativos de cada región, con lo que, además de garantizar rutas 100% seguras, explican ampliamente los parajes por los que transcurre cada ruta.</p>
                    </div>

                    <div className="roundedBox">
                        <img className="rounded" src="https://d2jhl5pzkfi24b.cloudfront.net/article_image/0001/02/1d5c3bd87cc5d063dbe8a69e86fb22681bd9db0b.jpeg" alt="./" />
                        <p> El cuidado de los caballos es nuestra prioridad, por lo que, aparte de criarlos en entornos ideales, nos aseguramos de que en ningún momento realicen sobreesfuerzos y así disfrutemos todos de la experiencia, ya que sin ellos no sería posible.</p>
                    </div>
                </div>


                <a className="buscarRutas" href="pages/RutasPage.js"> Buscar Rutas</a>
            </div>


        </div>
    )
}
