const arvg = require('./config/yargs').argv
const porHacer = require('./to-do/to-do')
const colors = require('colors')
    //const arvg = require('yargs').argv


let comando = arvg._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(arvg.descripcion)
        console.log(tarea);
        break

    case 'listar':
        let listado = porHacer.getListado()

        for (let tarea of listado) {
            console.log('==========Por Hacer=========='.green)
            console.log(tarea.descripcion)
            console.log('Estado:', tarea.completado)
            console.log('============================='.green)
        }

        break
    case 'actualizar':
        let actualizado = porHacer.actualizar(arvg.descripcion, arvg.completado)
        break
    case 'borrar':
        let borrado = porHacer.borrar(arvg.descripcion)
        console.log(borrado);
        break
    default:
        console.log('Comando no reconocido');

}