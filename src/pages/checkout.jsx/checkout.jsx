import React from "react";

import { CartContext } from "../../contexto/CartContext";

const Checkout = () => {


    return (
        <div>
            <div className="form">
                <div className="mb-3 col-xl-4 col-md-4 col-sm-4">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre aquí" />
                </div>
                <div className="mb-3 col-xl-4 col-md-4 col-sm-4">
                    <label htmlFor="Apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="Apellido" placeholder="Ingrese su apellido aquí" />
                </div>
                <div className="mb-3 col-xl-4 col-md-4 col-sm-4">
                    <label htmlFor="Email" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <input type="email" className="form-control form-control-sm" id="Email" placeholder="Ingrese su correo aquí" />
                </div>
                <div className="mb-3 col-xl-4 col-md-4 col-sm-4">
                    <label htmlFor="Telefono" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="Telefono" placeholder="Ingrese su número de teléfono aquí" />
                </div>
                <div className="mb-3 col-xl-1 col-md-6 col-sm-12">
                    <button className="btn btn-success" type="submit">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout