import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Head from 'next/head';
import { FiAward } from 'react-icons/fi';

interface SuccessCase {
  title: string;
  description: string;
  imageUrl: string;
  additionalText?: string;
  subtitle?: string;
}

const successCases: SuccessCase[] = [
  {
    title: 'Consultoría Estratégica',
    description:
      'Con el fin de preservar el conocimiento de los procesos de la organización y eficientar su operación, se documentaron los procesos claves junto con sus descriptivas de puestos e indicadores de desempeño correspondientes, el resultado fue un Manual de Procedimientos Estandarizados el cuál sirve a la organización para su proceso de inducción o para consultas para la adecuada toma de decisión.',
    imageUrl: '/metaltec.jpg',
    additionalText: 'MetalTec Cliente', // Agregamos texto adicional
    subtitle: 'Estandarización de Procesos', // Agregamos un subtítulo opcional
  },
  {
    title: 'Desarrollo de Capital Humano',
    description:
      'Para generar un entorno colaborativo y mejorar el ambiente de trabajo, se diseñó un entrenamiento de 12 sesiones de Formación de Líderes y Trabajo en Equipo con el que se consiguió a viva voz del dueño del negocio, un ambiente más armonioso y un mejoramiento en la actitud de sus colaboradores.',
    imageUrl: '/metaltec.jpg',
    additionalText: 'MetalTec Cliente', // Agregamos texto adicional
    subtitle: 'Formación de Líderes y Trabajo en Equipo', // Agregamos un subtítulo opcional
  },
  {
    title: 'Consultoría Estratégica',
    description:
      'Para generar un entorno colaborativo y mejorar el ambiente de trabajo, se diseñó un entrenamiento de 12 sesiones de Formación de Líderes y Trabajo en Equipo con el que se consiguió a viva voz del dueño del negocio, un ambiente más armonioso y un mejoramiento en la actitud de sus colaboradores.',
    imageUrl: '/alvaro_tours.png',
    additionalText: 'Álvaro Tours Cliente', // Agregamos texto adicional
    subtitle: 'Automatización y Digitalización de Procesos', // Agregamos un subtítulo opcional
  },
  {
    title: 'Desarrollo de Software',
    description:  
      'La reducción de los tiempos para la generación de la cotización del cliente por los tours contratados, tuvo una mejora drástica, ya que se paso de tardar horas o días a tardar un par de minutos, esto fue posible gracias al adecuado dimensionamiento del Software Fabricado producto del diagnóstico de los requerimientos de información.',
      imageUrl: '/alvaro_tours.png',
    additionalText: 'Álvaro Tours Cliente', // Agregamos texto adicional
    subtitle: 'CRM-Cotizador', // Agregamos un subtítulo opcional
  },
  {
    title: 'Licencias TIC´s',
    description:  
      'Liberamos nuestro Punto de Venta Multi-Negocio en su versión estándar en una empresa de más de 40 años de experiencia en la fabricación de materiales para la construcción y materiales a base de poliestireno. El punto de venta mejoró el control interno de las 2 empresas de fabricación y la de comercialización, además facilitó la toma de decisiones estratégicas con nuestro extenso catálogo de Dashboards - BI (herramienta de transformación de la información en conocimiento).',
      imageUrl: '/santa_rosa_fabrica.png',
    additionalText: 'Santa Rosa Fábrica Cliente', // Agregamos texto adicional
    subtitle: 'Punto de Venta y Dashboards', // Agregamos un subtítulo opcional
  },
  {
    title: 'Desarrollo de Software',
    description:  
      'Liberamos el Software Fabricado a la medida del cliente, el cual permitió la digitalización de sus procesos comerciales, logísticos y administrativos en una sola plataforma web, misma a la que los clientes de la rentadora tienen acceso a sus estados de cuenta y a toda la información de las rentas en tiempo real, al igual que los informes correspondientes visualizados en los Dashboards - BI (herramienta de transformación de la información en conocimiento).',
      imageUrl: '/elemeticc.png',
    additionalText: 'Elemetic Cliente', // Agregamos texto adicional
    subtitle: 'Software para la Renta de Equipo de Construcción', // Agregamos un subtítulo opcional
  },
  {
    title: 'Página Web',
    description: `Liberamos la Página Web www.kobamid.mx el cuál tuvo como propósito resaltar los beneficios y las características de las Townhouses del cliente.
      El proyecto consistió en el diseño y desarrollo de la página web personalizada con las siguientes funcionalidades:
      - Homepage con menú de navegación y medios de contacto.
      - Slider con imágenes de alta resolución.
      - Descarga del Brochure de las Townhouses.
      - Vista del recorrido 360° de las instalaciones.
      - Descripción de las Townhouses con opción de visualizar los planos de las plantas.
      - Galería de fotos del exterior, interior, área social, parque, caseta y sección de amenidades.
      - Mapa de ubicación y alrededores.
      - Consulta interactiva de los lotes disponibles.
      - Formulario de contacto.
      - Link de acceso a redes sociales.
      - Chat de WhatsApp integrado a la página.
      - Diseño responsivo (versión web y versión móvil).
      - C-Panel para administración de correos.
      - Dominio y web hosting.
      - Soporte técnico.`,
    imageUrl: '/koba.jpg',
    additionalText: 'Kobamid Cliente', // Agregamos texto adicional
    subtitle: 'Sitio Web Profesional', // Agregamos un subtítulo opcional
  },
  {
    title: 'Administración Eficiente',
    description:  
      'Proporcionamos las herramientas estratégicas, el conocimiento, la metodología y acompañamiento para la construcción de Proyectos Estratégicos alineados al Plan Municipal de Desarrollo, con el fin de plasmar el quehacer y el cómo debería hacerse, lo que permitió al ayuntamiento se organice y opere de acuerdo a una misma visión estratégica.',
      imageUrl: '/ayuntamiento_oxkutzcab.jpg',
    additionalText: 'H. Ayuntamiento de Oxkutzcab Cliente', // Agregamos texto adicional
    subtitle: 'Planeación Estratégica', // Agregamos un subtítulo opcional
  },
  {
    title: 'Administración Eficiente',
    description:  
      'Se diseñaron e impartieron Sesiones Dinámicas para la Formación de Líderes y Trabajo en Equipo a los servidores públicos, con la que se reforzaron los objetivos y alcances que tienen como colaboradores de un ayuntamiento pero sobre todo se hizo hincapié al impacto que esta tiene en la sociedad.',
      imageUrl: '/ayuntamiento_oxkutzcab.jpg',
      additionalText: 'H. Ayuntamiento de Oxkutzcab Cliente',  // Agregamos texto adicional
    subtitle: 'Desarrollo de Capital Humano', // Agregamos un subtítulo opcional
  },
  {
    title: 'Programa de Incubación',
    description:  
      'Formamos, capacitamos y dotamos de herramientas a emprendedores y dueños de negocio para el lanzamiento de sus proyectos y para el mejoramiento de los ya existentes. Todo esto fue posible a través de un serie de Talleres Integrales impartidas pertenecientes al programa de incubación con duración aproximada de 4 meses.',
      imageUrl: '/ayuntamiento_oxkutzcab.jpg',
      additionalText: 'H. Ayuntamiento de Oxkutzcab Cliente',  // Agregamos texto adicional
    subtitle: 'Programa Emprende Tu Negocio', // Agregamos un subtítulo opcional
  },
  
  
];

const SuccessCases: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Casos de Éxito - Nombre de tu proyecto</title>
      </Head>

      <main className="container mx-auto py-8">
        {successCases.map((caseItem, index) => (
          <animated.div
            key={index}
            style={useSpring({
              opacity: hoveredIndex === index ? 0.9 : 1,
              transform: `translateY(${hoveredIndex === index ? -15 : 0}px)`,
            })}
            className="bg-white shadow-md p-4 rounded-md mb-4 flex items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img className="w-32 h-32 rounded-md mr-4" src={caseItem.imageUrl} alt={caseItem.title} />

            <div>
              <h2 className="text-xl mb-2 font-bold" style={{ fontFamily: 'Bahnschrift SemiBold SemiCondensed' }}>
                {caseItem.title}
              </h2>
              {caseItem.subtitle && (
                <div className="flex items-center mb-2">
                  <FiAward className="mr-2 text-yellow-500" />
                  <span className="text-sm text-gray-600">{caseItem.subtitle}</span>
                </div>
              )}
              <p style={{ fontFamily: 'Bahnschrift Light' }}>
                {caseItem.description.split('\n').map((paragraph: string, index: number) => (
                  <React.Fragment key={index}>{paragraph}<br /></React.Fragment>
                ))}
              </p>
              {caseItem.additionalText && (
                <p style={{ fontFamily: 'Bahnschrift SemiBold SemiCondensed' }} className="text-lg text-black-500 font-semibold">{caseItem.additionalText}</p>
              )}
            </div>
          </animated.div>
        ))}
      </main>
    </div>
  );
};

export default SuccessCases;
