import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { loginUserNot } from "../../services/usersSerivices";
import Cookies from "js-cookie";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (data) => {
        Cookies.set('user_data_token', data.token, { expires: 365 * 5 });
        Cookies.set('user_data', JSON.stringify(data.usuario), { expires: 365 * 5 });
        setUser(data.usuario);
    };

    const loginNotUser = async () => {
        try {
            const data = await loginUserNot();
            Cookies.set('user_data_token', data.token, { expires: 365 * 5 });
            Cookies.set('user_data', JSON.stringify(data.usuario), { expires: 365 * 5 });
            setUser(data.usuario);
        } catch (err) {
            console.error("Error en login anónimo", err);
        }
    };

    const logout = async () => {
        Cookies.remove('user_data');
        Cookies.remove('user_data_token');
        await loginNotUser(); // Volver a logearse como anónimo
    };

    useEffect(() => {
        const userCookie = Cookies.get('user_data');

        if (userCookie) {
            setUser(JSON.parse(userCookie));
        } else {
            loginNotUser(); // Si no hay usuario, login anónimo
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
