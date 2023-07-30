import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("myyarnqo");

  if (state.succeeded) {
    return <p className="text-1xl font-sans text-center mb-8">¡Gracias Por Tu Mensaje!😊</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 rounded-lg p-4">
      <label htmlFor="firstName" className="block mb-2">
        Nombres:
      </label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      <ValidationError
        prefix="First Name"
        field="firstName"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor="lastName" className="block mt-4 mb-2">
        Apellidos:
      </label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      <ValidationError
        prefix="Last Name"
        field="lastName"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor="email" className="block mt-4 mb-2">
        Correo Electronico
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor="phone" className="block mt-4 mb-2">
        Numero De Telefono:
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      <ValidationError
        prefix="Phone Number"
        field="phone"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor="message" className="block mt-4 mb-2">
        Mensaje:
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 h-32"
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-500"
      />

      {state.errors.length > 0 && (
        <p className="text-red-500 text-sm mt-4">
          Por favor, complete todos los campos obligatorios.
        </p>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600 transition-colors duration-300"
      >
        Enviar
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md">
        <h1 className="text-3xl font-sans text-center mb-8">Dínos en que podemos ayudarte</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
