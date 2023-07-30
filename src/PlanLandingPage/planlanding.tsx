import React from 'react';
import ComparisonTable from './PlanLP';
import { Footer } from '../templates/Footer';
const Tables6: React.FC = () => {
  const planData1 = {
    planName: 'Estandar',
    prices: ['$1500'],
    features: [
      'Titulo',
      'imagen o video',
      'Descripcion',
      'Beneficios o carcteristicas',
      'Formulario con boton de llamada a la accion ',
      'Link a redes sociales',
      'Logo del cliente con acceso a su pagina web',
      'Aviso de privacidad',
      'Responsivo',
      'Soporte técnico',
    
      
    ],
  };

  
  

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-4xl font-bold mb-8">Landing Page </h2>
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

export default Tables6;
