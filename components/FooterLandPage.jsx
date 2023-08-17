// components/Navbar.js
import React from 'react';
import styles from '@/styles/components/FooterLandPage.module.css';
import '../styles/global.css';

import Link from 'next/link';
import Image from 'next/image';

const FooterLandPage = () => {
  return (
      <div>
        {/* className={styles.} */}
        <footer className={styles.footer}>
          <div className={styles.divfirst}>
              <div className={styles.containerone}>
                <Link href="/Login" className={styles.container__link}>
                  <Image  src="/img/logo_blanco.png" alt="Logo Símbolo SENA Biometric Service Negro" width={468} height={209} className={styles.container__img}/>
                </Link>
              </div>
              <div className={styles.containertwo} >
                <h2 className={styles.containertwo__h2}>
                  Contactanos
                </h2>
                <p className={styles.containertwo__p}>
                  Bogotá 601 343011
                  Línea gratuita nacional
                  018000 91027270
                </p>
                
              </div>
              <div className={styles.containerthree}>
                <h2 className={styles.containerthree__h2}>
                  Sobre nosotros
                </h2>
                <Link href="/Login" className={styles.containerthree__link}>
                  Terminsos
                </Link>
                <br />
                <Link href="/Login" className={styles.containerthree__link}>
                Política de privacidad
                </Link>
              </div>
              <div className={styles.containerfour}>
                <h2 className={styles.containerfour__h2}>
                  Síquenos
                </h2>
                  <Link href="/Login"className={styles.containerfour__link}>
                    <Image  src="/img/facebook.png" alt="Logo Facebook Blanco" width={80} height={80} className={styles.containerfour__img}/>
                  </Link>
                  <Link href="/Login" className={styles.containerfour__link}>
                    <Image  src="/img/instagram.png" alt="Logo Instagram Blanco" width={100} height={80} className={styles.containerfour__img}/>
                  </Link>
              </div>
          </div>
          <div className={styles.divsecond}>
            <p className={styles.divsecond__p}>
              Copyright © 2023 - SENA CDIT / ADSO - 2465417
            </p>
          </div>
        </footer>
        {/* <footer className={styles.footer}>
          <p className={styles.footer__p}>
              Todos los derechos reservados
              Copyright © 2023 - SENA CDIT / ADSO - 2465417
          </p>
        </footer> */}
      </div>
  );
};

export default FooterLandPage;