// pages/index.js
import React from 'react';
import  LoginLayout from '../../components/layouts/LoginLayout';
import Link from 'next/link';
// Nota: Siempre importar etiquetas raras
// import Image from 'next/image';
import styles from '@/styles/login.module.css';

const LoginPage = () => {
  return (
    <LoginLayout>
      {/* className={styles.} */}
      <main className={styles.main} >
        <div className={styles.tarjeta}>
          <div className={styles.contenido_tarjeta}>
            <h1 className={styles.h1}>Iniciar sesión</h1>
            <h2 className={styles.h2}>Servicio Biometrico</h2>
            <h3 className={styles.h3}>Documento de identidad:</h3>
            <input  className={styles.input} type="text"/>
            <h3 className={styles.h3}>Contraseña:</h3>
            <input className={styles.input} type="password"/>
            <h4 className={styles.h4}>
              <Link href="/recuperar-password" className={styles.a}>Has olvidado la contraseña</Link>
            </h4>
            
            <Link href="/home"><button className={styles.button}>Ingresar</button></Link>
            
          </div>
        </div>
      </main>
      {/* <div>
        <h1>Bienvenido a la página Login</h1>
        <div>Usuario</div>
        <div>Contraseña</div>
        <div><Link href="/home">Ingresar</Link></div>
        <div><Link href="/recuperar-password">Ovidó Contraseña</Link></div>
      </div> */}
    </LoginLayout>
  );
};

export default LoginPage;