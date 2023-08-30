import React from "react";
import MainLayout from '../../components/layouts/MainLayout';

const ExcusasPage = () => {
    return (
        <MainLayout>
            {/* titulo del área */}
            <div>
                <h1>Bienvenido al área de excusas</h1>   
            </div>
            {/* titulo del área */}
            
            {/* card de la excusa */}
            <div>
                <div>
                    icon 
                    id: id excusa
                </div>
                <div>
                    usuario: 1088336464
                    nombre: Miguel Páez
                </div>
                <div>
                    excusa doc
                </div>
                <div>
                    comentario del usuario:
                </div>
                <div>
                    Revisó, aprobó o desaprobó:
                    usuario:
                    nombre:
                </div>
                <div>
                    Estado:
                    Comentario:
                </div>
            </div>
            {/* card de la excusa */}
        </MainLayout>
    )
};

export default ExcusasPage;