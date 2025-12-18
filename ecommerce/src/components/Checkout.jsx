import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState(""); // Estado para manejar errores
    const {cart, clear, cartSum} = useContext(CartContext);

    const generarOrden = () => {
        setError(""); // Limpiar errores previos

        if (nombre.length === 0) {
            setError("El nombre es obligatorio.");
            return;
        }

        if (email.length === 0) {
            setError("El email es obligatorio.");
            return;
        }

        if (telefono.length === 0) {
            setError("El teléfono es obligatorio.");
            return;
        }

        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {
            buyer: buyer,
            items: cart, // Enviar el carrito directamente como un array
            date: date,
            total: cartSum()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear();
        }).catch(err => {
            console.error("Error al guardar la orden: ", err);
            setError("Hubo un error al generar la orden. Por favor, intenta nuevamente.");
        });
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="text-center">Finalizar Compra</h1>
                <div className="col-md-3">
                    <form>
                        {error && <div className="alert alert-danger">{error}</div>} {/* Mostrar errores */}
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-9">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => ( 
                                    <tr key={item.index}>
                                        <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                        <td className="text-start align-middle" width="40%">{item.nombre}</td>
                                        <td className="text-center align-middle" width="20%">{item.quantity} x ${item.precio}</td>
                                        <td className="text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Total a Pagar</td>
                                <td className="text-center"><b>${cartSum()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {orderId ? <Navigate to={"/thankyou/" + orderId} /> : ""}
        </div>
    )
}

export default Checkout;