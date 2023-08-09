// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavbarLandPage.module.css';

const NavbarLandPage = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__img}>
          <Image  src="/img/logo_negro2.png" alt="Logo Símbolo SENA y Biometric Service Negro" width={300} height={90}/>
        </div>
        {/* Contenedor de links  */}
        <div className={styles.nav__links}>
          {/* Links a las páginas */}
          <Link href="/login" className={styles.nav__link}>
            Iniciar sesión
          </Link>
          <Link href="/login" className={`${styles.nav__link} ${styles['nav__link--activate']}`}>
            Registrarse
          </Link>
        </div>
      </nav>
    </header>

    // <div className={styles.containerall}>
    //     <header className={styles.header}>
    //       <nav className={styles.nav}>
    //           <div>
    //             <Image src="/img/logo_negro2.png" alt="Logosímbolo SENA Negro" className="nav__img" width={120} height={60}/>
    //           </div>
    //           <div className="nav__links">
    //               <Link href="/login" className="nav__link">
    //                   Iniciar sesión
    //               </Link>
    //               <Link href="/" className="nav__link nav__link--activate">
    //                   Registrarse
    //               </Link>
    //           </div>
    //       </nav>
    //     </header>
    // </div>
  );
};

export default NavbarLandPage;
