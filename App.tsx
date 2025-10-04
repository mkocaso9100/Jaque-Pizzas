import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import { MENU_ITEMS } from './constants';
import { CartItem, Product, ProductCategory } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback((product: Product, size: string) => {
    const cartId = `${product.id}-${size}`;
    const price = product.prices[size];

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.cartId === cartId);
      if (existingItem) {
        return prevItems.map(item =>
          item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const newItem: CartItem = {
        ...product,
        cartId,
        quantity: 1,
        selectedSize: size,
        price,
      };
      return [...prevItems, newItem];
    });
  }, []);

  const handleUpdateQuantity = useCallback((cartId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const handleRemoveItem = useCallback((cartId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartId !== cartId));
  }, []);

  const renderMenuByCategory = (category: ProductCategory) => (
    <div key={category} className="mb-12">
      <h2 className="text-4xl tracking-tight uppercase text-red-700 mb-6 pb-2 border-b-4 border-red-700">
        {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {MENU_ITEMS.filter(item => item.category === category).map(item => (
          <MenuItem key={item.id} product={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-yellow-50/50">
      <Header />
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-2/3 w-full">
          {Object.values(ProductCategory).map(category => renderMenuByCategory(category))}
        </div>
        <div className="lg:w-1/3 w-full lg:sticky lg:top-8">
          <Cart
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; {new Date().getFullYear()} JAQUE PIZZAS. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;