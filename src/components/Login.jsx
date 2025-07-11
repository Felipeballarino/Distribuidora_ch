import { Modal, Input, Button, Typography } from 'antd';
import { useState } from 'react'

import { loginUser } from "../services/usersSerivices"
import { useAuth } from '../context/auth/useAuth';
import Swal from 'sweetalert2'
const { Title, Text } = Typography;


const Login = ({ open, onClose }) => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();


    const handleLogin = async () => {
        setLoading(true);
        const data = await loginUser(usuario, password);
        if (data.success) {
            login(data);
            onClose();
        } else {
            Swal.fire({
                icon: "error",
                title: "Error al iniciar sesión",
                text: "Correo o contraseña incorrectos.",
            });
        }
        setLoading(false);
    };

    return (
        <Modal
            title={null}
            open={open}
            onCancel={onClose}
            footer={null}
            centered
        >
            <div className="text-center space-y-4 p-4">
                <Title level={3}>Bienvenido</Title>
                <Text type="secondary">Ingresá tus datos para continuar</Text>

                <div className="space-y-3 mt-4 text-left">
                    <label className="text-sm text-gray-600 font-bold">Usuario o Email</label>
                    <Input
                        placeholder="User"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        size="large"
                    />

                    <label className="text-sm text-gray-600 font-bold">Contraseña</label>
                    <Input.Password
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="large"
                    />

                    <Button
                        style={{ background: "#d82737", color: "white" }}
                        block
                        size="large"
                        loading={loading}
                        onClick={handleLogin}
                    >
                        Iniciar Sesión
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default Login
