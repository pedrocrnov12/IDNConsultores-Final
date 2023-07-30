import { AppConfig } from '../utils/AppConfig';
import Link from 'next/link';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '150' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <Link href="/">
      <a className="text-gray-900 inline-flex items-center">
        <img
          src="/png.png" // Reemplaza esta ruta con la ruta o URL del archivo PNG
          alt="Logo"
          width={size}
          height={size}
        />

        <span className={fontStyle}>{AppConfig.site_name}</span>
      </a>
    </Link>
  );
};

export { Logo };
