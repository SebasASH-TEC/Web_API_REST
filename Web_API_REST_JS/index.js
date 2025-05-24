const express = require('express'); // Importa el módulo express

const linkedListRoutes = require('./routes/linkedListRoutes'); // Importa las rutas de la lista enlazada

const app = express(); // Crea una instancia de la aplicación express
const port = 3030; // Define el puerto del servidor

app.use(express.json()); // Habilita el manejo de JSON en las solicitudes
app.use('/linked-list', linkedListRoutes); // Usa las rutas de lista enlazada bajo el prefijo /linked-list

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}.`)
}); // Inicia el servidor y muestra un mensaje en consola
