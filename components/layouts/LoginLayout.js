// components/layouts/LoginLayout.js
import React from 'react';
import FooterLandPage from '../FooterLandPage';
import NavbarLogin from '../NavbarLogin';
const HomeLayout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Aquí podrías colocar una barra de navegación al iniciar el frontend, sería el header de la landpage */}
        <NavbarLogin/>
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
