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
          Desarrollo De Capital Humano
        </animated.h1>
      </div>
      <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"> {/* Ajusta el valor del margen superior según tus necesidades */}
        <div>
        <Section
    title=""
    description=""
  >
    <VerticalFeatureRow
      title="Formación de Líderes"
      description={`Generar un entorno productivo que fomente un ambiente colaborativo y una cultura de trabajo en beneficio de todos, es resultado de trabajar con líderes dentro de tu organización.

      Tenemos el entrenamiento para que esto sea posible, a través de Sesiones Dinámicas Especialemente Diseñadas de acuerdo a las necesidades de capacitación detectadas en tus líderes.
      Entre los temas a tratar en las sesiones está:
- ¿El lider nace o se hace?
- Capacidad de cambio
- Actitud
- Mentalidad positiva
- El cambio depende tí
- Rompiendo paradigmas
- Visión de líder
- Facultamiento y delegación
- Cualidades del líder
- Jefe Vs Líder
- Persuación
- Moticavión
- Comunicación
- Trabajo en equipo
- Liderazgo transformacional
- Entre otras

Sesiones impartidas por un coach ontológico certificado.`}
      image="/3.1.- Formación de Líderes.PNG"
      imageAlt="First feature alt text"
      button='Cotizar'
      buttonLink='/ContactDesarolloCapitalHumano'
    />
    <VerticalFeatureRow
      title="Trabajo en Equipo
      "
      description={`La formación del equipo de trabajo es una de los factores claves para potencializar las capacidades, cualidades y experiencia de tus colaboradores en tu organización.

      Te ofrecemos una serie de Sesiones Personalizadas de acuerdo a los necesidades de tu equipo de trabajo.
      
      Entre los temas a tratar en las sesiones está:
      - Trabajo en equipo 
      - Grupo Vs Equipo
      - Metas
      - Colaboración
      - Respeto
      - Comunicación
      - Sinergía
      - Compromiso
      - Responsabilidad 
      - Gestión del tiempo
      - Servicio
      - Mejora continua
      - Temperamento
      - Manejo del irá
      - Relación con el cliente
      - Entre otras
      
      Sesiones impartidas por un coach ontológico certificado.`}
      image="/3.2.- Trabajo en Equipo.PNG"
      imageAlt="Second feature alt text"
      button='Cotizar'
      buttonLink='/ContactDesarolloCapitalHumano'
    />
    <VerticalFeatureRow
      title="Habilidades Blandas "
      description={`La captación y detección del talento dentro de la organización es uno de los primeros pasos para el desarrollo de los mismos y con ello de la empresa. El Curriculum ya no es suficiente, el conjunto de competencias relacionadas con la personalidad y las relaciones interpersonales han tomado mayor relevancia, ya que de ellas depende la capacidad de los colaboradores para interactuar con otras personas de manera éxitosa y mantener relaciones de alto nivel.

      Impartiremos las Sesiones Personalizadas requeridas por tu equipo de trabajo para aprender resolver problemas más complejos y cumplir con los objetivos y metas propuestos por la empresa. 
      
      Entre los temas a tratar en las sesiones está:
      - Liderazgo
      - Comunicación asertiva
      - Motivación
      - Influencia
      - Creatividad
      - Negociación
      - Honestidad
      - Proactividad
      - Resilencia
      - Trabajo en equipo
      - Empatía
      - Tolerancia
      - Autoestima
      - Manejo del irá
      - Adaptación al cambio
      - Orientación al cliente
      - Espirítu de equipo
      - Toma de decisiones
      - Inteligencia emocional
      - Mindset
      - Entre otras
      
      Sesiones impartidas por un coach ontológico certificado. `}
      image="/3.3.- Habilidades Blandas.PNG"
      imageAlt="Third feature alt text"
      button='Cotizar'
      buttonLink='/ContactDesarolloCapitalHumano'
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

export default Desarrollo;
