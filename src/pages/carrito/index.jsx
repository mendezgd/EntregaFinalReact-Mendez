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
      <h1>Carrito</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        carrito.map((producto) => (
          <div key={producto.id}>
              <img src={`../media/${producto.img}`} alt={producto.nombre} className="card-img-top img-fluid" style={{ maxWidth: "500px", maxHeight: "450px" }} />
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
          <Link to="/checkout"><button className='btn btn-success btn-sm checkout' style={{ margin: "10px" }}>Proceder a checkout</button></Link>
        )}
      </div>
    </div>
  );
};

export default Carrito;
