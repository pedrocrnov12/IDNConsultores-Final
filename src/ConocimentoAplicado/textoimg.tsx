import React from 'react';

const ExampleComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className="w-full md:w-1/2 p-4">
        <p className="text-lg md:text-xl mb-4">
          Asesoramos y capacitamos a los dueños de negocios para guiarlos en la profesionalización de sus empresas, esto será posible a través de un consultor experto que impartirá y personalizará el contenido de los talleres para que el conocimiento se aplique a la realidad de tu negocio.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img src="/ruta/imagen.jpg" alt="Imagen" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ExampleComponent;
