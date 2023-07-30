import React from 'react';
import classNames from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = (props: IButtonProps) => {
  const btnClass = classNames({
    'inline-block rounded-md text-center': true,
    'text-lg font-semibold py-2 px-4': !props.xl,
    'font-extrabold text-xl py-4 px-6': props.xl,
    'text-white bg-primary-500': true,
    'bg-primary-600': props.xl,
  });

  return (
    <button className={btnClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export { Button };
