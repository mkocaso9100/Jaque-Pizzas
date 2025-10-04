export enum ProductCategory {
  Clasicas = 'Clásicas',
  Especiales = 'Especiales',
  SinCarne = 'Sin Carne',
  Snacks = 'Los Snacks',
  Bebidas = 'Bebidas',
  Extras = 'Extras',
}

export interface Product {
  id: number;
  name: string;
  description: string;
  prices: { [key: string]: number }; // e.g., { "CH": 100, "M": 150 } or { "default": 40 }
  category: ProductCategory;
  imageUrl: string;
}

export interface CartItem extends Product {
  cartId: string; // A unique identifier for the cart item, e.g., "1-M"
  quantity: number;
  selectedSize: string; // e.g., "M" or "600 ML"
  price: number; // The price for the selected size
}

export interface CustomerInfo {
  name: string;
  address: string;
}
