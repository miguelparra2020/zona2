// components/NavbarLogin.js
import React from 'react';
import Link from 'next/link';

const NavbarMain = () => {
  return (
    <nav>
      <div>
        <Link href="/home">     
            <div>Img</div>
            <span>Biometric Services</span>
        </Link>
      </div>
      <div>
        <Link href="/excusas">     
            <div>Excusas</div>
        </Link>
      </div>
      <div>
        <Link href="/fichas">     
            <div>Fichas</div>
        </Link>
      </div>
      <div>
        <Link href="/usuarios">     
            <div>Usuarios</div>
        </Link>
      </div>
      <div>
        <Link href="https://miguelpaez9612.pythonanywhere.com/admin/" target='_blank'>     
            <div>Administración</div>
        </Link>
      </div>
      <div>
        <Link href="/">     
            <div>Salir</div>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarMain;