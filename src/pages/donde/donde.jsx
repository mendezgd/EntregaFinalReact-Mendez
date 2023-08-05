import React from 'react';

const Contacto = () => {
  return (

    <div className="container text-center">
      <div className="col">
        <h2>Contacto</h2>
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
          <div className="mb-3 col-xl-4 col-md-4 col-sm-4">
            <div className="input-group">
              <span className="input-group-text">Mensaje</span>
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <div className="mb-3 col-xl-1 col-md-6 col-sm-12">
                <button className="btn btn-primary" type="submit">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
