import React from 'react';
import { useSpring, animated } from 'react-spring';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
const Consultoria: React.FC = () => {
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ backgroundColor: '#BCA1A1', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}
        className="w-full"
      >
        <animated.h1 className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-black" style={{ fontFamily: 'Lato', ...titleAnimation }}>
          Consultoria Estrategica
        </animated.h1>
      </div>
      <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"> {/* Ajusta el valor del margen superior según tus necesidades */}
        <div>
        <Section
    title=""
    description=""
  >
    <VerticalFeatureRow
      title="Profesionalización"
      description={`El arranque y desarrollo de un negocio no es cosa fácil, la motivación, el compromiso, la creatividad, el esfuerzo y líderazgo de los fundadores y personal clave en las etapas iniciales, resultó en su crecimiento, sin embargo, conquistar nuevos mercados o mantenerse presente en el actual, requieren de un proceso interno dentro de la empresa, que lo mantenga en constante evolución y en una posición competitiva, para ello, se requiere de la estructuración de la misma, dotarla de talento y de la construcción de las bases para la sucesión de los fundadores a las nuevas generaciones.

      Tenemos la experiencia y el método para gestionar la transformación de tu organización hacia el desarrollo de sus capacidades. Trabajaremos contigo el Plan de Acción previamente generado de acuerdo al diagnóstico inicial que realicemos a tu empresa.`}
      image="/1.1.- Profesionalización.PNG"
      imageAlt="First feature alt text"
      button='Cotizar'
      buttonLink='/contactConsultoriaEstrategica'
    />
    <VerticalFeatureRow
      title="Automatización y Digitalización de Procesos"
      description={`Gestionar correctamente las actividades y procesos claves de la empresa, es fundamental para mantener su óptimo funcionamiento, pero reducir los costos, aumentar la productividad, evitar los fallos, acelarar los tiempos de ejecución y sustituir procesos manuales con aplicaciones de software, implica un gran desafio para las organizaciones, sobre todo si desean mantenerse a la vanguardia y competitivas.

      Diseñamos toda una metodología para ayudarte afrontar este reto y agilizar los tiempos de implementación. Ejecutaremos el Plan de Trabajo establecido para la implementación del sistema que necesites.`}
      image="/1.2.- Automatización y Digitalización de Procesos.PNG"
      imageAlt="Second feature alt text"
      button='Cotizar'
      buttonLink='/contactConsultoriaEstrategica'
    />
    <VerticalFeatureRow
      title="Planeación Estratégica"
      description={`Contar con un proceso sistemático de desarrollo e implementación de planes para alcanzar los objetivos de la empresa, es indispensable para alcanzar el éxito. Este proceso suele ser un dolor de cabeza cuando la organización no tiene clara la visión o desconoce hasta donde puede llegar.

      Te proporcionamos las herramientas estratégicas, el conocimiento y acompañamiento para que construyas tu Plan Estratégico, con el que plasmaras el quehacer y el cómo debería hacerse, lo que permitirá a tu empresa se organice y opere de acuerdo a esa visión.`}
      image="/1.3.- Planeación Estratégica.PNG"
      imageAlt="Third feature alt text"
      button='Cotizar'
      buttonLink='/contactConsultoriaEstrategica'
    />
     <VerticalFeatureRow
      title="Estandarización de Procesos"
      description={`Diseñar o actualizar la estructura organizacional, definir el estándar de los procesos y establecer el perfil adecuado de los puestos de trabajo que aseguren el correcto funcionamiento de la empresa, son parte de las tareas estratégicas necesarias para reducir los costos y aumentar la calidad de los productos o servicios que se ofrecen al cliente.

      Te entregaremos tu Manual de Procedimientos Estandarizados para preservar el conocimiento y experiencia que tu empresa ha generado y sirva de guía para la ejecución de los procesos para el personal actual o el nuevo.|x|`}
      image="/1.4.- Estandarización de Procesos.PNG"
      imageAlt="Third feature alt text"
      button='Cotizar'
      buttonLink='/contactConsultoriaEstrategica'
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

export default Consultoria