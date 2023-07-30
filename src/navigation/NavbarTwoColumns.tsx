import React from 'react';

interface INavbarProps {
  logo: React.ReactElement;
  showMenu: boolean;
  children: React.ReactNode;
}

const NavbarTwoColumns: React.FC<INavbarProps> = ({ logo, showMenu, children }) => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    target.classList.add('hover:underline');
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    target.classList.remove('hover:underline');
  };

  return (
    <nav className="flex justify-between items-center bg-gray-900 py-4 px-6 w-full">
      <div className="text-white">{logo}</div>

      <div className={`lg:flex ${showMenu ? 'block' : 'hidden'}`}>
        <ul className="hidden lg:flex items-center space-x-6">
          {React.Children.map(children, (child, index) => (
            <li key={index} className="pl-4">
              {React.cloneElement(child as React.ReactElement, {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                className: 'font-bold text-white', // Agregar las clases font-bold y text-white
              })}
            </li>
          ))}
        </ul>
        <ul className={`lg:hidden ${showMenu ? 'block' : 'hidden'}`}>
          {React.Children.map(children, (child, index) => (
            <li key={index} className="py-2">
              {React.cloneElement(child as React.ReactElement, {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                className: 'font-bold text-white', // Agregar las clases font-bold y text-white
              })}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export { NavbarTwoColumns };
