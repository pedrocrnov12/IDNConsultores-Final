import React from 'react';
import { useSpring, animated } from 'react-spring';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
const Desarrollo: React.FC = () => {
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ backgroundColor: '#BCA1A1', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}
        className="w-full"
      >
        <animated.h1 className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-black" style={{ fontFamily: 'Lato', ...titleAnimation }}>
        Licencias TIC´s
        </animated.h1>
      </div>
      <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"> {/* Ajusta el valor del margen superior según tus necesidades */}
        <div>
        <Section
    title=""
    description=""
  >
    <VerticalFeatureRow
  title="Tienda Virtual"
  description={`El mercado ahora es global y cada vez es más competitivo, para sobresalir, los negocios requieren de herramientas digitales que permitan comercializar sus productos y servicios a gran escala y en nuevos mercados.

  En IDN Consultores hemos desarrollado una Tienda Virtual atractiva que impulsarán las ventas de tu negocio.
  
  Esta tecnologia de la información es ideal para:
  - Controlar las existencias y las ventas.
  - Recibir pedidos a cualquier hora y lugar
  - Facilitar el proceso de venta e incrementarlas. 
  
  Nota: Pregunta por las funcionalidades extras sin costo adicional.
  `}
  image="/6.1.- Tienda Virtual.PNG"
  imageAlt="First feature alt text"
  button="Cotizar"
  buttonLink="/PlanesTiendaVirtual"
/>

<VerticalFeatureRow
  title="Punto de Venta"
  description={`En IDN Consultores entendemos el valor de agilizar el proceso de venta y controlar los precios, ya que son dos aspectos vitales para el éxito de todo negocio. 

  Nuestro Punto de Venta lo hemos desarrollado con la intención de fortalecer a su fuerza de ventas y mejorar la atención al cliente.
  
  Esta tecnología de la información es ideal para:
  - Administrar inventarios de productos y servicios.
  - Controlar la caja de tu negocio.
  - Brindar un servicio más rápido y eficiente a tus clientes.
  
  Nota: Pregunta por las funcionalidades extras sin costo adicional.
  `}
  image="/6.2.- Punto de Venta.PNG"
  imageAlt="Feature alt text"
  button="Cotizar"
  buttonLink="/PlanesPuntoDeVenta"
/>

<VerticalFeatureRow
  title="Software de Gestión Comercial, Lógistico y Operativo (G-CLO)"
  description={`Nuestro Software G-CLO es único en el mercado, juntamos lo mejor de nuestro punto de venta, tienda virtual y le hemos agregados funcionalidades comerciales, logísticas y operativas que lo hacen un software realmente interesantes que resolverá problemas como:
  - Vender productos y servicios.
  - Levantar pedidos.
  - Cotizar servicios.
  - Armar paquetes.
  - Realizar reservas.
  - Gestionar proyectos.
  - Controlar inventarios.
  - Operar rutas de entrega.
  - Administrar listas de precios.
  - Registrar la cobranza y saldos pendientes.
  - Analizar patrones de consumo de tus clientes.
  - Dar seguimiento a los pedidos, servicios y/o reservas.
  - Conocer el ingreso por producto, por cliente, por proyecto, etc.
  - Revisar las metricas e indicadores claves de tu negocio.
  - Entre otras múltiples funcionalidades.
  
  Nuestros software es tan flexible que si no tiene la funcionalidad que necesitas, te la desarrollamos. Es una verdadera joya.
  `}
  image="/6.3.- Software de Gestión Comercial, Logístico y Operativo.PNG"
  imageAlt="Feature alt text"
  button="Cotizar"
  buttonLink="/PlanesSoftware"
/>
<VerticalFeatureRow
  title="Facturación"
  description={`¿Buscando una opción confiable, fácil y rápida de facturación? 

  Solo escoge el paquete de folios de timbrado y el resto esta en buenas manos. Paga solo lo que uses en tu Facturación en línea, sin rentas mensuales, genera tus facturas, tímbralas y envíalas por correo a tus clientes.
  
  
  Nota: La vigencia de los folios es por 1 año, acumulables en tu siguiente compra.
  `}
  image="/6.4.- Facturación.PNG"
  imageAlt="Feature alt text"
  button="Cotizar"
  buttonLink="/PlanesFacturacion"
/>
 
    
  </Section>
  <div>
  <Footer></Footer>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo