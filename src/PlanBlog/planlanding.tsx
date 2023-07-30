import React from 'react';
import ComparisonTable from './PlanLP';
import { Footer } from '../templates/Footer';
const Tables7: React.FC = () => {
  const planData1 = {
    planName: 'Estandar',
    prices: ['$2200'],
    features: [
      'Inicio',
      'Menú (temas)',
      'Galería de blogs',
      'Contacto y el envió a correo electrónico ',
      'Link a redes Sociales ',
      'Aviso de privacidad',
      'Responsivo',
      'Administrador de blog',
      'Título del articulo',
      'imagen o video ',
      'Descripción del articulo ',
      'Compartir en redes sociales ',
      'Descripción del autor',
      'Sección de comentarios  ',
      'Soporte técnico',

    
      
    ],
  };

  
  

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-4xl font-bold mb-8">Blog </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <ComparisonTable
          planName={planData1.planName}
          prices={planData1.prices}
          features={planData1.features}
        />
        
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Tables7;
