const express = require('express');
const app = express();
const path = require('path'); //se encarga de unir directorios
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const port = process.env.PORT || 3000;

//importing routes
const customerRoutes = require('./routes/customer');

//Settings
app.set('view engine', 'ejs'); //ahora express sabe que utilizamos ejs como motorplantillas
app.set('views', path.join(__dirname, 'views')); //concatenamos carpeta views

//Middlewares: son funciones
app.use(morgan('dev'));
//le pasamos el modulo mysql que se encarga de poder hacer las peticiones
//le pasamos un objeto con la config
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'MyNewPass',
    port: 3306,
    database: 'nodemysql'
}, 'single')); //como vamos a estar conectados

app.use(express.urlencoded({extended: false})); //desde el modulo expresss entender todos los datos que vengan desde el formulario

//Routes: url que los usuarios van a pedir
app.use('/', customerRoutes);

//Static files: archivos estatis como css, html, imagenes
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(port, () => {
    console.log(`listening to port ${port}...`);
});
