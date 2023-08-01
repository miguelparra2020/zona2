// components/layouts/MainLayout.js
import React from 'react';
import NavbarLandPage from '../NavbarLandPage';
import FooterLandPage from '../FooterLandPage';
import '../../public/styles/layouts/LandPageLayout.css';

const HomeLayout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Aquí podrías colocar una barra de navegación al iniciar el frontend, sería el header de la landpage */}
        <NavbarLandPage/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Aquí podrías colocar el pie de página  al iniciar el frontend, sería el footer de la landpage*/}
        <FooterLandPage/>
      </footer>
    </div>
  );
};

export default HomeLayout;
