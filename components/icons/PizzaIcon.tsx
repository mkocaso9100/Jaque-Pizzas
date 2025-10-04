import React from 'react';

const PizzaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2C8.69 2 6 4.69 6 8C6 11.31 8.69 14 12 14C15.31 14 18 11.31 18 8C18 4.69 15.31 2 12 2ZM12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12Z" />
    <path d="M12 15C8.96 15 6.43 16.43 5 18.29L12 22L19 18.29C17.57 16.43 15.04 15 12 15Z" />
    <circle cx="10" cy="7" r="1" />
    <circle cx="14" cy="7" r="1" />
    <circle cx="12" cy="10" r="1" />
  </svg>
);

export default PizzaIcon;