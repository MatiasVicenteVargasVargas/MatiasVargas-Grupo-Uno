import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const subtotal = cart.reduce(
    (acc, product) =>
      acc + parseFloat(product.price.replace("$", "").replace(".", "")),
    0
  );

  if (cart.length === 0) {
    return (
      <p className="text-white text-2xl text-center py-16">
        Los productos que agregues apareceran aca
      </p>
    );
  }

  return (
    <div className="container py-10 mx-auto">
      <h2 className="text-white font-mono text-3xl font-bold mb-10">
        Lista de Productos
      </h2>

      <table className="text-white table-auto w-full text-left mb-6">
        <thead>
          <tr className="border-b">
            <th className="p-4">PRODUCTOS</th>
            <th className="p-4">PRECIO</th>
            <th className="p-4">CANTIDAD</th>
            <th className="p-4">ENVIO</th>
            <th className="p-4">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-full w-24 inline-block mr-4"
                />
                <div className="text-center inline-block">
                  <p>{item.name}</p>
                  <p>Talla: {item.selectedSize}</p>
                </div>
              </td>
              <td className="p-4">{item.price}</td>
              <td className="p-4">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="bg-blue-700 rounded-full px-4 py-2 w-16"
                  readOnly
                />
              </td>
              <td className="p-4">Envío a domicilio</td>
              <td className="p-4">{item.price}</td>
              <td className="p-4">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded-full bg-red-700 hover:text-orange-400 text-white font-mono px-4 py-2 font-bold"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mb-8">
        <div className="flex"></div>
        <div>
          <p className="text-white text-xl font-mono font-bold">
            Subtotal: ${subtotal.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex justify-self-end space-x-10">
        <Link
          to="/"
          className="bg-blue-700 hover:bg-orange-400 text-white rounded-full px-6 py-3 font-bold"
        >
          VOLVER AL INICIO
        </Link>

        <Link
          to="/checkout"
          className="bg-blue-700 hover:bg-orange-400 rounded-full text-white px-6 py-3 font-bold"
        >
          COMPRAR
        </Link>
      </div>
    </div>
  );
};

export default Cart;
