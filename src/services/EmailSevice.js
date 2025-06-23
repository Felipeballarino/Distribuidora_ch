import { SEND_EMAIL } from "../constants/routes";

export async function sendEmail(data) {
    console.log("Enviando datos:", data);
    try {
        const dataSend = {
            nombre: data.nombre,
            email: data.email,
            mensaje: data.mensaje,
            destinatario: "pabloch79@hotmail.com"
        };
        const response = await fetch(SEND_EMAIL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dataSend)
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Respuesta del servidor:", result);
        return result;
    } catch (error) {
        console.error("Error en sendEmail:", error);
        return { success: false, statusText: error.message };
    }
}