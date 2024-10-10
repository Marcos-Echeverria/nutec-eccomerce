
# E-commerce Frontend Starter Kit

## Introducción

Este proyecto es un **starter kit** para desarrollar aplicaciones **E-commerce** usando **React**. Está diseñado para ser un punto de partida flexible y escalable, con las herramientas y prácticas esenciales para construir una aplicación robusta de E-commerce.

El starter kit incluye la integración de un **carrito de compras**, manejo de **autenticación de usuarios** y la interacción con un backend a través de **API REST**. Se utilizan tecnologías como **React Context API** para el manejo del estado global, **hooks personalizados** para reutilizar lógica de negocio y **Axios** para las solicitudes HTTP.

Este kit es completamente modular, permitiendo una fácil personalización y extensión según las necesidades del proyecto.

### Funcionalidades incluidas

- **Navegación de productos**: Gestión de rutas y navegación entre páginas.
- **Carrito de compras**: Estado global del carrito, con funciones para agregar, eliminar y actualizar productos.
- **Autenticación de usuarios**: Registro, login, y manejo de la sesión a través de `localStorage`.
- **Servicios**: Llamadas a la API para productos, usuarios y carrito de compras, usando **Axios**.
- **Estado global**: Manejo del estado del carrito y autenticación de usuarios con **Context API**.
- **Hooks personalizados**: Abstracciones para la lógica reutilizable de autenticación, carrito y productos.
- **Estilos**: Gestión de estilos con **styled-components**, con soporte para fuentes personalizadas.

### Objetivos del starter kit

- Proporcionar una base sólida para proyectos de E-commerce con **React**.
- Facilitar el manejo del estado global y la lógica de autenticación y carrito.
- Permitir una integración fluida con cualquier backend a través de **API REST**.
- Ser modular y fácilmente personalizable para adaptarse a proyectos específicos.

## Instalación

### Requisitos previos

- **Node.js** (versión LTS recomendada)
- **npm** o **yarn** como gestor de paquetes

### Pasos de instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-repo/ecommerce-starter-kit.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd ecommerce-starter-kit
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea un archivo **`.env`** en la raíz del proyecto para definir las variables de entorno, como la URL de la API:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:8000/api
   ```
5. Ejecuta el servidor de desarrollo:
   ```bash
   npm start
   ```

## Estructura del proyecto

El proyecto sigue una estructura modular que facilita la escalabilidad y el mantenimiento:

```bash
/src
  /assets       # Archivos estáticos (fuentes, imágenes)
  /components   # Componentes reutilizables (átomos, moléculas)
  /context      # Contextos globales para manejo del estado
  /hooks        # Hooks personalizados
  /pages        # Páginas principales del sitio (Home, Products, Checkout)
  /services     # Servicios para interacción con API (Axios)
  /utils        # Funciones auxiliares (formateo de datos, validación)
  /routes       # Manejo de rutas con React Router
```

## Estado global con Context API

### Autenticación (`AuthContext`)

El **AuthContext** maneja el estado global de la autenticación de usuarios. Permite hacer login, logout y gestionar la persistencia de la sesión.

#### Ejemplo de uso:

```javascript
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <nav>
      {isAuthenticated() ? (
        <>
          <p>Bienvenido, {user.name}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <button onClick={() => login({ email: 'user@example.com', password: 'password' })}>
          Iniciar sesión
        </button>
      )}
    </nav>
  );
};
```

### Carrito de compras (`CartContext`)

El **CartContext** gestiona el estado del carrito de compras. Permite agregar, eliminar y actualizar productos en el carrito, y mantiene el estado global en toda la aplicación.

#### Ejemplo de uso:

```javascript
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addProduct } = useCart();

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => addProduct(product.id, 1)}>Añadir al carrito</button>
    </div>
  );
};
```

## Servicios y API

Este starter kit utiliza **Axios** para interactuar con una **API REST**. Los servicios se encargan de manejar la comunicación con el backend.

### `userService.js`

Maneja la autenticación de usuarios con la API.

```javascript
import api from './api';

export const loginUser = async (credentials) => {
  const response = await api.post('/users/login', credentials);
  return response.data;
};
```

### `productService.js`

Maneja la obtención de productos desde la API.

```javascript
import api from './api';

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};
```

## Estilos

Este starter kit utiliza **styled-components** para gestionar los estilos de los componentes de manera modular. También incluye soporte para fuentes personalizadas que pueden ser cargadas desde la carpeta `assets/fonts`.

## Mejores prácticas y consideraciones

- **Modularidad**: Separación clara de responsabilidades entre componentes, hooks, contextos y servicios.
- **Reutilización**: Uso de **hooks personalizados** para encapsular lógica reutilizable y **Context API** para manejar el estado global.
- **Integración con el backend**: Llamadas a la API estructuradas de manera clara a través de servicios.

## Conclusión

Este starter kit proporciona una base sólida para desarrollar aplicaciones E-commerce con **React**, utilizando las mejores prácticas de estado global, hooks y servicios API. Es modular, escalable y fácil de personalizar para adaptarse a las necesidades de diferentes proyectos.
