// pages/index.js
import React from 'react';
import  LoginLayout from '../../components/layouts/LoginLayout';
import Link from 'next/link';
// Nota: Siempre importar etiquetas raras
// import Image from 'next/image';
// import styles from '@/styles/login.module.css';

const LoginPage = () => {
  return (
    <LoginLayout>
      {/* className={styles.} */}
      <div>
        <h1>Bienvenido a la página Login</h1>
        <div>Usuario</div>
        <div>Contraseña</div>
        <div><Link href="/home">Ingresar</Link></div>
        <div><Link href="/recuperar-password">Ovidó Contraseña</Link></div>
      </div>
    </LoginLayout>
  );
};

export default LoginPage;