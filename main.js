const {buscarCurso, listarCursos, preMatricular} = require('./cursos');

const opcionesPrematricula = {
    id: {
        description: "identificador de materia",
        demandOption: true,
        alias: 'i'
    },
    nombre: {
        description: "Nombre de usuario",
        demandOption: true,
        alias: 'n'
    },
    cedula: {
        description: "Cedula del usuario",
        demandOption: true,
        alias: 'c'
    }
};

const opcionesBuscar = {
    id: {
        description: 'Identificador del curso',
        alias: 'i',
        demandOption: true
    }
}

require('yargs')
    .command('inscribir', 'Pre matricular usuario.', opcionesPrematricula,
        (argv) => {
            preMatricular(argv.id, argv.nombre, argv.cedula)
        })
    .command('listar', 'Listar cursos disponibles', 
        (argv) => {
            listarCursos()
        })
    .command('buscar', 'Busca un curso por identificador (id)', opcionesBuscar,
        (argv) => {
            curso = buscarCurso(argv.id);
            if (!curso) console.log("No se encuentra el curso");
            else console.log(curso);
        })
    .help()
    .argv
