//const multiplicar = require('./multiplicar/multiplicar')
//console.log(multiplicar);
const argv = require('./config/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe');
//destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((err) => console.log(`Error crear archivo: `, err));

        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(colors.rainbow(`Archivo creado: ${archivo}`)))
            .catch((err) => console.log(`Error crear archivo: `, err));
        //console.log('crear');
        break;

    default:
        console.log('Comando no reconocido');
}



//console.log(argv);

//let base = '5';
//console.log(process.argv);

let argv2 = process.argv;
//console.log('limite: ', argv.limite);
//console.log(argv2);

/*let parametro = argv[2];
let base = parametro.split('=')[1];*/
//console.log(base);
/*crearArchivo(base).then((archivo) => {
    console.log(`Archivo creado: ${archivo}`)
}).catch((err) => {
    console.log(`Error crear archivo: ` + err);
});*/


/*crearArchivo(base)
    .then((archivo) => console.log(`Archivo creado: ${archivo}`))
    .catch((err) => console.log(`Error crear archivo: `, err));
*/

//multiplicar(3);