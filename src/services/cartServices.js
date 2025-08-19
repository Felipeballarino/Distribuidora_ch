import { SEND_ORDER } from "../constants/routes";
import Cookies from 'js-cookie';


export const sendOrder = async (order) => {
    const TOKEN_USER = Cookies.get('user_data_token');

    try {
        const res = await fetch(SEND_ORDER, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_USER}`
            },
        });
        const data = await res.json();
        return data
    } catch (error) {
        console.error(error);
        return null;
    }
}