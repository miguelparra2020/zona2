// components/layouts/MainLayout.js
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Aquí podrías colocar una barra de navegación, cuando el usuario ya inicia Sesion */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Aquí podrías colocar el pie de página, cuando el usuario ya inicia Sesion */}
      </footer>
    </div>
  );
};

export default MainLayout;
