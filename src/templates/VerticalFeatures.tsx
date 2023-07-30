import { Section } from '../layout/Section';
import OptionCard from '../cards/cards';
import Ti from '../Ti/ti';
import Home from '../cardsti/cardsti';
import ContactCard from '../contactCard/contac';
import styles from './VerticalFeatures.module.css';

const VerticalFeatures = () => (
  <Section
    title="Principales Servicios"
    description=""
  >
    <div className={styles.container}>
      <div className={styles.optionCardContainer}>
        <OptionCard
          image="/it2.3.jpeg"
          title="Conocimiento Aplicado"
          sectionId='consultoria'
        />
        <OptionCard
          image="/it2.2.jpeg"
          title="tecnologías De La información"
          sectionId='tic'
        />
        <OptionCard
          image="/laptop.jpeg"
          title="Hardware"
          sectionId='consultoria'
        />
        <OptionCard
          image="/impresora.jpeg"
          title="Hardware"
          sectionId='/products'
        />
      </div>
    </div>
    <Ti />
    <Home />
    <ContactCard />
  </Section>
);

export { VerticalFeatures };
