import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface MenuItemProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(amount);
};

const MenuItem: React.FC<MenuItemProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizeOptions = Object.keys(product.prices);

  // If there's only one price option (like for snacks), select it by default.
  useEffect(() => {
    if (sizeOptions.length === 1) {
      setSelectedSize(sizeOptions[0]);
    } else {
      setSelectedSize(null); // Reset on product change if multiple sizes
    }
  }, [product, sizeOptions]);

  const handleAddToCartClick = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
    }
  };

  const getDisplayNameForSize = (size: string) => {
    if (size === 'default') return product.name;
    return size;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 tracking-wide uppercase">{product.name}</h3>
        {product.description && (
          <p className="text-gray-600 mt-2 flex-grow">{product.description}</p>
        )}
        <div className="mt-4">
          {sizeOptions.length > 0 && (
             <div className="flex flex-wrap gap-2 mb-4">
              {sizeOptions.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-full text-sm font-semibold transition-colors ${selectedSize === size ? 'bg-red-700 text-white border-red-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                  {getDisplayNameForSize(size)} {formatCurrency(product.prices[size])}
                </button>
              ))}
            </div>
          )}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-bold text-red-700">
              {selectedSize ? formatCurrency(product.prices[selectedSize]) : 'Selecciona'}
            </span>
            <button
              onClick={handleAddToCartClick}
              disabled={!selectedSize}
              className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;