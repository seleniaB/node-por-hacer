const descripcion = {
    //Sin el demnad no sirve, es obligatorio
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    descripcion: 'Marca como completado o pendiente la tarea'
};

//se importa el yargs
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

//Para utilizarlo fuera del archivo de de exportarlo
module.exports = {
    argv
}