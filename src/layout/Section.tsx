import React, { useState, ReactNode, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  const [ref, inView] = useInView();
  const [showContent, setShowContent] = useState(false);

  const contentSpringProps = useSpring({
    opacity: showContent ? 1 : 0,
    marginTop: showContent ? 0 : 20,
  });

  useEffect(() => {
    if (inView) {
      setShowContent(true);
    }
  }, [inView]);

  return (
    <div
      className={`max-w-screen-lg mx-auto px-3 ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
      ref={ref}
    >
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <animated.h2
              className="text-4xl text-gray-900 font-bold"
              style={contentSpringProps}
            >
              {props.title}
            </animated.h2>
          )}
          {props.description && (
            <animated.div
              className="mt-4 md:px-20 font-medium text-2xl"
              style={contentSpringProps}
            >
              {props.description}
            </animated.div>
          )}
        </div>
      )}

      <animated.div style={contentSpringProps}>{props.children}</animated.div>
    </div>
  );
};

export { Section };
