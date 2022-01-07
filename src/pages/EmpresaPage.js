import React from 'react'
/* import { useHistory } from 'react-router' */
/* import  from '../components/ ' */

export default function EmpresaPage() {


    /*  const history = useHistory();
 
     function handleClick(e) {
         history.push("/rutas")
     } */


    return (
        <div>

            <div className="headingEmpresa">


                <div className="text">
                    <h2 className="">Sobre nosotros</h2>
                    <span className="span">En los tiempos que corren, que el tiempo cada vez es más limitado, es un fastidio tener que estar buscando en distintas webs para disfrutar de una experiencia de ocio.
                        Por ésto hemos seleccionado para nuestros clientes las mejores y más espectaculares rutas a caballo disponibles en España para que el cliente no se tenga que preocupar de nada, sólamene de disfrutar de la experiencia.
                        De este modo evitamos el tedioso proceso de búsqueda entre cientos de web.
                        Asimismo, coordinamos todo el proceso de reserva de la ruta elegida, únicamente contáctanos, del resto nos encargamos nosotros.</span>
                </div>

                <img className="mainImageEmpresa" src="imagenes/fotoinicio.jpg" alt="" />

            </div>



            <div className="squaredImages">
                <div className="squaredBox">
                    <p>Proporcionamos todo todo el equipo necesario para disfrutar con comodidad y seguridad de la salida.</p>
                    <img className="squared" src="https://perfectvenue.es/wp-content/uploads/2018/04/horse-riding-route-in-mallorca-2.jpg?v=162610863" alt="" />

                </div>
                <div className="squaredBox">
                    <p>Grupos reducidos para ofrecer una atención personalizada, adaptándonos a vuestro nivel.</p>
                    <img className="squared" src="https://perfectvenue.es/wp-content/uploads/2018/04/horse-riding-route-in-mallorca.jpg?v=1626108637" alt="" />

                </div>

                <div className="squaredBox">
                    <p> Todas nuestras rutas están cubiertas por los seguros de Responsabilidad Civil y de Asistencia en Viaje según la normativa vigente.</p>
                    <img className="squared" src="https://d2jhl5pzkfi24b.cloudfront.net/article_image/0001/02/1d5c3bd87cc5d063dbe8a69e86fb22681bd9db0b.jpeg" alt="./" />

                </div>
            </div>


            <div className="moreInfoEmpresa">
                <h2>Info adicional</h2>
                <div>

                    <p>Precios:
                        • Por hora (20€)
                        • ½ jornada (70€)
                        • Dia completo (100€) (incluye picnic con bebida y almuerzo)</p>
                    <p>Los precios por persona incluyen:
                        • Caballos tranquilos y muy fiables.
                        • Guia profesional.
                        • Equipamiento completo.
                        • Grupos reducidos para ofrecer una atención personalizada, adaptándonos a vuestro nivel.</p>
                </div>
            </div>



        </div>
    )
}
