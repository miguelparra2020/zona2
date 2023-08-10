// components/Navbar.js
import React from 'react';
import styles from '@/styles/components/FooterLandPage.module.css';
import '../styles/global.css';

const FooterLandPage = () => {
  return (
      <div>
        {/* className={styles.} */}
        <footer className={styles.footer}>
          <p className={styles.footer__p}>
              Todos los derechos reservados
              Copyright © 2023 - SENA CDIT / ADSO - 2465417
          </p>
        </footer>
      </div>
  );
};

export default FooterLandPage;