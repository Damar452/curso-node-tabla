const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs'); 
require('colors');


console.clear();
console.log(argv)

crearArchivo( argv.base, argv.hasta, argv.listar )
                .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
                .catch( err => console.log(err))