export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl p-6 border-blue-900 bg-blue-900 rounded-xl mt-20 mb-20">
      <h1 className="text-4xl text-white font-bold text-center mb-8">
        Sobre Nosotros
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl text-white font-semibold mb-4 ">
          Nuestra Misión
        </h2>
        <p className="text-lg text-white leading-relaxed">
          En Tienda Outlet, nuestra misión es proporcionar productos de alta
          calidad a precios accesibles. Nos esforzamos por ofrecer un excelente
          servicio al cliente y una experiencia de compra única.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl text-white font-semibold mb-4">
          Nuestra Historia
        </h2>
        <p className="text-lg text-white leading-relaxed mb-4">
          Fundada en 2020, Tienda Outlet comenzó como una pequeña tienda en
          línea con el objetivo de ofrecer productos de calidad a precios
          competitivos. A lo largo de los años, hemos crecido y expandido
          nuestra oferta, siempre manteniendo nuestro compromiso con la
          satisfacción del cliente.
        </p>
        <p className="text-lg text-white leading-relaxed">
          Hoy en día, Tienda Outlet es reconocida por su amplia variedad de
          productos y su excelente servicio. Estamos orgullosos de haber
          construido una relación sólida con nuestros clientes y de haber
          contribuido a sus vidas diarias.
        </p>
      </section>
    </div>
  );
}
