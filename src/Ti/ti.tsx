import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, linkTo }) => {
  const [hovered, setHovered] = useState(false);

  const cardAnimationProps = useSpring({
    transform: hovered ? 'translateY(-10px)' : 'translateY(0px)',
  });

  const buttonAnimationProps = useSpring({
    opacity: hovered ? 1 : 0,
    transform: hovered ? 'translateY(0px)' : 'translateY(10px)',
  });

  return (
    <div
      className={`relative bg-gray-200 shadow-lg rounded-lg p-8 mx-auto flex flex-col justify-between h-full ${hovered ? 'bg-gray-300' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <animated.div style={cardAnimationProps}>
        <img src={image} alt={title} className="w-48 h-48 object-cover mx-auto mb-6" />
        <h3 className="text-2xl font-semibold text-center mb-6">{title}</h3>
        <p className="text-gray-600 text-center mb-10 flex-grow">{description}</p>
      </animated.div>
      <animated.div style={buttonAnimationProps} className="flex justify-center">
        <Link href={linkTo}>
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full">
            Ver más
          </a>
        </Link>
      </animated.div>
    </div>
  );
};

const Ti: React.FC = () => {
  return (
    <div id='consultoria' className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 md:mx-auto max-w-6xl">
        <ServiceCard
          image="/1.- Consultoria Estrategica.png"
          title="Consultoría Estratégica"
          description="Trabajaremos contigo el Plan de Trabajo previamente generado de acuerdo al diagnóstico inicial que realicemos a tu empresa."
          linkTo="/ConsultoriaEstrategica"
        />
        <ServiceCard
          image="/2.- Talleres Empresariales.png"
          title="Talleres Empresariales"
          description="Te capacitaremos y asesoraremos de acuerdo a las estrategías que definamos durante la ejecución de los talleres."
          linkTo="/TalleresEmpresariales" 
        />
        <ServiceCard
          image="/3.- Desarrollo de Capital Humano.png"
          title="Desarrollo de Capital Humano"
          description="Ejecutaremos las sesiones personalizadas que diseñemos de acuerdo a las necesidades de capacitación de tus líderes y equipo de trabajo"
          linkTo="/DesarolloCapitalHumano" 
        />
      </div>
    </div>
  );
};

export default Ti;
