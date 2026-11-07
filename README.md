# Floratopía

Dashboard corporativo hecho con Electron y React para el proyecto transversal de Desarrollo de interfaces (2º DAM). Esta es la parte 1 del proyecto.

## Qué hace

- En la cabecera aparece el logo, el nombre de la empresa y la hora del sistema, que se actualiza cada segundo.
- En la barra lateral hay tres botones: Personal, Inventario e Incidencias. Al pulsar uno, el panel central cambia de pestaña.
- Cada pestaña carga sus datos de una API pública con una petición GET. Mientras responde, sale el mensaje "Cargando datos del servidor…". Los datos se cargan pulsando un botón dentro de la pestaña.

### Personal

Lista de empleados con una tarjeta por cada uno (nombre, correo y ciudad). Tiene un buscador para filtrar por nombre mientras escribes.

API: https://jsonplaceholder.typicode.com/users

### Inventario

Cuadrícula con 6 productos. Si el precio es mayor de 50$, la tarjeta muestra la etiqueta "Activo de Alto Valor".

API: https://fakestoreapi.com/products?limit=6

### Incidencias

Lista de 8 incidencias. Cada tarjeta cambia de color y de texto según esté resuelta o pendiente (la propiedad `completed`).

API: https://jsonplaceholder.typicode.com/todos?_limit=8

## Tecnologías

- React 18
- TypeScript
- Vite
- Electron

## Cómo arrancarlo

```
npm install
npm run dev
```

Con `npm run build` se genera la aplicación de escritorio en la carpeta `release`.

## Estructura

```
src/
├── assets/       logo
├── component/    piezas pequeñas (AppBtn, Header, Sidebar y las tarjetas)
├── views/        una pantalla por pestaña (Personal, Inventario, Incidencias)
├── styles/       un archivo CSS por componente y uno común para las vistas
├── App.tsx       guarda la pestaña activa y pinta la vista que toca
└── main.tsx
```

