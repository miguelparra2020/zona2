// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../public/styles/NavbarLandPage.css';

const NavbarLandPage = () => {
  return (
      <div>
        <header className="header">
          <nav className="nav">
              <div>
                <Image src="/img/logo_negro2.png" alt="Logosímbolo SENA Negro" className="nav__img"
                width={120} 
                height={60}/>
              </div>
              <div className="nav__links">
                  <Link href="/login" className="nav__link">
                      Iniciar sesión
                  </Link>
                  <Link href="/" className="nav__link nav__link--activate">
                      Registrarse
                  </Link>
              </div>
          </nav>
        </header>
      </div>
  );
};

export default NavbarLandPage;