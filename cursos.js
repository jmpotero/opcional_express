const fs = require('fs');
var express = require('express')
var app = express()

let cursos = [
    {
        nombre  : "Ingles",
        id      : "TDEAINGLES",
        duracion: 64,
        valor   : 410000.0
    },
    {
        nombre  : "Curso interpretación de pruebas genéticas en procesos judiciales",
        id      : "CIPGPJ",
        duracion: 48,
        valor   : 295000.0
    },
    {
        nombre  : "Escuela de iniciación deportiva",
        id      : "EID",
        duracion: 48,
        valor   : 135000.0
    }
];

function mostrar(curso){
    console.log("ID: " + curso.id + " Nombre: " + curso.nombre + " Duracion: " + curso.duracion + "h Valor: "+ curso.valor);
}

let listarCursos = () => {
    console.log("=>Cursos Ofertados: ");
    for (var i = 0; i< cursos.length; i++) {
        (function(i) {
            setTimeout(
                function() {
                    mostrar(cursos[i]);
                },
                2000*i);
        })(i);
    }
};

var buscarCurso = (id) => cursos.find(function(curso){
    return curso.id == id;
});

let preMatricular = (id, nombre, cedula) => {
    curso = buscarCurso(id);
    if(curso) {
        enviar(curso, nombre, cedula);
    } else {
        console.log("=> Error: No se encontró el curso.");
    }
};

let enviar = (curso, nombre, cedula) => {
    text = "El usuario " + nombre + " con cédula " + cedula + " se ha inscrito correctamente al curso " + curso.id + ", " +curso.nombre + ", con una duración de " + 
    curso.duracion + " y un costo de " + curso.valor + " pesos.";
    app.get('/', function(req, res){
        res.send(text)
    })
};

module.exports = {
    cursos,
    listarCursos,
    buscarCurso,
    preMatricular
};

app.listen(3000)