import { Routes } from '@angular/router';

/**
 * Route table. Feature pages are lazily loaded as standalone components so each
 * route ships only the code it needs.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Quimiservi · Productos químicos para lavandería industrial',
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./features/products/product-list/product-list').then((m) => m.ProductList),
    title: 'Productos · Quimiservi',
  },
  {
    path: 'productos/:id',
    loadComponent: () =>
      import('./features/products/product-detail/product-detail').then((m) => m.ProductDetail),
    title: 'Producto · Quimiservi',
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    title: 'Nosotros · Quimiservi',
  },
  {
    path: 'cotizacion',
    loadComponent: () => import('./features/quote/quote').then((m) => m.Quote),
    title: 'Cotización · Quimiservi',
  },
  { path: '**', redirectTo: '' },
];
