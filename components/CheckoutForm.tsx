import React from 'react';
import { CustomerInfo } from '../types';

interface CheckoutFormProps {
  customerInfo: CustomerInfo;
  setCustomerInfo: (info: CustomerInfo) => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  onSubmitOrder: () => void;
  isCartEmpty: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  customerInfo,
  setCustomerInfo,
  paymentMethod,
  setPaymentMethod,
  onSubmitOrder,
  isCartEmpty
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  return (
    <div className="space-y-4 border-t-2 border-gray-200 pt-6">
       <h3 className="text-2xl font-bold tracking-wide uppercase text-gray-800 mb-4">Datos de Entrega</h3>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerInfo.name}
          onChange={handleInputChange}
          placeholder="Tu nombre completo"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Domicilio</label>
        <input
          type="text"
          id="address"
          name="address"
          value={customerInfo.address}
          onChange={handleInputChange}
          placeholder="Calle, número, colonia, etc."
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Forma de Pago</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
        >
          <option>Efectivo</option>
          <option>Tarjeta (Terminal)</option>
          <option>Transferencia</option>
        </select>
      </div>
      <button
        onClick={onSubmitOrder}
        disabled={isCartEmpty}
        className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
      >
        Enviar Pedido por WhatsApp
      </button>
    </div>
  );
};

export default CheckoutForm;