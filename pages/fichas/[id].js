import React from "react";
import MainLayout from '../../components/layouts/MainLayout';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getFicha, updateFicha, deleteFicha } from '../../db/db';



function FichaPage() {
    const router = useRouter();
    const { id } = router.query;
    const [ficha, setFicha] = useState(null); // Estado para almacenar el producto / State to store the product
    const [numero_ficha, setNumeroFicha] = useState(''); // Estado para el ID del producto / State for the product ID
    const [nombre_ficha, setNombreFicha] = useState(''); // Estado para el nombre del producto / State for the product name
    useEffect(() => {
        async function fetchFicha() {
          const data = await getFicha(id);
          setFicha(data);
          setNumeroFicha(data.numero_ficha);
          setNombreFicha(data.nombre_ficha);
        }
    
        fetchFicha();
      }, [id]);
    
      const handleUpdate = async () => {
        const updatedFicha = {
            numero_ficha,
            nombre_ficha,
        };
    
        await updateFicha(id, updatedFicha);
        alert("Ha actualizado la ficha de manera exitosa!"); // Successful update alert
        router.push('/fichas');
      };
    
      const handleDelete = async () => {
        await deleteFicha(id);
        alert("Ha eliminado la ficha de manera exitosa!"); // Successful deletion alert
        router.push('/fichas');
      };
    
      if (!ficha) {
        return <p>Cargando...</p>; // Loading message
      }

    return(
        <MainLayout>
            <div>
                <h1>Hola soy el detalle de cada ficha</h1>             
            </div>
            <div>
            <h3><Link href="/fichas">Volver</Link></h3>
            <h1>Editar ficha</h1>   
            <label>
                Número de la ficha:
                <input type="text" value={numero_ficha} onChange={e => setNumeroFicha(e.target.value)} />
            </label>
            <label>
                Nombre de la ficha:
                <textarea value={nombre_ficha} onChange={e => setNombreFicha(e.target.value)} />
            </label>
            
            <button onClick={handleUpdate}>Guardar cambios</button> 
            <button onClick={handleDelete}>Eliminar</button> 
            </div>
        </MainLayout>
    )

}

export default FichaPage;