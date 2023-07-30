import Link from 'next/link';
import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            <Link href="https://www.facebook.com/idnconsultores?mibextid=LQQJ4d">
              <a style={{ textAlign: "center" }}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </a>
            </Link>
          </>
        }
      >
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Servicios</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Nosotros</a>
          </Link>
        </li>
        
      </CenteredFooter>
      <p style={{ textAlign: "center", fontSize: "large", color: "black" }}>
        Calle 55 No 274 por 46 y 48
        Colonia Cordemex. C.P. 97110
        Mérida, Yucatán, México
      </p>
      <br />
      <p style={{ textAlign: "center", fontStyle: "oblique" }}>
    Copyright © Todos los Derechos Reservados IDN Software Y Empresas S.A.P.I. De C.V. México 2016 - 2022 |{' '}
    <Link href={"/AvisoDePrivacidad"}>
      <span style={{ color: "blue" }}>Aviso de privacidad</span>
    </Link>
  </p>
    </Section>
    <style jsx>{`
      .centered-footer ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    `}</style>
  </Background>
);

export { Footer };