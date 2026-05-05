import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

const app = express();
const PORT = process.env.PORT || 3000;

// configurar EJS como motor de plantillas  
app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'ejs.layout', 'views'));
// configurar express-ejs-layouts.
app.use(expressLayouts);
app.set('layout', 'layout'); // archivo base de layout
// configurar la carpeta de archivos estáticos.
app.use(express.static(path.join(import.meta.dirname, 'public')));  

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Página Principal',
    navbarLinks: [
    { text: 'Inicio', href: '/', icon: '/icons/home.svg' },
    { text: 'Acerca de', href: '/about', icon: '/icons/info.svg' },
    { text: 'Contacto', href: '/contact', icon: '/icons/contact.svg' }
]
     });
});

// Iniciar el servidor:
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});