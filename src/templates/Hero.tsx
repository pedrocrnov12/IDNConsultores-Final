import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { Background } from '../background/Background';

import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import WhatsAppChat from '../Whatsapp/Whatsapp';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Agregamos el estado para controlar la visibilidad del menú

  // Define la animación usando useSpring
  const animationProps = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    config: {
      tension: 20,
      friction: 20,
    },
  });

  // Establece visible en true después de que el componente se haya montado para activar la animación
  React.useEffect(() => {
    setVisible(true);
  }, []);

  // Función para alternar la visibilidad del menú en dispositivos móviles
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        {/* Agregamos un botón para mostrar/ocultar el menú en dispositivos móviles */}
        <button
          className="lg:hidden absolute top-7 right-5 z-10"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <NavbarTwoColumns logo={<Logo xl />} showMenu={showMenu}>
          <li>
            <Link href="/">
              <a>Servicios</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Productos</a>
            </Link>
          </li>
          <li>
            <Link href="/AcercaDeNosotros">
              <a>Acerca de Nosotros</a>
            </Link>
          </li>
          <li>
            <Link href="/CasosExito">
              <a>Casos de éxito</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contactanos</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-3">
        <animated.div style={animationProps}>
          <HeroOneButton
            title={
              <>
                {'Aliado estratégico para innovar en Tu \n'}
                <span className="text-primary-500">Negocio u Organización.</span>
              </>
            }
            description=""
            button={
              <Link href="/">
                <a>
                  <WhatsAppChat />
                </a>
              </Link>
            }
          />
          <div></div>
        </animated.div>
      </Section>
    </Background>
  );
};

export { Hero };
