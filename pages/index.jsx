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
        <section className={styles.section}>
          <div className={styles.section__texts}>
            <h1 className={styles.section__title}>Biometric Service</h1>
            <p className={styles.section__p}> 
                    Lleve un control exhaustivo de su asistencia mientras inculca el hábito de llegar a tiempo.
            </p>
          </div>
          <div className={styles.section__mockup}>
            <Image className={styles.section__img} src="/img/maqueta.png" alt="Logo Símbolo SENA y Biometric Service Negro" width={1000} height={670}/>
          </div>
        </section>
        <h1 className={styles.h1__info}>Enfocado en aprendices e instructores</h1>
        {/* ======= Sección Tarjetas de información ========= */}
        <section className={styles.section__cards}>
          <div className={styles.card__section}>
            <h2 className={styles.card__title}>Aprendiz</h2>
            <h3 className={styles.card__subtitle}>Comunicación efectiva</h3>
            <p className={styles.card__description}>Comunica tus inconvenientes fácilmente. Anexa excusas, el instructor  las valida, garantizando que puedas continuar con confianza.</p>
          </div>
          <div className={styles.card__section}>
            <h2 className={styles.card__title}>Aprendiz</h2>
            <h3 className={styles.card__subtitle}>Control de asistencia</h3>
            <p className={styles.card__description}>Verifica tu asistencia al instante desde la plataforma y descárguela en PDF para un seguimiento sin complicaciones</p>
          </div>
          <div className={styles.card__section}>
            <h2 className={styles.card__title}>Aprendiz</h2>
            <h3 className={styles.card__subtitle}>Comunicación efectiva</h3>
            <p className={styles.card__description}>Comunica tus inconvenientes fácilmente. Anexa excusas, el instructor  las valida, garantizando que puedas continuar con confianza.</p>
          </div>
          <div className={styles.card__section}>
            <h2 className={styles.card__title}>Aprendiz</h2>
            <h3 className={styles.card__subtitle}>Comunicación efectiva</h3>
            <p className={styles.card__description}>Comunica tus inconvenientes fácilmente. Anexa excusas, el instructor  las valida, garantizando que puedas continuar con confianza.</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.card__title}>Aprendiz</h2>
            <h3 className={styles.card__subtitle}>Comunicación efectiva</h3>
            <p className={styles.card__description}>Comunica tus inconvenientes fácilmente. Anexa excusas, el instructor  las valida, garantizando que puedas continuar con confianza.</p>
          </div>
        </section>
      </main>
    </LandPageLayout>
  );
};

export default LandPage;