import React from 'react';
import ComparisonTable3 from './cardsg';
import { Footer } from '../templates/Footer';
const Tables3: React.FC = () => {
  const planData1 = {
    planName: 'Estandar',
    prices: [ '$4,668/año'],
    features:  [
      'Cotizador de productos y servicios',
      'Resumen de venta',
      'Formas de pago',
      'Comprobante de compra',
      'Catálogo',
      'Clasificador de categorías grupos y familias',
      'Listas de precio',
      'Control de inventario',
      'Surtido y entrega de productos',
      'Registro de cobranza',
      'Consulta de saldos',
      'Direcciones de obras o almacén',
      'Usuarios',
      'Perfil de usuario',
      'Almacenes',
      'Clientes',
      'Asesoría',
      'Mantenimiento a la base de datos',
      'Espaldo a la base de datos'

      
    ],
  };

  const planData2 = {
    planName: 'Profesional',
    prices: [ '$5,388/año'],
    features: [
      'Cotizador de productos y servicios',
      'Levantar pedidos',
      'Realizar reservas',
      'Armar paquetes',
      'Resumen de venta',
      'Formas de pago',
      'Dar seguimiento a los pedidos servicios o reservas',
      'Gestionar proyectos',
      'Comprobante de compra',
      'Descuentos',
      'Acumulación de puntos',
      'Catálogo',
      'Clasificador de categorías grupos y familias',
      'Listas de precio',
      'Control de inventario',
      'Rutas de entrega',
      'Inventario físico',
      'Surtido y entrega de productos',
      'Cuenta cliente',
      'Cotizador de productos y servicios',
      'Dar seguimiento a los pedidos',
      'Dashboard,',
      'Registro de cobranza',
      'Consulta de saldos',
      'Direcciones de obras o almacén',
      'Política de crédito',
      'Reporte de ingresos',
      'Usuarios',
      'Perfil de usuario',
      'Almacenes',
      'Clientes',
      'Comercial',
      'Logística',
      'Operativo',
      'Asesoría',
      'Mantenimiento a la base de datos',
      'Espaldo a la base de datos'

      
    ],
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-4xl font-bold mb-8">Planes De Software de Gestión Comercial, Lógistico y Operativo G-CLO
</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <ComparisonTable3
          planName={planData1.planName}
          prices={planData1.prices}
          features={planData1.features}
        />
        <ComparisonTable3
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

export default Tables3;
