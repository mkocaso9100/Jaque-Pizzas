import React from 'react';
import PizzaIcon from './icons/PizzaIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-red-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <PizzaIcon className="h-12 w-12 mr-4 text-yellow-400" />
          <div>
            <h1 className="text-4xl tracking-wider uppercase">JAQUE PIZZAS</h1>
            <p className="text-yellow-300">El sabor nos distingue, la calidad nos respalda.</p>
          </div>
        </div>
        <div className="text-center sm:text-right">
            <p className="font-semibold">¡Pide ahora por WhatsApp!</p>
            <p className="text-sm">Rápido, Fácil y Delicioso</p>
        </div>
      </div>
    </header>
  );
};

export default Header;