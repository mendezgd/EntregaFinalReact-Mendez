import React, { useEffect, useState } from 'react';
import Cards from '../../components/productos/Cards/Cards';
import './style.css';
import { useFetch } from '../../components/Constantes/Hooks/useFetch';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { categoryId } = useParams();

  const { data: productos } = useFetch('/productos/productos.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const [ProductosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const filtered = productos.filter(
        (producto) => producto.categoria === categoryId
      );
      setProductosFiltrados(filtered);
    } else {
      setProductosFiltrados(productos);
    }
  }, [categoryId, productos]);
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {ProductosFiltrados.map((producto) => (
            <Cards key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
