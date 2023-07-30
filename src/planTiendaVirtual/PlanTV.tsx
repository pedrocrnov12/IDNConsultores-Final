import React from 'react';
import ComparisonTable from './cardtv';
import { Footer } from '../templates/Footer';
const IndexPage: React.FC = () => {
  const planData1 = {
    planName: 'Estandar',
    prices: ['$2,268/año'],
    features: [
      'Galería de productos',
      'Carrito de productos',
      'Formas de pago',
      'Comprobante de compra',
      'Catálogo de productos',
      'Clasificación por categorías',
      'Stock disponible',
      'Cuenta cliente',
      'Reporte de ingresos',
      'Seguimiento de compras',
      'Usuarios',
      'Perfil de usuario',
      'Almacenes, asesoría',
      'Soporte técnico',
      'Mantenimiento a la base de datos',
      'Respaldo a la base de datos'
      
    ],
  };

  const planData2 = {
    planName: 'Profesional',
    prices: ['$2,998/mes'],
    features: [
      'Galería de productos',
      'Carrito de productos',
      'Formas de pago',
      'Comprobante de compra',
      'Descuentos',
      'Acumulación de puntos',
      'Catálogo de productos',
      'Clasificación por categorías',
      'Stock disponible',
      'Inventario físico',
      'Cuenta cliente',
      'Historial de compra',
      'Lista de deseos',
      'Comparativo de precios',
      'Reporte de ingresos',
      'Seguimiento de compras',
      'Usuarios',
      'Perfil de usuario',
      'Almacenes, asesoría',
      'Soporte técnico',
      'Mantenimiento a la base de datos',
      'Respaldo a la base de datos'

      
    ],
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-4xl font-bold mb-8">Planes De Tienda Virtual</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <ComparisonTable
          planName={planData1.planName}
          prices={planData1.prices}
          features={planData1.features}
        />
        <ComparisonTable
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

export default IndexPage;
