import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createProduct, getProducts } from '../../../db/db';
import { useRouter } from 'next/router';

import MainLayout from '../../../components/layouts/MainLayout'


function NuevaFichaPage() {
    return(
        <MainLayout>
        <div>
            <h3><Link href="/fichas">Volver</Link></h3>
        </div>
        <div>
            <h1>Hola soy crear una nueva ficha</h1>
            
        </div>
        </MainLayout>
    )
}

export default NuevaFichaPage;