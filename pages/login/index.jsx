import React, { useState } from 'react';
import  LoginLayout from '../../components/layouts/LoginLayout';
import Link from 'next/link';
import styles from '@/styles/login.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://miguelpaez9612.pythonanywhere.com/api/token/', {
        username: username,
        password: password,
      });

      const accessToken = response.data.access;
      console.log('Token de acceso:', accessToken);
      
    // Almacena el token en localStorage o en una cookie
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('usuario', username);

    router.push('/home');

      // Aquí puedes guardar el token en el almacenamiento local o en una cookie
    } catch (error) {
      const usuario = 'sin-usuario';
      localStorage.setItem('usuario', usuario);
      alert("Usuario invalido, por favor revisa sus credenciales")
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <LoginLayout>
      {/* className={styles.} */}
      <main className={styles.main} >
        <div className={styles.tarjeta}>
          <div className={styles.contenido_tarjeta}>
            <h1 className={styles.h1}>Iniciar sesión</h1>
            <h2 className={styles.h2}>Servicio Biometrico</h2>
            <h3 className={styles.h3}>Documento de identidad:</h3>
            <input
              type="text"
              placeholder="Usuario"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <h3 className={styles.h3}>Contraseña:</h3>
            <input
              type="password"
              placeholder="Contraseña"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h4 className={styles.h4}>
              <Link href="/recuperar-password" className={styles.a}>¿Has olvidado la contraseña?</Link>
            </h4>
            
            <button className={styles.button} onClick={handleLogin}>Ingresar</button>
            
          </div>
        </div>
      </main>
    </LoginLayout>
  );
};

export default LoginPage;