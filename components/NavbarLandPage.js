// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavbarLandPage = () => {
  return (
    <nav>
      <div>
        <Link href="/">
            <h1>Cambio</h1>
            <div>Img</div>
            <span>Biometric Services</span>

        </Link>
        <div className="header">
        <nav className="nav">
            <div>
            <Image src="/img/logo_negro2.png" alt="Logosímbolo SENA Negro" className="nav__img"/>
            </div>
            
            <div className="nav__links">
                <Link href="" className="nav__link">
                    Iniciar sesión
                </Link>
                <Link href="/" className="nav__link nav__link--activate">
                    Registrarse
                </Link>
            </div>
        </nav>
        </div>
      </div>

    </nav>
  );
};

export default NavbarLandPage;