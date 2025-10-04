import { Product, ProductCategory } from './types';

// IMPORTANT: Replace with the actual business WhatsApp number, including the country code without '+' or '00'.
export const WHATSAPP_NUMBER = '5213271015227'; 

export const MENU_ITEMS: Product[] = [
  // Clásicas
  {
    id: 1, name: 'Pepperoni', description: 'Pizza llena de delicioso pepperoni.',
    prices: { 'CH': 100, 'M': 140, 'G': 180, 'Fam': 210 },
    category: ProductCategory.Clasicas, imageUrl: 'https://picsum.photos/id/338/400/300'
  },
  {
    id: 2, name: 'Hawaiana', description: 'Rica pizza preparada con deliciosos trozos doraditos de jamón y piña.',
    prices: { 'CH': 100, 'M': 140, 'G': 180, 'Fam': 210 },
    category: ProductCategory.Clasicas, imageUrl: 'https://picsum.photos/id/201/400/300'
  },
  {
    id: 3, name: 'Carnes Frías', description: 'Para los amantes del jamón y las salchichas.',
    prices: { 'CH': 100, 'M': 140, 'G': 180, 'Fam': 210 },
    category: ProductCategory.Clasicas, imageUrl: 'https://picsum.photos/id/1078/400/300'
  },
  {
    id: 4, name: 'Mexicana', description: 'El rico sabor mexicano compuesto de chorizo, chiles jalapeños y cebolla.',
    prices: { 'CH': 100, 'M': 140, 'G': 180, 'Fam': 210 },
    category: ProductCategory.Clasicas, imageUrl: 'https://picsum.photos/id/488/400/300'
  },
  // Especiales
  {
    id: 5, name: 'Loca', description: 'Deliciosa pizza llena de pepperoni, jamón, champiñones, salchicha, piña, chorizo, elote y cebolla.',
    prices: { 'CH': 125, 'M': 185, 'G': 230, 'Fam': 250 },
    category: ProductCategory.Especiales, imageUrl: 'https://picsum.photos/id/211/400/300'
  },
  {
    id: 6, name: 'Carnes Especial', description: 'Pepperoni, jamón, salchicha, chorizo y tocino.',
    prices: { 'CH': 125, 'M': 185, 'G': 230, 'Fam': 250 },
    category: ProductCategory.Especiales, imageUrl: 'https://picsum.photos/id/788/400/300'
  },
  {
    id: 7, name: 'Pollo Chipotle', description: 'Trocitos de pollo sazonado con aderezo a base de chipotle y queso philadelphia.',
    prices: { 'CH': 130, 'M': 190, 'G': 250, 'Fam': 280 },
    category: ProductCategory.Especiales, imageUrl: 'https://picsum.photos/id/1025/400/300'
  },
  {
    id: 8, name: 'Salchicha Italina', description: 'Atrévete a probar el sabor especial de la salchicha italiana.',
    prices: { 'CH': 100, 'M': 155, 'G': 205, 'Fam': 230 },
    category: ProductCategory.Especiales, imageUrl: 'https://picsum.photos/id/431/400/300'
  },
  {
    id: 9, name: 'Imperial', description: 'Una especialidad con sabores únicos... con pepperoni, salchicha italiana y frescos pimientos morrón y champiñones.',
    prices: { 'CH': 135, 'M': 185, 'G': 230, 'Fam': 250 },
    category: ProductCategory.Especiales, imageUrl: 'https://picsum.photos/id/1060/400/300'
  },
  {
    id: 10, name: 'Martina', description: 'Deliciosa combinación de pepperoni, champiñones, salchicha italiana y tocino.',
    prices: { 'CH': 150, 'M': 195, 'G': 235, 'Fam': 260 },
    category: ProductCategory.Especiales, imageUrl: 'https://picsum.photos/id/575/400/300'
  },
  // Sin Carne
  {
    id: 11, name: 'Vegetariana', description: 'Pizza especial de champiñones frescos, piña, elote y cebolla.',
    prices: { 'CH': 115, 'M': 160, 'G': 200, 'Fam': 230 },
    category: ProductCategory.SinCarne, imageUrl: 'https://picsum.photos/id/250/400/300'
  },
  {
    id: 12, name: 'Atún', description: 'Pizza con sabroso atún acompañado de chile jalapeño y cebolla.',
    prices: { 'CH': 115, 'M': 160, 'G': 200, 'Fam': 230 },
    category: ProductCategory.SinCarne, imageUrl: 'https://picsum.photos/id/234/400/300'
  },
  // Los Snacks
  {
    id: 13, name: 'Papas a la Francesa', description: '',
    prices: { 'default': 40 },
    category: ProductCategory.Snacks, imageUrl: 'https://picsum.photos/id/312/400/300'
  },
  {
    id: 14, name: 'Papas Gajo', description: '',
    prices: { 'default': 45 },
    category: ProductCategory.Snacks, imageUrl: 'https://picsum.photos/id/450/400/300'
  },
  {
    id: 15, name: 'Papas Waffle o Curly', description: '',
    prices: { 'default': 50 },
    category: ProductCategory.Snacks, imageUrl: 'https://picsum.photos/id/203/400/300'
  },
  {
    id: 16, name: 'Aros de Cebolla', description: '',
    prices: { 'default': 40 },
    category: ProductCategory.Snacks, imageUrl: 'https://picsum.photos/id/129/400/300'
  },
  {
    id: 17, name: 'Boneless', description: '4 Salsas a elegir: BBQ, BBQ Hot, Búfalo o Mango Habanero.',
    prices: { 'default': 80 },
    category: ProductCategory.Snacks, imageUrl: 'https://picsum.photos/id/122/400/300'
  },
  // Bebidas
  {
    id: 18, name: 'Refresco 600 ML', description: '',
    prices: { '600 ML': 25 },
    category: ProductCategory.Bebidas, imageUrl: 'https://picsum.photos/id/355/400/300'
  },
  {
    id: 19, name: 'Refresco 1.5L', description: '',
    prices: { '1.5L': 40 },
    category: ProductCategory.Bebidas, imageUrl: 'https://picsum.photos/id/355/400/300'
  },
  {
    id: 20, name: 'Refresco 2L', description: '',
    prices: { '2L': 50 },
    category: ProductCategory.Bebidas, imageUrl: 'https://picsum.photos/id/355/400/300'
  },
  // Extras
  {
    id: 21, name: 'Orilla de Queso', description: 'Añade una deliciosa orilla de queso a tu pizza.',
    prices: { 'Ch': 25, 'M/G': 35 },
    category: ProductCategory.Extras, imageUrl: 'https://picsum.photos/id/219/400/300'
  },
  {
    id: 22, name: 'Tocino', description: 'Añade tocino extra a tu pizza.',
    prices: { 'Ch': 20, 'M/G': 30 },
    category: ProductCategory.Extras, imageUrl: 'https://picsum.photos/id/305/400/300'
  },
  {
    id: 23, name: 'Extra Queso', description: 'Añade más queso a tu pizza.',
    prices: { 'Ch/M': 30, 'G/F': 40 },
    category: ProductCategory.Extras, imageUrl: 'https://picsum.photos/id/292/400/300'
  },
];
