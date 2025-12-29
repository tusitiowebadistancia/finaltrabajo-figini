# TechStore - E-commerce SPA (React + Firebase)

## Descripción
Single Page Application de e-commerce desarrollada con React. Incluye catálogo por categorías, detalle de producto, carrito con estado global (Context) y checkout con generación de orden en Firestore.

## Tecnologías
- React + Vite
- React Router DOM
- Firebase (Firestore)
- Context API

## Funcionalidades
- Listado dinámico de productos desde Firestore
- Filtrado por categoría
- Vista de detalle
- ItemCount con validación por stock y mínimo 1
- Carrito (agregar, eliminar, vaciar, totales)
- Checkout con creación de orden en Firestore
- Renderizado condicional: loaders, sin stock, carrito vacío
- Confirmación final con ID de orden

## Instalación
1. `npm install`
2. Crear `.env` con credenciales de Firebase (VITE_*)
3. `npm run dev`

## Estructura
Componentes separados en contenedores y presentación:
- ItemListContainer / ItemList
- ItemDetailContainer / ItemDetail
