const express = require('express');
const app = express();
const path = require('path');

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta principal
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido al servidor Express</h1>');
});

// Otra ruta con EJS
app.get('/about', (req, res) => {
    const data = { title: 'Sobre Nosotros' };
    res.render('about', data);
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta 404 personalizada
app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada</h1>');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});