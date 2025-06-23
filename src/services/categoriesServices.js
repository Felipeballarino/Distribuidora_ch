import Cookies from 'js-cookie';
import { API_URL_CATEGORIAS } from '../constants/routes';

export const getCategories = async () => {
    try {
        const TOKEN_USER = Cookies.get('user_data_token');

        const res = await fetch(API_URL_CATEGORIAS, {
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
        console.error('Error al obtener categorias:', error);
        return []; // Podés devolver un array vacío u otro fallback
    }
};

