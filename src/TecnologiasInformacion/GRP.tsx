import React from 'react';
import { useSpring, animated } from 'react-spring';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Footer} from '../templates/Footer';
const Desarrollo: React.FC = () => {
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ backgroundColor: '#BCA1A1', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}
        className="w-full"
      >
        <animated.h1 className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-black" style={{ fontFamily: 'Lato', ...titleAnimation }}>
        Desarrollo de Software
        </animated.h1>
      </div>
      <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"> {/* Ajusta el valor del margen superior según tus necesidades */}
        <div>
        <Section
    title=""
    description="
      "
  >
    <VerticalFeatureRow
  title="Digitalización y Transformación Digital"
  description={`En este mundo cada vez más digitalizado ¿En dónde estás tú?

La tecnología como pilar de la estrategia de innovación en una organización, se observa en la productividad y crecimiento de la misma, ya que brinda múltiples herramientas para mejorar sus procesos internos, abatir sus costos e incrementar sus ingresos, esto, al integrar los procesos claves en ocasiones complejos, en una sola plataforma digital, de manera que, invertir en tecnología es uno de los factores claves para mantenerse presente, a la vanguardia y en constante evolución.

¿Te gustaría tener el control de tu negocio con un par de clics?
¿Desearías dejar de utilizar excel (lo que eso implique) para empezar a emplear herramientas especialmente diseñadas para tu negocio?
¿Te imaginas retirar la carga de las tareas repetitivas a tus colaboradores y con ello evitar errores?
¿Cómo sería para tus clientes que además de la forma tradicional de atención ahora puedan interactuar contigo en un entorno completamente digital?

Las respuestas a estas preguntas las irás descubriendo al digitalizar tu empresa, ya que para ello, se requiere llevarla a través de un proceso de transformación digital donde se integrará paulatinamente la tecnología digital en todas las áreas claves de tu empresa y el resultado de la misma será el incremento de su productividad, optimización de sus procesos y el ofrecimiento de tu propuesta de valor a tus clientes mediante un nuevo canal innovador.

En IDN Consultores nos hemos especializado en el acompañamiento de las empresas en su proceso de transformación digital, esto a través de nuestra metodología que asegura de forma estructurada la digitalización empresarial. Analizamos, diseñamos y Fabricamos el Software a la medida de tus procesos y tus requerimientos para que el software se adapte a ti.

¿Qué puedes obtener del software fabricado a tu medida?
- Digitalizar tu modelo de negocio.
- Ofrecer productos y servicios digitales.
- Integrar a tus operaciones proveedores y clientes en una misma plataforma digital.
- Tener métricas e indicadores de desempeño en tiempo real.
- Acceder a nuevos nichos de mercado.
- Controlar tu negocio desde cualquier dispositivo con acceso a internet.
- Entre otros múltiples beneficios.`}
  image="/5.1.- Digitalización y Transformación Digital.PNG"
  imageAlt="First feature alt text"
  button="Cotizar"
  buttonLink="/ContactDigitalizacion"
/>

<VerticalFeatureRow
  title="Aplicaciones Web"
  description={`¿Necesitas una solución informatica para tu negocio ajustado a tus necesidades?
  ¿Tienes algún proceso clave en tu empresa que deseas automatizar?



Para ambos casos, desarrollar una aplicación web es una alternativa altamente rentable, ya que con ella podrás automatizar, optimizar, agilizar, simplificar, estandarizar y digitalizar tus procesos como:
- Ventas
- Inventarios
- Cobranza
- Rentas
- Fletes
- Compras
- Tesorería
- Producción
- Administración
- Recursos Humanos
- Capacitación
- Entre otros

Una aplicación web no requiere comprar equipos o instalaciones especiales, ya que accedes a ella a través de una plataforma digital alojada en la nube completamente segura, por lo que podrás acceder a ella desde cualquier dispositivo con acceso a internet con tu respectivo usuario y contraseña, como si estuvieras utilizando tu cuenta de correo.

En IDN Consultores nos involucramos en las necesidades y requerimientos que nos compartas de tu negocio, para que a través de nuestra metodología aseguremos el desarrollo y correcta implementación de la aplicación web. Analizamos, diseñamos y fabricamos la Aplicación Web a la medida de tus procesos.

¿Qué puedes obtener de tu aplicación web?
- Facilitar las operaciones de tus colaboradores, proveedores y clientes.
- Resolver los problemas operativos y administrativos de tus procesos manuales.
- Reducir los errores de tus procesos claves.
- Controlar la correcta ejecución de los procesos.
- Monitorear el desempeño de tu negocio.
- Entre otros múltiples beneficios.`}
  image="/5.2.- Aplicaciones Web.PNG"
  imageAlt="Feature alt text"
  button="Cotizar"
  buttonLink="/ContactDigitalizacion"
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

export default Desarrollo