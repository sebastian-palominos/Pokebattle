# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Librerias que usamos para el front:
    react-router-dom
    jwt-decode
    boostrap
    react-toastify
Cambios en el back
    .cambios en el modelo obtenerMazoID para que me devuelva mas datos para el modal de ver cartas del mazo
    .cambio en la informacion del token, ahora guarda la fecha de creacion y expiracion
    .Cambios realizados en el módulo Buscar Cartas
    .Se realizaron cambios en el módulo Buscar Cartas para permitir la búsqueda mediante el nombre del atributo y no por .el ID del atributo, como era anteriormente.
    .Se modificó la consulta SQL original, agregando un JOIN con las tablas relacionadas cartas y atributos, lo que permite enlazar el ID del atributo con su nombre.
    .Ahora se pueden hacer búsquedas por el nombre del atributo asociado, y ya no se pueden realizar por ID.
    