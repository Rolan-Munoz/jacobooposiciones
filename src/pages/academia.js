import React from "react";

export default function Academia() {
    return (
        <div className="fullpage">
            <div className="section-top w-100 p-2">
                <h2 className="section-top-tittle d-flex w-100 h-100 align-items-center justify-content-center">
                    JAcobo oposiciones
                </h2>
            </div>
            <div className="row academia justify-content-center mx-5 my-5">
                <div className="col-md-5 mb-2 mx-2 academia-main text-center p-5">
                    <h3>¿Que econtraras en <span className="span">JACOBO OPOSICIONES</span>?</h3>
                    <p className="mt-3">En JACOBO OPOSICIONES todo el material es gratuito y el profesor se encarga
                        de entregarte los apuntes que estarán colgados en nuestra pagina RECURSOS.
                        También colgaremos clases con contenidos para que no pierdas el ritmo ni un solo día.
                    </p>

                    <h3 className="mt-5">¿Por qué prepararte con nosotros?</h3>
                    <p className="mt-3">En nuestra academia online todo consiste en aprender basándote en tus conocimientos previos.
                        Por eso nuestros
                        grupos se reducen a un máximo de 4 alumnos para prestar la máxima atención al opositor y conseguir sacar el máximo rendimiento.
                    </p>

                    <h3 className="mt-5">informacion de interés</h3>
                    <p className="mt-3">A través de nuestro email y chat puedes contactar con nosotros para resolver cualquier duda que te surja.
                         Recuerda que también preparamos inglés para SPL e ingresos en Tropa y Marinería
                    </p>
                </div>
                <div className="col-md-3 mb-2 mx-5 academia-aside p-2"> 
                    <div className="aside-academy text-center my-2">
                        <h3>ortografia y gramatica</h3>
                        <div>Aprenderás las reglas fundamentales para localizar cualquier tipo de error en la lengua española</div>
                    </div>
                    <div className="aside-academy text-center my-2">
                        <h3>inglés</h3>
                        <div>Los trucos para aprender a descartar siguiendo nuestros consejos y conseguir la máxima puntuación</div>
                    </div>
                    <div className="aside-academy text-center my-2">
                        <h3>Psicotecnicos</h3>
                        <div>La prueba de psicotécnicos evalúa nuestra capacidad de reacción. Aquí descubrirás cómo afrontar
                             cada pregunta con la máxima celeridad</div>
                    </div>
                </div>
            </div>
        </div>

    )
}