// components/NavbarLogin.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/NavbarMain.module.css';
import '../styles/global.css';


const NavbarMain = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href="/home" className={styles.nav__link}>   
            <h1>
              Bs
            </h1>
          </Link>
        </div>
        <div>
          <Link href="/home" className={styles.nav__link}> 
              asistencias
          </Link>
        </div>
        <div >
          <Link href="/excusas" className={styles.nav__link}>     
              <div>Excusas</div>
          </Link>
        </div>
        <div>
          <Link href="/miqr" className={styles.nav__link}>     
              <div>Mi Qr</div>
          </Link>
        </div>
        <div>
          <Link href="/miperfil" className={styles.nav__link}>     
              <div>Mi Perfil</div>
          </Link>
        </div>
        <div>
          <Link href="/fichas" className={styles.nav__link}>     
              <div>Fichas</div>
          </Link>
        </div>
        <div>
          <Link href="/usuarios" className={styles.nav__link}>     
              <div>Usuarios</div>
          </Link>
        </div>
        <div>
          <Link href="/" className={styles.nav__link}>     
              <div>Salir</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMain;