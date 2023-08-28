import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://miguelpaez9612.pythonanywhere.com/api/token/', {
        username: username,
        password: password,
      });

      const accessToken = response.data.access;
      console.log('Token de acceso:', accessToken);

      // Aquí puedes guardar el token en el almacenamiento local o en una cookie
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginPage;
