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
    <div id='tic' className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 md:mx-auto max-w-6xl">
      <ServiceCard
          image="/4.- Sitios Web.png"
          title="Sitios Web"
          description="Liberaremos tú página web institucional, landing page y/o sitio para reportes ciudadanos de acuerdo a los requerimientos de información que necesites."
          linkTo="/SitiosWeb"
        />
        <ServiceCard
          image="5.- Desarrollo de Software.png"
          title="Desarrollo de Software          "
          description="Analizamos, diseñamos y fabricamos software a la medida que incremente la productividad de tu negocio, durante este proceso te acompañará un consultor experto que asegurar que tus procesos se digitalicen correctamente en el software"
          linkTo="/GRP"
        />
        <ServiceCard
          image="/11.- Licencias TIC´s Gubernamentales.png"
          title="Licencias TIC´s"
          description="Te ofrecemos nuestras tecnologías desarrolladas a través de un esquema de Licencia Anual para que puedas disponer de ellas de forma inmediata en tu ayuntamiento."
          linkTo="/Licensias"
        />
      </div>
    </div>
  );
};

export default Ti;
