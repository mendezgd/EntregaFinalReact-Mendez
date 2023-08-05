import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../../contexto/CartContext";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/data";
import { useState } from "react";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, calcularTotalCarrito, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {

        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotalCarrito()
        }
        console.log(pedido);
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();

            })

    }

    if (pedidoId) {
        return (
            <div className="container text-center">
                <h2>Gracias por comprar en Peladingui Gunshop</h2>
                <div className="card">
                    <div className="card-body">
                        Tu número de pedido es: {pedidoId}, estará llegando a tu domicilio en aproximadamente 4 días hábiles.
                    </div>
                </div>
            </div>
        )

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-center">
                        <h2>Checkout</h2>
                        <form className="formulario" onSubmit={handleSubmit(comprar)}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre aquí" {...register("nombre")} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Apellido" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="Apellido" placeholder="Ingrese su apellido aquí" {...register("apellido")} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                                <input type="email" className="form-control form-control-sm" id="Email" placeholder="Ingrese su correo aquí" {...register("email")} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Telefono" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" id="Telefono" placeholder="Ingrese su número de teléfono aquí" {...register("telefono")} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Direccion" className="form-label">Direccion de entrega</label>
                                <input type="text" className="form-control" id="Direccion" placeholder="Ingrese su dirección aquí" {...register("direccion")} />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <button className="btn btn-success" type="submit">Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mt-5">
                        <div className="card">
                            <div className="card-header">
                                Items agregados
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    {carrito.map((producto) => (
                                        <p key={producto.id}>
                                            {producto.nombre} - Cantidad: {producto.cantidad}
                                        </p>
                                    ))}
                                    <footer className="blockquote-footer">Total a abonar en puerta: ${calcularTotalCarrito()}</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Checkout