import React from "react";
import { Link } from "react-router-dom";
import products from "../../Data/asyncMock";

const ItemList = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-white text-4xl text-center mb-20">
        Todos Los Productos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/purchase/${product.id}`}
            key={product.id}
            className="bg-blue-700 text-white rounded-3xl  hover:bg-orange-400 p-5"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 rounded-full"
            />
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-xl font-bold text-white mb-4">{product.price}</p>
            <button className="bg-white text-black font-black px-6 rounded-full py-3">
              Agregar al Carrito
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
