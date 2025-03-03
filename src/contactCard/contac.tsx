import { useState } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      action="https://formsubmit.co/2002pc.pc@gmail.com"
      method="POST"
      onSubmit={() => setSubmitted(true)}
      className="bg-gray-200 rounded-lg p-4"
    >
      <label htmlFor="firstName" className="block mb-2">
        Nombres:
      </label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        className="w-full px-4 py-2 rounded-lg border-gray-300"
        required
      />

      <label htmlFor="lastName" className="block mt-4 mb-2">
        Apellidos:
      </label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        className="w-full px-4 py-2 rounded-lg border-gray-300"
        required
      />

      <label htmlFor="email" className="block mt-4 mb-2">
        Correo Electrónico:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full px-4 py-2 rounded-lg border-gray-300"
        required
      />

      <label htmlFor="phone" className="block mt-4 mb-2">
        Número de Teléfono:
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        className="w-full px-4 py-2 rounded-lg border-gray-300"
        required
      />

      <label htmlFor="message" className="block mt-4 mb-2">
        Mensaje:
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full px-4 py-2 rounded-lg border-gray-300 h-32"
        required
      ></textarea>

      {/* Configuración de FormSubmit */}
      <input type="hidden" name="_next" value="http://localhost:3000" />
      <input type="hidden" name="_captcha" value="false" />

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600"
      >
        Enviar
      </button>

      {submitted && (
        <p className="text-green-500 text-sm mt-4">¡Gracias por tu mensaje! 😊</p>
      )}
    </form>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md">
        <h1 className="text-3xl font-sans text-center mb-8">Dinos en qué podemos ayudarte</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
