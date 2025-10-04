import React, { useState, useMemo } from 'react';
import { CartItem, CustomerInfo } from '../types';
import CheckoutForm from './CheckoutForm';
import { WHATSAPP_NUMBER } from '../constants';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, newQuantity: number) => void;
  onRemoveItem: (cartId: string) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(amount);
};

const Cart: React.FC<CartProps> = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({ name: '', address: '' });
  const [paymentMethod, setPaymentMethod] = useState<string>('Efectivo');

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const handleSubmitOrder = () => {
    if (!customerInfo.name.trim() || !customerInfo.address.trim()) {
      alert('Por favor, completa tu nombre y domicilio para la entrega.');
      return;
    }
    if (cartItems.length === 0) {
      alert('Tu carrito está vacío. ¡Agrega algunos productos para continuar!');
      return;
    }

    const orderDetails = cartItems.map(item => {
      const sizeInfo = item.selectedSize !== 'default' ? ` (${item.selectedSize})` : '';
      return `${item.quantity}x ${item.name}${sizeInfo} - ${formatCurrency(item.price * item.quantity)}`;
    }).join('\n');

    const message = `
Hola JAQUE PIZZAS, quisiera hacer el siguiente pedido:
-----------------------------------
${orderDetails}
-----------------------------------
*TOTAL: ${formatCurrency(total)}*

*Datos de Entrega:*
*Nombre:* ${customerInfo.name}
*Domicilio:* ${customerInfo.address}
*Forma de Pago:* ${paymentMethod}

¡Gracias!
    `;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message.trim())}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="flex items-center mb-6">
        <ShoppingCartIcon className="h-8 w-8 text-red-700 mr-3" />
        <h2 className="text-3xl font-bold tracking-wide uppercase text-gray-900">Tu Pedido</h2>
      </div>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
          {cartItems.map(item => (
            <div key={item.cartId} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-600">
                   {item.selectedSize !== 'default' ? `${item.selectedSize} - ` : ''} 
                   {formatCurrency(item.price)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onUpdateQuantity(item.cartId, parseInt(e.target.value, 10))}
                  className="w-16 text-center border rounded"
                />
                <button onClick={() => onRemoveItem(item.cartId)} className="text-red-500 hover:text-red-700 font-bold">X</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
         <div className="text-2xl font-bold text-right mb-6 border-t pt-4">
           <span>Total: </span>
           <span className="text-red-700">{formatCurrency(total)}</span>
         </div>
      )}
      
      <CheckoutForm
        customerInfo={customerInfo}
        setCustomerInfo={setCustomerInfo}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        onSubmitOrder={handleSubmitOrder}
        isCartEmpty={cartItems.length === 0}
      />
    </div>
  );
};

export default Cart;