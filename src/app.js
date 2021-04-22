//import
const path = require('path');
const routes = require('./routes/routes');


const morgan = require('morgan');
//const mysql = require('mysql');
//const myConnection = require('express-myconnection');
//const { urlencoded } = require('express');

//include
const express = require('express')

//main
const app = express();

//setting
app.set('port', process.env.PORT || 3012);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

//middlewares
app.use(morgan('dev'));
/* app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'prueba_web'
}, 'single')) */

app.use(express.urlencoded({
    extended: false
}));

//routes
app.use('/', routes);

//run
app.listen(app.get('port'), () => {
    console.log('server on port 3054');
});