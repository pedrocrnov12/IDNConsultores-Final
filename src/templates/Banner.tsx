import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="En este mundo cada vez mas digitalizado."
      subtitle="¿En donde estas tu?."
      button={
        <Link href="/">
          <a>
            <Button>Empieza hoy</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
