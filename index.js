const express = require('express'); 
const path = require('path');
const app = express();

const pizzasRoutes = require("./routes/pizzas");
const usuariosRoutes = require('./routes/usuarios')

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(pizzasRoutes);
app.use('/usuarios', usuariosRoutes)

app.listen(5000, () => console.log('Servidor em execução'));