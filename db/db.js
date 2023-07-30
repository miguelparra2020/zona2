
//----------------------------Modelo---Fichas-------------------------------

//Función para obtener todas las fichas de la base de datos es un READ - lectura
export async function getFichas() {
    const response = await fetch('https://miguelpaez9612.pythonanywhere.com/fichas/');
    const data = await response.json();
    return data;
}

//del CRUD - fichas
//Created 🆕
//Función para crear una fichas

export async function createFicha(fichaData) {
  const response = await fetch('http://miguelpaez9612.pythonanywhere.com/fichas/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fichaData),
  });

  const data = await response.json();
  return data;
}

//del CRUD - fichas
//Read 👀
//Función para obtener todos los datos de lectura de un producto especifico
export async function getFicha(id) {
    const response = await fetch(`http://miguelpaez9612.pythonanywhere.com/fichas/${id}/`);
    const data = await response.json();
    return data;
}

//del CRUD - fichas
//Updated 😮‍💨
//Función para obtener actualizar todos los datos de un producto de la base de datos es un Updated 
export async function updateProduct(id, updatedProduct) {
    const response = await fetch(`http://miguelpaez9612.pythonanywhere.com/fichas/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
  
    const data = await response.json();
    return data;
} 

//del CRUD - fichas
//Delete ❌
//Función para eliminar un producto según el ID
export async function deleteProduct(id) {
    const response = await fetch(`http://miguelpaez9612.pythonanywhere.com/fichas/${id}/`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Failed to delete product');
    }
}