import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "/src/Data/asyncMock";

const PurchasePage = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>ERROR</p>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("NECESITA ELEGIR UNA TALLA.");
      return;
    }

    if (quantity > product.stock) {
      alert(`Solo hay ${product.stock} unidades disponibles en stock.`);
      return;
    }

    addToCart({
      ...product,
      selectedSize,
      quantity,
    });

    alert("El producto fue agregado a tu carro");
  };

  return (
    <div className="container p-5 mx-auto">
      <div className="text-blue-700 rounded-full grid grid-cols- md:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-full w-full h-auto"
          />
        </div>

        <div>
          <h1 className="bg-white rounded-3xl py-2 p-3 text-center font-extrabold text-4xl">
            {product.name}
          </h1>
          <p className="mb-10"></p>
          <h4 className="text-center text-2xl text-white font-mono font-bold">
            -PRECIO-
          </h4>
          <p className="text-2xl font-mono font-bold text-center text-white mb-6">
            {product.price}
          </p>

          <div className="mb-4">
            <h4 className="text-white text-center text-xl font-mono font-bold mb-3">
              Eligir Talla
            </h4>
            <div className="flex justify-center space-x-7">
              {product.size.map((size) => (
                <button
                  key={size}
                  className={`border rounded-full  hover:bg-orange-400 bg-white font-bold font-mono px-4 py-2 ${
                    selectedSize === size ? "text-orange-400 " : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  TALLA {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mb-4 space-x-4">
            <h4 className="text-white text-xl font-mono font-bold mb-2">
              Cantidad
            </h4>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="rounded-full justify-center py-1 w-10 p-2"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="flex bg-blue-700 hover:bg-orange-400 rounded-full font-bold font-mono text-white py-4 p-2 mx-auto"
          >
            AGREGAR AL CARRO
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
