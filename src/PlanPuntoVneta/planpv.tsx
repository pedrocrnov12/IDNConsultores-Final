import React from 'react';
import ComparisonTable2 from './cardpv';
import { Footer } from '../templates/Footer';
const Tables2: React.FC = () => {
  const planData1 = {
    planName: 'Estandar',
    prices: ['$3,468/año'],
    features: [
      'Cotizador',
      'Resumen de venta',
      ' Formas de pago',
      'Impresión de nota de venta',
      'Catálogo de productos',
      'Clasificación por categorías',
      'Stock disponible',
      'Alta de clientes',
      'Direcciones de obras',
      'Corte de caja',
      'Reporte de ingresos',
      'Consultas de Notas',
      'Usuarios',
      'Perfil de usuario',
      'Almacenes',
      'Asesoría',
      'Soporte técnico',
      'Mantenimiento a la base de datos',
      'Respaldo a la base de datos'

      
    ],
  };

  const planData2 = {
    planName: 'Profesional',
    prices: ['$4,168/año'],
    features: [
      'Cotizador',
      'Resumen de venta',
      'Formas de pago',
      'Impresión de nota de venta',
      'Descuentos',
      'Acumulación de puntos',
      'Catálogo de productos',
      'Clasificación por categorías',
      'Stock disponible',
      'Inventario físico',
      'Alta de clientes',
      'Direcciones de obras',
      'Política de crédito',
      'Corte de caja',
      'Reporte de ingresos',
      'Consultas de Notas',
      'Usuarios',
      'Perfil de usuario',
      'Almacenes',
      'Clientes',
      'Lector de código de productos',
      'Caja registradora',
      'Asesoría',
      'Aoporte técnico',
      'Mantenimiento a la base de datos',
      'Respaldo a la base de datos'

      
    ],
  };

  return (
    <div className="flex flex-col items-center mt-8 text-center">
      <h2 className="text-4xl font-bold mb-8">Planes  Punto De Venta</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <ComparisonTable2
          planName={planData1.planName}
          prices={planData1.prices}
          features={planData1.features}
        />
        <ComparisonTable2
          planName={planData2.planName}
          prices={planData2.prices}
          features={planData2.features}
        />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Tables2;
