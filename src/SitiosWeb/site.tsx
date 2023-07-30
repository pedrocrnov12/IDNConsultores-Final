import React from 'react';
import PlanCard, { Plan } from './PlanCard';

const Sities: React.FC = () => {
  const plans: Plan[] = [
    {
      name: 'Oro',
      price: 2500,
      features: ['Dominio .com', 'Hosting 3GB', 'Transferencia 10GB', 'Correo ejecutivo',  'Inicio','Quienes somos','Nuestra Hisotria','Mision, vision,  Valores','Listado de productos',
      'Contacto y envío electrónico', 'mapa de ubicación','link a redes sociales','aviso de privacidad',' responsiva','administración de correos','administrador de página',
      'asesorías','soporte técnico','mantenimiento de base de datos','respaldo a base de datos']
    },
    {
      name: 'Platino',
      price: 3700,
      features:['Dominio .com', 'Hosting 3GB', 'Transferencia 10GB', 'Correo ejecutivo',  'Inicio','Quienes somos','Nuestra Hisotria','Mision, vision,  Valores','Listado de productos',
      'Contacto y envío electrónico', 'mapa de ubicación','link a redes sociales','aviso de privacidad',' responsiva','administración de correos','administrador de página','catálogo de productos',
      'asesorías','soporte técnico','mantenimiento de base de datos','respaldo a base de datos']
    },
    {
      name: 'Diamante',
      price: 5100,
      features: ['Dominio .com',  'Correo ejecutivo', 'Hosting 10GB', 'Tranferencia 75GB', 'Inicio','Quienes somos','Nuestra Hisotria','Mision, vision,  Valores','Listado de productos',
      'Contacto y envío electrónico', 'mapa de ubicación','link a redes sociales','aviso de privacidad',' responsiva','administración de correos','administrador de página','catálogo de productos','sección de promociones y descuentos','cambio de idioma','sección para contenido multimedia','galería de proyectos','calendario de eventos',
      'almacenamiento en la nube 1 GB','Blog con administrador','asesorías','soporte técnico','mantenimiento de base de datos','respaldo a base de datos']
    },
  ];

  return (
    <div className="flex justify-center items-center h-120 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-">Planes de Sitios Web</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name}>
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sities;
