// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavbarLandPage.module.css';

const NavbarLandPage = () => {
  return (
    // Encabezado
    <header className={styles.header}>
      <nav className={styles.nav}>
          {/* Contenedor img */}
          <Link href="index.jsx" className={styles.nav__a}>
            <Image  src="/img/logo_negro.png" alt="Logo Símbolo SENA Biometric Service Negro" width={468} height={209} className={styles.nav__img} />
          </Link>
          {/* Contenedor de links  */}
          <div className={styles.container__links}>
              <Link href="/login" className={styles.nav__link}>
              Acceder
              </Link>
              <Link href="/login" className={`${styles.nav__link} ${styles['nav__link--activate']}`}>
              Registrarse
              </Link>
          </div>
      </nav>
    </header>
  );
};

export default NavbarLandPage;
