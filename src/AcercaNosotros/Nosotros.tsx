import React from 'react';
import { useSpring, animated } from 'react-spring';

const AboutUs: React.FC = () => {
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500, delay: 200 },
  });

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 500, delay: 400 },
  });

  const titleStyle = {
    fontFamily: 'Bahnschrift SemiBold SemiConden',
  };

  const paragraphStyle = {
    fontFamily: 'Bahnschrift Light',
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
        <div className="md:w-1/2">
          <animated.h2 className="text-5xl font-bold mb-4 text-center" style={{ ...titleAnimation, ...titleStyle }}>
            Quiénes somos
          </animated.h2>
          <animated.p className="text-gray-600 mb-4 text-center md:text-left" style={{ ...textAnimation, ...paragraphStyle }}>
            Somos un equipo de profesionales comprometidos en la transformación digital de las organizaciones aplicando nuestra metodología. Buscamos acercar la tecnología y el conocimiento aplicado al alcance de las organizaciones con el fin de aumentar su productividad e impulsar su crecimiento.
          </animated.p>
        </div>
        <div className="md:w-1/2">
          <animated.img src="/acerca.png" alt="" className="w-full md:w-auto h-64" style={textAnimation} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-1/2">
          <animated.h2 className="font-bold mb-4 text-center text-5xl" style={{ ...titleAnimation, ...titleStyle }}>
            Nuestra historia
          </animated.h2>
          <animated.p className="text-gray-600 mb-4 text-center md:text-left" style={{ ...textAnimation, ...paragraphStyle }}>
            IDN Consultores nace con el fin de ofrecer a las organizaciones opciones de innovación a través de la implementación de tecnologías de la información y conocimiento aplicado. Nuestro propósito será convertirnos en el aliado estratégico que comprenda tu visión de crecimiento y lo haga posible a través de la correcta implementación de nuestras soluciones estratégicas gestionadas mediante la metodología IDN.
          </animated.p>
        </div>
        <div className="md:w-1/2">
          <animated.img src="/0.1.- Metodologia IDN.png" alt="" className="w-full md:w-auto h-80" style={textAnimation} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        <animated.div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm" style={cardAnimation}>
          <animated.img src="/objetivo.png" alt="Imagen 1" className="w-32 h-32 mx-auto mb-4" style={textAnimation} />
          <animated.h3 className="text-xl font-bold mb-2 text-center" style={{ ...titleAnimation, ...titleStyle }}>
            Misión
          </animated.h3>
          <animated.p className="text-gray-600 text-center" style={textAnimation}>
            Brindar consultoría estratégica para la profesionalización de las organizaciones e implementar tecnologías de la información para la digitalización de los procesos.
          </animated.p>
        </animated.div>
        <animated.div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm" style={cardAnimation}>
          <animated.img src="/trofeo.png" alt="Imagen 2" className="w-32 h-32 mx-auto mb-4" style={textAnimation} />
          <animated.h3 className="text-xl font-bold mb-2 text-center" style={{ ...titleAnimation, ...titleStyle }}>
            Visión
          </animated.h3>
          <animated.p className="text-gray-600 text-center" style={textAnimation}>
            Ser en el 2025 un referente en el sureste en innovación y transformación digital, reconocidos por nuestros clientes como la alternativa para lograr sus objetivos estratégicos.
          </animated.p>
        </animated.div>
        <animated.div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm" style={cardAnimation}>
          <animated.img src="/medalla.png" alt="Imagen 3" className="w-32 h-32 mx-auto mb-4" style={textAnimation} />
          <animated.h3 className="text-xl font-bold mb-2 text-center" style={{ ...titleAnimation, ...titleStyle }}>
            Valores
          </animated.h3>
          <animated.p className="text-gray-600 text-center" style={textAnimation}>
            - Calidad en el servicio
            <br />
            - Compromiso con el cliente
            <br />
            - Ética laboral
            <br />
            - Perseverancia
            <br />
            - Comunicación continua
          </animated.p>
        </animated.div>
      </div>
    </div>
  );
};

export default AboutUs;
