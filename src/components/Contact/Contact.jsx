export default function ContactPage() {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-blue-900 rounded-3xl shadow-md mt-20 mb-20">
      <h2 className="text-3xl text-center text-white font-bold mb-6">
        Contacto
      </h2>
      <form action="">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Nombre y Apellido
          </label>
          <input
            placeholder="Tu Nombre y Apellido"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500"
            required
            type="text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Telefono
          </label>
          <input
            placeholder="Tu Telefono"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500"
            required
            type="text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Correo Electronico
          </label>
          <input
            placeholder="Tu Correo"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500"
            required
            type="text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Tu Mensaje
          </label>
          <textarea
            rows="4"
            placeholder="Escribe tu mensaje"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500"
            required
            type="text"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-400 focus:outline-white "
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
