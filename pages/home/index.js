import React from "react";
import MainLayout from '../../components/layouts/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <div>
                <h1>Hola soy home</h1>   
            </div>
            <div>
                <h1>Registros de ingresos</h1>   
            </div>
            <div>
                <h1>Registros de Salida</h1>   
            </div>
        </MainLayout>
    )
};

export default HomePage;