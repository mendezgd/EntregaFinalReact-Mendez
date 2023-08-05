import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Cards({ id, img, nombre, precio, categoria }) {
  return (
    <div className='col'>
      <div className="card" style={{ width: '18rem' }}>
        <img src={`./media/${img}`} alt={nombre} className="card-img-top item" width="288px" height="250px" />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <Link className='detalles' to={`/item/${id}`}>
            <button className='btn btn-secondary'>Detalles</button>
          </Link>
          <p>Precio: (en USD) ${precio}</p>
          <p>Categoria: {categoria}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;