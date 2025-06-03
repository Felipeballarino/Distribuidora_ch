const API_URL = 'https://tiendagesip-production.up.railway.app/api/login/1';


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
