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
            <div className="container">
                <h2>Enhorabuena haz comprado rico armamento</h2>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }
    return (
        <div>
            <div className="container text-center">
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <div className="mb-3 col-xl-4 col-md-4 col-sm-4">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre aquí" {...register("nombre")} />
                    </div>
                    <div className="mb-3 col-xl-4 col-md-4 col-sm-4">
                        <label htmlFor="Apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="Apellido" placeholder="Ingrese su apellido aquí" {...register("apellido")} />
                    </div>
                    <div className="mb-3 col-xl-4 col-md-4 col-sm-4">
                        <label htmlFor="Email" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                        <input type="email" className="form-control form-control-sm" id="Email" placeholder="Ingrese su correo aquí" {...register("email")} />
                    </div>
                    <div className="mb-3 col-xl-4 col-md-4 col-sm-4">
                        <label htmlFor="Telefono" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="Telefono" placeholder="Ingrese su número de teléfono aquí" {...register("telefono")} />
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <div className="mb-3 col-xl-1 col-md-6 col-sm-12">
                                <button className="btn btn-success" type="submit">Comprar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout