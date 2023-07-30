import Carousel from "../Carrousel/carruselcar";
import { Footer } from "../templates/Footer";
const Carru = () => {
  const cards = [
    {
      title: 'Profesionalización',
      image: '/1.jpg',
      description: 'El arranque y desarrollo de un negocio no es cosa fácil, la motivación, el compromiso, la creatividad, el esfuerzo y líderazgo de los fundadores y personal clave en las etapas iniciales, resultó en su crecimiento, sin embargo, conquistar nuevos mercados o mantenerse presente en el actual, requieren de un proceso interno dentro de la empresa, que lo mantenga en constante evolución y en una posición competitiva, para ello, se requiere de la estructuración de la misma, dotarla de talento y de la construcción de las bases para la sucesión de los fundadores a las nuevas generaciones.',
    },
    {
      title: 'Automatización y Digitalización de Procesos',
      image: '/2.jpg',
      description: 'Gestionar correctamente las actividades y procesos claves de la empresa, es fundamental para mantener su óptimo funcionamiento, pero reducir los costos, aumentar la productividad, evitar los fallos, acelarar los tiempos de ejecución y sustituir procesos manuales con aplicaciones de software, implica un gran desafio para las organizaciones, sobre todo si desean mantenerse a la vanguardia y competitivas.',
    },
    {
      title: 'Planeación Estratégica',
      image: '/2.jpg',
      description: 'Contar con un proceso sistemático de desarrollo e implementación de planes para alcanzar los objetivos de la empresa, es indispensable para alcanzar el éxito. Este proceso suele ser un dolor de cabeza cuando la organización no tiene clara la visión o desconoce hasta donde puede llegar.',
    },
    {
      title: 'Estandarización de Procesos',
      image: '/1.jpg',
      description: 'Diseñar o actualizar la estructura organizacional, definir el estándar de los procesos y establecer el perfil adecuado de los puestos de trabajo que aseguren el correcto funcionamiento de la empresa, son parte de las tareas estratégicas necesarias para reducir los costos y aumentar la calidad de los productos o servicios que se ofrecen al cliente.',
    },
    
  ];

  return (
    <div>

      <Carousel cards={cards} />

      <div>
      <Footer></Footer>
      
      </div>
    </div>
    
  );
};

export default Carru;
