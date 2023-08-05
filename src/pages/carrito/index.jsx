import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexto/CartContext";

const Carrito = () => {
  const { carrito, vaciarCarrito, eliminarDelCarrito, calcularTotalCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div>
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        carrito.map((producto) => (
          <div key={producto.id}>
            <div className="card mb-3" style={{ maxWidth: "900px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`../media/${producto.img}`} alt={producto.nombre} className="card-img-top img-fluid h-100 w-100" />
                </div>
                <div className="col-md-8 d-flex flex-column h-100">
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">stock: {producto.stock}</p>
                    <p className="card-text">precio por unidad: ${producto.precio}</p>
                    <p className="card-text">cantidad agregada: {producto.cantidad}</p>
                    <p>Total: {producto.precio * producto.cantidad}</p>
                    <button onClick={() => eliminarDelCarrito(producto.id)} className="btn btn-secondary btn-sm">Eliminar del carrito</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="container text-center checkout">
        {carrito.length > 0 && (
          <div className="total" style={{ margin: "5px" }}>
            <h5>Total ${calcularTotalCarrito()}</h5>
          </div>
        )}
        {carrito.length > 0 && (
          <button onClick={handleVaciar} className='btn btn-danger btn-sm vaciar'>Vaciar el carrito</button>
        )}
        {carrito.length > 0 && (
          <Link to="/checkout"><button className='btn btn-success btn-sm checkout' style={{ margin: "5px" }}>Finalizar compra</button></Link>
        )}
      </div>
    </div>
  );
};

export default Carrito;
