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
          Sitios Web
        </animated.h1>
      </div>
      <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"> {/* Ajusta el valor del margen superior según tus necesidades */}
        <div>
        <Section
    title=""
    description=""
  >
    <VerticalFeatureRow
      title="Páginas Web"
      description={`"El diseño de páginas web es el primer gran paso al mundo digital para tu negocio, te mantendrá a la vanguardia y diferenciado de la competencia al permitirle al cliente conocerte mejor y saber más de tus productos y servicios.

      En IDN Consultores te ayudamos a crear tu página web ideal, con la que podrás:
      * Dar a conocer el negocio en el mundo digital.
      * Incrementar presencia en internet y generar prestigio de marca.
      * Promocionar tus productos / servicios."`}
      image="/4.1.- Páginas Web.PNG"
      imageAlt="First feature alt text"
      button='Cotizar'
      buttonLink='/paginasWeb'
    />
    <VerticalFeatureRow
      title="Landing Page"
      description={`La Landing Page es una versión muy sencilla de página web (micrositio), útil para convertir usuarios interesados en clientes potenciales. El micrositio proporcionará información clara, precisa y de valor, para cautivar a los usuarios y mediante un formulario se obtendrían los datos de contacto de los usuarios para posteriormente se cierre en ventas.

      En IDN Consultores te ayudamos a crear tu landing page, con la que podrás:
      * Captar clientes potenciales.
      * Promocionar tus productos / servicios.
      * Conseguir contactos para futuras promociones.`}
      image="/4.2.- Landing Page.PNG"
      imageAlt="Second feature alt text"
      button='Cotizar'
      buttonLink='/LandingPage'
    />
     <VerticalFeatureRow
      title="Blog"
      description={`El blog es una página web especializada para publicar contenido sobre temas de interés con el que se puede interactuar con los lectores y comunicarse con ellos, permitiendo posicionar la marca, comparitr información de valor y generar comunidad.

      En IDN Consultores te ayudamos a crear tu blog, con la que podrás:
      * Atraer clientes potenciales.
      * Reforzar la marcar.
      * Interactuar con la comunidad.`}
      image="/4.3.- Blog.PNG"
      imageAlt="Third feature alt text"
      button='Cotizar'
      buttonLink='/Blog'
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