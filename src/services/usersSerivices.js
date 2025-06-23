const API_URL = 'https://tiendagesip-production.up.railway.app/api/login/1';
const VERIFICAR_URL = 'https://tiendagesip-production.up.railway.app/verificar_token'


export const loginUser = async (username, password) => {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                usuario: username,
                clave: password
            }),
        });
        const data = await res.json(); // Espera a que se resuelva la promesa
        return data
    } catch (error) {
        console.error(error);
        return null;
    }
};
export const loginUserNot = async () => {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json(); // Espera a que se resuelva la promesa
        return data
    } catch (error) {
        console.error(error);
        return null;
    }
};


export const verificarToken = async (TOKEN_SESSION) => {
    try {
        const res = await fetch(VERIFICAR_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_SESSION}`
            },
        });
        const data = await res.json();
        return data
    } catch (error) {
        console.error(error);
        return null;
    }
}