// components/layouts/MainLayout.js
import React from 'react';
import FooterMain from '../FooterMain'
import NavbarMain from '../NavbarMain'

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Aquí podrías colocar una barra de navegación, cuando el usuario ya inicia Sesion */}
        <NavbarMain/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Aquí podrías colocar el pie de página, cuando el usuario ya inicia Sesion */}
        <FooterMain/>
      </footer>
    </div>
  );
};

export default MainLayout;
