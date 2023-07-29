// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const NavbarLandPage = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          
            <div>Img</div>
            <span>Biometric Services</span>
          
        </Link>
      </div>
      <div>
        <Link href="/login">
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  );
};

export default NavbarLandPage;