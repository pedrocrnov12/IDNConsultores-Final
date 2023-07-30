import React, { useState } from 'react';

function ContactLandingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    plan: 'Computadoras', // Valor predeterminado para la categoría principal
    subplan: 'Laptops', // Valor predeterminado para la subcategoría
    product: 'lenovo', // Valor predeterminado para el producto
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contactproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Mensaje enviado con éxito');
      } else {
        setStatus('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Error al enviar el mensaje');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-300 rounded-lg p-4">
      <label htmlFor="firstName" className="block mb-2 text-lg font-semibold">
        Nombres:
      </label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Escriba su nombre completo por favor."
        required
      />

      <label htmlFor="lastName" className="block mt-4 mb-2 text-lg font-semibold">
        Apellidos:
      </label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Escriba sus apellidos por favor."
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      />

      <label htmlFor="email" className="block mt-4 mb-2 text-lg font-semibold">
        Correo Electrónico:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Por este medio lo contactaremos."
        required
      />

      <label htmlFor="phone" className="block mt-4 mb-2 text-lg font-semibold">
        Número de Teléfono:
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Escriba su número de teléfono por favor."
        required
      />

      <label htmlFor="plan" className="block mt-4 mb-2 text-lg font-semibold">
        Seleccione la Categoría Principal:
      </label>
      <select
        id="plan"
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      >
        <option value="Computadoras">Computadoras</option>
        <option value="Electronica">Electronica</option>
        <option value="Hardware">Hardware</option>
        <option value="Accesorios">Accesorios</option>
      </select>

      {/* Mostrar las opciones de subcategorías según la categoría seleccionada */}
      {formData.plan === 'Computadoras' && (
        <>
          <label htmlFor="subplan" className="block mt-4 mb-2 text-lg font-semibold">
            Seleccione la Subcategoría:
          </label>
          <select
            id="subplan"
            name="subplan"
            value={formData.subplan}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            required
          >
            <option value="Laptops">Laptops</option>
            <option value="Tabletas">Tabletas</option>
            {/* Agregar más opciones de subcategorías para 'Computadoras' */}
          </select>
        </>
      )}

      {/* Mostrar las opciones de productos según la categoría y subcategoría seleccionadas */}
      {formData.plan === 'Computadoras' && formData.subplan === 'Laptops' && (
        <>
          <label htmlFor="product" className="block mt-4 mb-2 text-lg font-semibold">
            Seleccione el Producto:
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            required
          >
            <option value="lenovo">Lenovo</option>
            <option value="Laptop Dell Inspiron 5310">Laptop Dell Inspiron 5310</option>
            {/* Agregar más opciones de productos para 'Computadoras' y 'Laptops' */}
          </select>
        </>
      )}

      <label htmlFor="message" className="block mt-4 mb-2 text-lg font-semibold">
        Mensaje:
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        placeholder="Escriba alguna duda o inquietud."
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      ></textarea>

      {status && <p>{status}</p>}
      <button
        type="submit"
        disabled={status === 'Mensaje enviado con éxito'}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600 transition-colors duration-300"
      >
        Enviar
      </button>
    </form>
  );
}

function FormProduct() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-16">Complete los datos y escriba su mensaje</h1>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md">
          <ContactLandingForm />
        </div>
      </div>
    </div>
  );
}

export default FormProduct;
