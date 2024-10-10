import axios from 'axios';

// Leer la URL base del archivo .env
const baseURL = process.env.REACT_APP_API_BASE_URL;

// Configurar la URL base para todas las solicitudes de Axios
const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptores (opcional): para añadir tokens de autenticación en las cabeceras
api.interceptors.request.use(
    (config) => {
        // Aquí puedes agregar tokens o autenticación si es necesario
        // Ejemplo:
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
