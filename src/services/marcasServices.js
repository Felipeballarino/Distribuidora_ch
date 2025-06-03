import Cookies from 'js-cookie';

const API_URL = 'https://tiendagesip-production.up.railway.app/api/marcas/1';

export const getMarcas = async () => {
    try {
        const TOKEN_USER = Cookies.get('user_data_token');

        const res = await fetch(API_URL, {
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
        console.error('Error al obtener marcas:', error);
        return []; // Podés devolver un array vacío u otro fallback
    }
}