import React from 'react';
import { useSpring, animated } from 'react-spring';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
const Talleres: React.FC = () => {
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ backgroundColor: '#BCA1A1', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}
        className="w-full"
      >
        <animated.h1 className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-black" style={{ fontFamily: 'Lato', ...titleAnimation }}>
          Talleres Empresariales
        </animated.h1>
      </div>
      <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"> {/* Ajusta el valor del margen superior según tus necesidades */}
        <div>
    <Section
    title=""
    description=""
  >
    <VerticalFeatureRow
      title="Modelo de Negocio"
      description={`Esquematizar la forma en que generará utilidades el negocio, suele ser un proceso que nos permite definir aspectos claves del negocio para asegurar que funcione según el plan, sin embargo, en ocasiones la realidad resulta ser muy diferente a lo previsto, esto por lo general se debe a que en un inicio no se validó las necesidades del mercado por lo tanto, el producto o servicio no atiende tal necesidad. Compartiremos contigo el conjunto de herramientas especializadas en la materia, para acompañarte en la Elaboración de tu Modelo de Negocio, que sirva para identificar tu propuesta de valor, saber como hacerla llegar adecuadamente al cliente, diferenciarte de la competencia, hacer rentable y escable el negocio, pero sobre todo, tener una visión clara de como captar, crear y entregar lo que es de valor para el cliente, lo que asegurará el éxito de tu negocio a largo plazo.`}
      image="/2.1.- Modelo de Negocio.PNG"
      imageAlt="First feature alt text"
      button='Cotizar'
      buttonLink='/ContactTalleresEmpresariales'
    />
    <VerticalFeatureRow
      title="Innovación Empresarial"
      description={`La capacidad de adaptación de cualquier organización y su rapidez con la que esta lo haga, son factores claves para su éxito, realizar una continua renovación de los productos o servicios, así como de la organización misma, ayuda a mantenerse presente y en constante evolución. Te instruiremos en el Desarrollo de la Estrategia de Innovación que proporcionará cambios organizacionales, productivos y/o tecnológicos en tu empresa con el fin de hacerla competitiva y eficiente.`}
      image="/2.2.- Innovación Empresarial.PNG"
      imageAlt="Second feature alt text"
      button='Cotizar'
      buttonLink='/ContactTalleresEmpresariales'
    />
    <VerticalFeatureRow
      title="Estrategias Digitales de Venta y Comercialización"
      description={`La tecnología e innovación empresarial que permiten mejorar los procesos internos de la empresa ya no son suficiente ante un mercado en constante evolución, de manera que aumentar las capacidades digitales en todas las áreas de la empresa sobre todo en el área comercial, implica un cambio de paradigma organizacional ya que significa para la empresa un cambio radical en la forma de operar y brindar valor a sus clientes. 
      Estrategias Digitales de Venta y Comercialización
      La tecnología e innovación empresarial que permiten mejorar los procesos internos de la empresa ya no son suficiente ante un mercado en constante evolución, de manera que aumentar las capacidades digitales en todas las áreas de la empresa sobre todo en el área comercial, implica un cambio de paradigma organizacional ya que significa para la empresa un cambio radical en la forma de operar y brindar valor a sus clientes.
      Te expondremos las nuevas oportunidades de generación de ingresos y te guiaremos en la Definición de la Estrategia Digital de Comercialización para desarrollar tu empresa dentro de un nuevo canal digital.`}
      image="/2.3.- Estrategias Digitales de Comercialización.PNG"
      imageAlt="Third feature alt text"
      button='Cotizar'
      buttonLink='/ContactTalleresEmpresariales'
    />
     <VerticalFeatureRow
      title="Planeación Estratégica"
      description={`Contar con un proceso sistemático de desarrollo e implementación de planes para alcanzar los objetivos de la empresa, es indispensable para alcanzar el éxito. Este proceso suele ser un dolor de cabeza cuando la organización no tiene clara la visión o desconoce hasta donde puede llegar.

      Te proporcionamos las herramientas estratégicas, el conocimiento y acompañamiento para que construyas tu plan estratégico, con el que plasmaras el quehacer y el cómo debería hacerse, lo que permitirá a tu empresa se organice y opere de acuerdo a esa visión.`}
      image="/ta4.jpg"
      imageAlt="Third feature alt text"
      button='Cotizar'
      buttonLink='/ContactTalleresEmpresariales'
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

export default Talleres;
