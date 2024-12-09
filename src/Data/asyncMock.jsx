const products = [
  {
    id: 1,
    name: "Nike Dunk Low",
    category: "Zapatillas",
    price: "$199.990",
    image:
      "https://nikeclprod.vtexassets.com/arquivos/ids/207138-800-800?v=637691516202530000&width=800&height=800&aspect=true",
    size: ["39", "41", "42"],
    stock: 20,
  },
  {
    id: 2,
    name: "Air Jordan 4 Retro",
    category: "Zapatillas",
    price: "$748.146",
    image:
      "https://nikeclprod.vtexassets.com/arquivos/ids/832395/CW4555_003_A_PREM.jpg?v=638315352190900000",
    size: ["40", "43", "45"],
    stock: 40,
  },
  {
    id: 3,
    name: "Air Jordan 1 MID",
    category: "Zapatillas",
    price: "$134.990",
    image:
      "https://nikeclprod.vtexassets.com/arquivos/ids/1031206/DQ8426_061_A_PREM.jpg?v=638548410797330000",
    size: ["40", "43", "44"],
    stock: 11,
  },
  {
    id: 4,
    name: "Nike Air Force",
    category: "Zapatillas",
    price: "$119.990",
    image:
      "https://nikeclprod.vtexassets.com/arquivos/ids/160788-800-800?v=637654399741130000&width=800&height=800&aspect=true",
    size: ["39", "40", "41", "42"],
    stock: 2,
  },
  {
    id: 5,
    name: "Nike Air Force 1 '07 LV8",
    category: "Zapatillas",
    price: "$129.990",
    image:
      "https://nikeclprod.vtexassets.com/arquivos/ids/1049612-800-800?v=638551101673500000&width=800&height=800&aspect=true",
    size: ["39", "40", "41", "42"],
    stock: 9,
  },
  {
    id: 6,
    name: "Jordan Stay Loyal 3",
    category: "Zapatillas",
    price: "$122.990",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQRuR3ykr4mpxsYeyHSmD5vopsbPnNV8wskmR3lPd3VR3HEfJm7WjtYly8SPBRFBD45SyciNfoeu2LwEBr3007tXt9FAZaJY-5l87Bo1QbNnmID56Li1HYoA&usqp=CAE",
    size: ["39", "40", "41", "42"],
    stock: 2,
  },
  {
    id: 7,
    name: "Air-Jordan-1-Zoom-CMFT 2",
    category: "Zapatillas",
    price: "$132.990",
    image:
      "https://nikeclprod.vtexassets.com/arquivos/ids/997507-800-800?v=638488867879170000&width=800&height=800&aspect=true",
    size: ["39", "40", "41", "42"],
    stock: 2,
  },
  {
    id: 8,
    name: "Zapatillas Rojas Air Jordan 11",
    category: "Zapatillas",
    price: "$581.810",
    image: "https://i.ebayimg.com/images/g/u20AAOSwYFBjmfqi/s-l500.jpg",
    size: ["39", "40", "41", "42"],
    stock: 2,
  },
];

export const getProductByCategory = (category) => {
  return new Promise((res) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      res(filteredProducts);
    }, 3000);
  });
};

export default products;
