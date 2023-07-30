import React from 'react';
import ComparisonTable4 from './cardfact';
import { Footer } from '../templates/Footer';
const Tables4: React.FC = () => {
  const planData1 = {
    planName: 'Estandar',
    prices: [ '$1,000/Tarifa 1'],
    features: [
      'Datos del emisor',
      'Datos del receptor (cliente)',
      'Concepto de facturación',
      'Detalle de la factura',
      'Forma, método y condición de pago',
      'Acumulación de puntos',
      'Uso del CFDI',
      'Envío de CFDI y al correo del cliente',
      'Impresión de CFDI',
      'Alta de productos o servicios a facturar',
      'Clasificador de categorías grupos y familias',
      'Alta de clientes',
      'Dimensiones de obras almacén',
      'Reporte de ingresos',
      'Usuarios, perfil de usuario',
      'Almacenes',
      'Clientes',
      'Asesoría',
      'Sporte técnico',
      'Mantenimiento a la base de datos',
      'Respaldo a la base de datos'

      
    ],
  };

  const planData2 = {
    planName: 'Profesional',
    prices: [ '$1,250/Tarifa 2'],
    features: [
      'Datos del emisor',
      'Datos del receptor (cliente)',
      'Concepto de facturación',
      'Detalle de la factura',
      'Forma, método y condición de pago',
      'Acumulación de puntos',
      'Uso del CFDI',
      'Envío de CFDI y al correo del cliente',
      'Impresión de CFDI',
      'Adicionar información de CFDI',
      'Personalización del formato de impresión de CFDI',
      'Alta de productos o servicios a facturar',
      'Clasificador de categorías grupos y familias',
      'Lista de precio',
      'Alta de clientes',
      'Dimensiones de obras almacén',
      'Políticas de crédito',
      'Reporte de ingresos',
      'Dashboard',
      'Usuarios, perfil de usuario',
      'Almacenes',
      'Clientes',
      'Asesoría',
      'Sporte técnico',
      'Mantenimiento a la base de datos',
      'Respaldo a la base de datos'

      
    ],
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-4xl font-bold mb-8">Planes  Punto De Facturación</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <ComparisonTable4
          planName={planData1.planName}
          prices={planData1.prices}
          features={planData1.features}
        />
        <ComparisonTable4
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

export default Tables4;
