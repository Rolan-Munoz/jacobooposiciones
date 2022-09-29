import React from "react";

export default function Home() {
  return (
  <div>
    <div className="fullpage p-0">
        <div className="section-top w-100 p-2">
            <h2 className="section-top-tittle d-flex w-100 h-100 align-items-center justify-content-center">
            JAcobo oposiciones
            </h2>
        </div>
          <div className="home-section row mt-5 justify-content-center vw-100">
            <div className="col-8 col-md-2 p-2 main-img m-2"></div>
            <div className="col-11 col-sm-6 py-2 px-4 mt-5 text-center home-presentation">Jacobo Ocaña nació en Sevilla en 1973. Licenciado en Filología Inglesa 
              e Hispánica, comenzó su andadura profesional en Londres desde donde se trasladaría a Madrid y más tarde a tierras andaluzas donde vive en la 
              actualidad. Tras más de veinte años como profesor de idiomas, ortografía y gramática española y psicotécnicos, está 
              capacitado para guiarte hacia el camino del éxito en tu examen de oposición.</div>
          </div>
          <div className="home-section row justify-content-center p-0 m-0 mt-5 mb-5 text-center">
            <div className="col-11 col-md-3 ms-2 mb-2">
              <h3 className="mb-3">ortografía y gramática</h3>
              <p className="text-home-section p-4 mt-4">La lengua de Cervantes y Quevedo es otro motivo de frustración a la hora de encarar un examen de oposición. Es sumamente importante controlar 
                las normas de la RAE tanto en ortografía como en las normas gramaticales de nuestra lengua.</p>
            </div>
            <div className="col-11 col-md-3 mt-5">
              <h3 className="mb-3">INGLES</h3>
              <p className="text-home-section p-4"> La lengua inglesa constituye uno de los escollos más difíciles de controlar cuando se trata de un examen tipo test,
                donde apremia la rápida elección de respuesta.  Con nuestro método aprenderás a descartar opciones inválidas y así obtener la máxima puntuación.</p>
            </div>
            <div className="col-11 col-md-3 mt-5">
              <h3 className="mb-3">psicotécnicos</h3>
              <p className="text-home-section p-4">La prueba de psicotécnicos muestran tu destreza tridimensional, tu lógica intuitiva así como la rápida solución de problemas. Tenemos que aprender  
                a interpretar las preguntas y adquirir los trucos que nos hagan salir victoriosos de tan farragosa prueba.</p>
            </div>
          </div>
      </div>
      <div className="fullpage p-0 main-secondary">
        <div className=" w-75 p-3 m-auto text-center">
          <h3 className="mt-3">Desarrolla tus habilidades y consigue tus objetivos</h3>
          <p className="mt-3">El principal cometido del opositor consiste en interpretar las preguntas del examen 
            y ser capaz de descartar las respuestas erróneas en el menor tiempo posible. 
            Mediante nuestro método conseguiremos aprender los trucos suficientes para conseguir nuestra meta.
          </p>
          <div className="w-100 my-4 pt-4 text-center">
            <a href="/pages/academia" className="home-info-link">leer mas...</a>
          </div>
        </div>
      </div>

      <div className="fullpage p-0 main-contact">
        <div className="home-contact w-75 p-4 m-auto text-center">
          <h3>contacta para mas informacion</h3>
          <div className="w-100 my-4 pt-4 text-center">
            <a href="/pages/Contacto" className="home-contact-link">contactar</a>
          </div>
        </div>
      </div>
  </div>
  
  )
}