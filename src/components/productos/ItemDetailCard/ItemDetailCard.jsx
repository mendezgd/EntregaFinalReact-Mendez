import React from "react";

function ItemDetailCard({
  img,
  nombre,
  precio,
  descripcion,
  categoria,
  stock,
  agregarAlCarrito,
  handleDecrease,
  handleIncrease,
  cantidad,
}) {
  return (
    <div className="card m-1">
      <div className="row g-0">
        <div className="col-md-1">
          <img src={`../media/${img}`} className="img-fluid rounded-start" alt={nombre} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h4 className="card-title">{nombre}</h4>
            <p className="card-text">{descripcion}</p>
            <p className='text'>Categoria: {categoria}</p>
            <p className='text'>Stock: {stock}</p>
          </div>
        </div>
        <div className="col-md-2">
          <p className="card-text text-center m-0 p-0 mb-2">${precio}</p>
          <div className='cardDetailActions'>
            <div className="cantidad-container">
              <button onClick={handleDecrease} className='btn btn-secondary btn-sm'>-</button>
              <span className="cantidad">{cantidad}</span>
              <button onClick={handleIncrease} className='btn btn-secondary btn-sm'>+</button>
            </div>
            <button onClick={agregarAlCarrito} className='btn btn-success btn-sm agregar'>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailCard;
