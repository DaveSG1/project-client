import React from "react";

export default function EmpresaPage() {  

  return (
    <div>
      <h2 className="empresaTitle">Sobre nosotros</h2>
      <div className="headingEmpresa">
        <div className="text">
          
          <span className="span">
            En los tiempos que corren, que el tiempo cada vez es más limitado,
            es un fastidio tener que estar buscando en distintas webs para
            disfrutar de una experiencia de ocio. Por ésto hemos seleccionado
            para nuestros clientes las mejores y más espectaculares rutas a
            caballo disponibles en España para que el cliente no se tenga que
            preocupar de nada, sólamente de disfrutar de la experiencia. De este
            modo evitamos el tedioso proceso de búsqueda entre cientos de webs.
            Asimismo, coordinamos todo el proceso de reserva de la ruta elegida,
            únicamente contáctanos, del resto nos encargamos nosotros.
          </span>
        </div>

        <img
          className="mainImageEmpresa"
          src="https://images.unsplash.com/photo-1605264522799-1996bdbe5f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9yc2UlMjByaWRpbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>

      <div className="squaredImages">
        <div className="squaredBox">
          <div>
            <p>
              Proporcionamos todo todo el equipo necesario para disfrutar con
              comodidad y seguridad de la salida.
            </p>
          </div>
          <img
            className="squared"
            src="https://images.unsplash.com/photo-1555447421-52e8d51a1ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvcnNlJTIwcmlkaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="squaredBox">
          <div>
            <p>
              Grupos reducidos para ofrecer una atención personalizada,
              adaptándonos al nivel de cada persona.
            </p>
          </div>
          <img
            className="squared"
            src="https://images.unsplash.com/photo-1512073995635-c7001b907e21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>

        <div className="squaredBox">
          <div>
            <p>
              Todas nuestras rutas están cubiertas por los seguros de
              Responsabilidad Civil y de asistencia en viaje requeridos.
            </p>
          </div>
          <img
            className="squared"
            src="https://images.unsplash.com/photo-1579037640797-f5ddded4f30d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvcnNlJTIwcmlkaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="./"
          />
        </div>
      </div>

      <div className="moreInfoEmpresa">
        <h2>Info adicional</h2>
        <div>
          <p>
            Precios: • Por hora (20€) • ½ jornada (70€) • Dia completo (100€)
            (incluye picnic con bebida y almuerzo)
          </p>          
          <p>
            Los precios incluyen: • Caballos tranquilos y muy
            fiables. • Guías profesionales. •Equipamiento completo. 
          </p>
        </div>
      </div>
    </div>
  );
}
