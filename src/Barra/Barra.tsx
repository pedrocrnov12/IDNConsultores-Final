import React, { useState } from 'react';
import Link from 'next/link';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';

const Hero2 = () => {
  const [showMenu, setShowMenu] = useState(false); // Agregamos el estado para controlar la visibilidad del menú

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
    </Background>
  );
};

export { Hero2 };
