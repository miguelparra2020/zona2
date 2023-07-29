// pages/index.js
import React from 'react';
import  LoginLayout from '../../components/layouts/LoginLayout'

const LoginPage = () => {
  return (
    <LoginLayout>
      <div>
        <h1>Bienvenido a la página Login</h1>
        <div>Usuario</div>
        <div>Contraseña</div>
        <div>Ingresar</div>
        <div>Ovidó Contraseña</div>
      </div>
    </LoginLayout>
  );
};

export default LoginPage;