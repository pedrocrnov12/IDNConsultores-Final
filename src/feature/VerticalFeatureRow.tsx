import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  button: string;
  buttonLink: string; // The URL of the page you want to link to
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const [ref, inView] = useInView();
  const [showContent, setShowContent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (inView) {
      setShowContent(true);
    }
  }, [inView]);

  const contentSpringProps = useSpring({
    opacity: showContent ? 1 : 0,
    marginTop: showContent ? 0 : 250,
    config: config.slow,
  });

  return (
    <div
      className="mt-20 flex flex-wrap items-center"
      style={{ cursor: 'pointer', maxWidth: '100%' }}
    >
      <animated.div
  className="w-full sm:w-1/2 px-4 text-center sm:text-left"
  style={{
    transform: `translateY(${showContent ? '0' : '-10px'})`,
    opacity: showContent ? 1 : 2,
  }}
>
  <h3 className="text-3xl text-gray-900 font-semibold text-center" style={{ fontFamily:'Bahnschrift SemiBold SemiConden '}}>{props.title}</h3>
  <div ref={ref}>
    <animated.div
      className="font-tight text-lg"
      style={{ ...contentSpringProps, fontFamily: 'Bahnschrift Light'}}
    >
      {props.description.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </animated.div>
  </div>
  <div className="flex justify-center mt-6 font-bold">
    <Link href={props.buttonLink}>
      <a
        style={{
          backgroundColor: '#4942E4',
          color: '#FFFFFF',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.25rem',
        }}
      >
        {props.button}
      </a>
    </Link>
  </div>
</animated.div>


      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
