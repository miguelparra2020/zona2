// pages/index.js
import React from 'react';
import  LandPageLayout from '../components/layouts/LandPageLayout';
import styles from '@/styles/index.module.css';
// Nota: Siempre importar etiquetas raras
import Image from 'next/image';

const LandPage = () => {
  return (
    <LandPageLayout>
      <main className={styles.main}>
      {/* className={styles.} */}
      <div className={styles.container_nav_back}></div>
        <section className={styles.section}>
          <div className={styles.section__texts}>
            <div className={styles.section__texts_margin}>
              <div className={styles.content_section__title}>
                <h1 className={styles.section__title}>Biometric Service</h1>
              </div>
              <div className={styles.container__p}>
              &quot;Lleve un control exhaustivo de su asistencia mientras inculca el hábito de llegar a tiempo.&quot;
              </div>
            </div>
          </div>
          <div className={styles.section__mockup}>
          <Image className={styles.section__img} src="/img/maqueta.png" alt="Logo Símbolo SENA y Biometric Service Negro" width={1000} height={670}/>
          </div>
        </section>
        <h1 className={styles.h1__info}>Enfocado en aprendices e instructores</h1>

        {/* =================== Sección Tarjetas de información ================ */}
        <section className={styles.sectioncards}>
          <div className={styles.containerone}>
            <div className={styles.cardone}>
              <h2 className={styles.card__title}>Aprendiz</h2>
              <h3 className={styles.card__subtitle}>Comunicación efectiva</h3>
              <p className={styles.card__description}>Comunica tus inconvenientes fácilmente. Anexa excusas, el instructor  las valida, garantizando que puedas continuar con confianza.</p>
            </div>
            <div className={styles.cardone}>
              <h2 className={styles.card__title}>Aprendiz</h2>
              <h3 className={styles.card__subtitle}>Comunicación efectiva</h3>
              <p className={styles.card__description}>Comunica tus inconvenientes fácilmente. Anexa excusas, el instructor  las valida, garantizando que puedas continuar con confianza.</p>
            </div>
          </div>

          <div className={styles.containerone}>
            <div className={styles.cardone}>
                <h2 className={styles.card__title}>Aprendiz</h2>
                <h3 className={styles.card__subtitle}>Comunicación efectiva</h3>
                <p className={styles.card__description}>Comunica tus inconvenientes fácilmente. Anexa excusas, el instructor  las valida, garantizando que puedas continuar con confianza.</p>
            </div>
            <div className={styles.cardone}>
              <h2 className={styles.card__title}>Aprendiz</h2>
              <h3 className={styles.card__subtitle}>Comunicación efectiva</h3>
              <p className={styles.card__description}>Comunica tus inconvenientes fácilmente. Anexa excusas, el instructor  las valida, garantizando que puedas continuar con confianza.</p>
            </div>
          </div>

          <div className={styles.containerthree}>
            <div className={styles.cardone}>
              <h2 className={styles.card__title}>Aprendiz</h2>
              <h3 className={styles.card__subtitle}>Comunicación efectiva</h3>
              <p className={styles.card__description}>Comunica tus inconvenientes fácilmente. Anexa excusas, el instructor  las valida, garantizando que puedas continuar con confianza.</p>
            </div>
          </div>

        </section>
      </main>
    </LandPageLayout>
  );
};

export default LandPage;