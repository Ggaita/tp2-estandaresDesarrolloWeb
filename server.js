
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Archivos landing page
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Dependencias instaladas mediante NPM
app.use('/vendor/sweetalert2', express.static(
    path.join(__dirname, 'node_modules/sweetalert2/dist')
));

app.use('/vendor/aos', express.static(
    path.join(__dirname, 'node_modules/aos/dist')
));

app.use('/vendor/fontawesome', express.static(
    path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')
));

// P.principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// servido
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
