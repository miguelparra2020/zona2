// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import "/public/images/logo_negro2.png";

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
            {/* <img src="public/images/logo_negro2.png" alt="" className="nav__img"></img> */}
            <div className="nav__links">
                <a href="" className="nav__link">
                    Iniciar sesión
                </a>
                <a href="/" className="nav__link nav__link--activate">
                    Registrarse
                </a>
            </div>
        </nav>
        </div>
      </div>

    </nav>
  );
};

export default NavbarLandPage;