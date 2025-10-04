import React from 'react';

const ShoppingCartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.828-6.491A1.125 1.125 0 0018.02 6H5.25L5.042 5.231C4.91 4.697 4.475 4.32 3.936 4.32H2.25M7.5 14.25c0-1.657 1.343-3 3-3h3.75"
    />
  </svg>
);

export default ShoppingCartIcon;