import Cookies from 'js-cookie';
import { API_URL_PRODUCTOS } from '../constants/routes';


export const getProduct = async () => {
    try {
        const TOKEN_USER = Cookies.get('user_data_token');
        const USER = JSON.parse(Cookies.get('user_data') || '{}');

        const codusuario = USER?.codusuario || 0;

        const res = await fetch(`${API_URL_PRODUCTOS}/${codusuario}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_USER}`
            }
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Error ${res.status}: ${errorText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return []; // Podés devolver un array vacío u otro fallback
    }
};
