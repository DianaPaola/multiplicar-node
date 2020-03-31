//requires

const fs = require('fs');
const colors = require('colors');
//const fs = require('express');//express son paquetes que no estan en la documentacion de node pero que alguien ya hizo por nosotros
//const fs = require('./fs');// para llamar a archivos que están en el directorio de nuestro proyecto

let datos = '';

let listarTabla = (base, limite = 10) => {

    console.log('========================'.green);
    console.log(`=tabla de ${ base}=`.yellow);
    console.log('========================'.green);


    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`); //el reject se dispara y despues sigue corriendo el codigo es por eso que se pone un return
            return;
        }

        for (let i = 0; i <= limite; i++) {

            let mult = base * i;
            datos += `${ base } * ${ i } = ${mult}\n`;
        }

        resolve(datos);
        //console.log(`Impresión: ${ datos } `);

        /*  const data = new Uint8Array(Buffer.from(datos));
          fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
              if (err)
                  reject(err);
              else
                  resolve(`tabla-${base}.txt`);

              // console.log(`El archivo tabla-${base}.txt ha sido creado`);
          });*/

    })


}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`); //el reject se dispara y despues sigue corriendo el codigo es por eso que se pone un return
            return;
        }

        for (let i = 0; i <= limite; i++) {

            let mult = base * i;
            datos += `${ base } * ${ i } = ${mult}\n`;
        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

            // console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });

    })
}

/* otra forma de exportar
module.exports.crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        for (let i = 0; i <= 10; i++) {

            let mult = base * i;
            datos += `${ base } * ${ i } = ${mult}\n`;
        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

            // console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });

    })
}*/

module.exports = {
    crearArchivo,
    listarTabla

}