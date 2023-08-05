import React from 'react';

const Requisitos = () => {
    return (
        <div>
            <h2>Requisitos</h2>
            <div className="requi">
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <div className="card1">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img
                                        src="../media/doc2.jpg"
                                        className="card-img-top"
                                        alt="imagen de documento"
                                        style={{ width: '18rem', height: '15rem' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Identidad</h5>
                                        <p className="card-text">
                                            Acreditar identidad, domicilio real y ser mayor de 21 años. Si sos argentino nativo o por opción debés
                                            presentar copia certificada del DNI. Si sos extranjero, también debés presentar copia certificada del
                                            DNI acreditando la residencia permanente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card2">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img
                                        src="../media/examen1.jpg"
                                        className="card-img-top"
                                        alt="examen físico"
                                        style={{ width: '18rem', height: '15rem' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Exámen Físico</h5>
                                        <p className="card-text">
                                            Conocé cómo obtener tu Certificado Psicofísico mediante el Sistema Abierto y Federal de Emisión de Certificados Psicofísicos (SiAF)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card3">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img
                                        src="../media/poligono.jpg"
                                        className="card-img-top"
                                        alt="hombre practicando tiro"
                                        style={{ width: '18rem', height: '15rem' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Manejo de arma</h5>
                                        <p className="card-text">
                                            Acreditar idoneidad en el manejo de armas de fuego mediante el formulario emitido por la solicitud electrónica, con certificación de un instructor de tiro habilitado y por la entidad de tiro habilitada
                                            donde realizaste el examen. El examen lo tenés que hacer cuando hacés el trámite por primera vez y cada vez que renueves tu credencial.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card4">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img
                                        src="../media/pila.jpg"
                                        className="card-img-top"
                                        alt="pila de papeles"
                                        style={{ width: '18rem', height: '15rem' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Presentar medios de vida lícitos</h5>
                                        <p className="card-text">
                                            Si sos trabajador en relación de dependencia presentá fotocopia certificada de recibo de haberes o
                                            certificación de servicios con firma certificada por entidad bancaria.
                                            Si sos trabajador autónomo o independiente presentá copia certificada del aporte como
                                            monotributista o copia certificada de la presentación ante la AFIP de la declaración del Impuesto
                                            a las Ganancias, ingresos brutos, valor agregado u otros conceptos detallados en la disposición 197/2006.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requisitos;
