import React, { useState } from "react";

const PaginaDePago = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    rut: "",
    region: "",
    comuna: "",
    localidad: "",
    calle: "",
    numero: "",
    departamento: "",
    telefono: "",
    guardarDireccion: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Compra Realizada");
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-blue-700 text-3xl font-mono font-bold mb-6">
        DATOS PERSONALES
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="text-blue-700 grid grid-cols-1 gap-3">
          <label>
            NOMBRE
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              placeholder="Nombre"
              required
            />
          </label>

          <label>
            APELLIDOS
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              placeholder="Apellidos"
              required
            />
          </label>

          <label>
            RUT
            <input
              type="text"
              name="rut"
              value={formData.rut}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              placeholder="RUT"
              required
            />
          </label>

          <label>
            PAIS
            <select
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              required
            >
              <option value="">PAISES</option>
              <option value="Region 1">CHILE</option>
              <option value="Region 2">ARGENTINA</option>
            </select>
          </label>

          <label>
            REGION
            <select
              name="comuna"
              value={formData.comuna}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              required
            >
              <option value="">REGIONES</option>
              <option value="Comuna 1">REGION DE LOS LAGOS</option>
              <option value="Comuna 2">REGION DE LOS RIOS</option>
            </select>
          </label>

          <label>
            COMUNA
            <input
              type="text"
              name="Comuna"
              value={formData.localidad}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              placeholder="Comuna"
              required
            />
          </label>

          <label>
            CALLE
            <input
              type="text"
              name="calle"
              value={formData.calle}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              placeholder="Calle"
              required
            />
          </label>

          <label>
            NÚMERO
            <input
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              placeholder="Número"
              required
            />
          </label>

          <label>
            Dpto./Casa/Oficina
            <input
              type="text"
              name="tipodecasa"
              value={formData.departamento}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              placeholder="Dpto./Casa/Oficina (opcional)"
            />
          </label>

          <label>
            NÚMERO CELULAR
            <input
              type="tel"
              name="Celular"
              value={formData.telefono}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              placeholder="Numero Celular"
              required
            />
          </label>

          <label>
            CORREO ELECTRONICO
            <input
              type="tel"
              name="Celular"
              value={formData.telefono}
              onChange={handleInputChange}
              className="rounded-full border px-4 py-2 w-full"
              placeholder="Correo electronico"
              required
            />
          </label>
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-orange-400 text-white rounded-full px-6 py-3 font-bold font-mono"
          >
            Finalizar compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaginaDePago;
