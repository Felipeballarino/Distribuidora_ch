const apiUrl = import.meta.env.VITE_API_URL;
const userType = import.meta.env.VITE_USER_TYPE;
const sendEmail = import.meta.env.VITE_SEND_EMAIL;


export const API_URL_CATEGORIAS = `${apiUrl}/api/grupos/${userType}`;
export const API_URL_MARCAS = `${apiUrl}/api/marcas/${userType}`;
export const API_URL_PRODUCTOS = `${apiUrl}/api/productos/${userType}`;
export const API_URL_LOGIN = `${apiUrl}/api/login/${userType}`;
export const SEND_ORDER = `${apiUrl}/api/nuevopedido`
export const VERIFICAR_URL = `${apiUrl}/verificar_token`
export const SEND_EMAIL = `${sendEmail}`

