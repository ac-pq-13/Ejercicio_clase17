const alumnos = [
    {
      nombre: 'Juan',
      carrera: 'Biología',
      nota: 16,
    },
    {
      nombre: 'Jose',
      carrera: 'Enfermero',
      nota: 10
    },
      {
      nombre: 'Luis',
      carrera: 'Policía',
      nota: 07
    }
    ,
      {
      nombre: 'Maria',
      carrera: 'Secretariado',
      nota: 10
    },
    {
      nombre: 'Hugo',
      carrera: 'Enfermero',
      nota: 15
    },
      {
      nombre: 'Rosa',
      carrera: 'Enfermero',
      nota: 12
    }
    ,
      {
      nombre: 'Luisa',
      carrera: 'Biología',
      nota: 18
    }
  ]
/* 
Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados, cuantos están desaprobandos teniendo en cuenta
que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".
*/
let alumnos_aprobados = 0 
let alumnos_desaprobados = 0
let notasAprobadas = 0
let notasDesaprobadas = 0
let notasGeneral = 0

alumnos.forEach((alumno, indice) => {
    const{nombre, carrera, nota} = alumno
    if (nota >= 13) {
        alumnos_aprobados++;
        notasAprobadas = notasAprobadas + nota
    }else{
        alumnos_desaprobados++
        notasDesaprobadas = notasDesaprobadas + nota
    }
    notasGeneral = notasGeneral + nota;
    if(indice % 2 ===0){
        console.log(`Mi nombre es ${nombre} y mi carrera es ${carrera}`)
    }

});
console.log(`Cantidad de alumnos desaprobados: ${alumnos_desaprobados}`)
console.log(`Cantidad de alumnos aprobados: ${alumnos_aprobados}`)
console.log(`El promedio de notas aprobadas es: ${notasAprobadas/alumnos_aprobados}`)
console.log(`El promedio de notas desaprobadas es: ${notasDesaprobadas/alumnos_desaprobados}`)
console.log(`El promedio de las notas totales es: ${notasGeneral/(alumnos_aprobados + alumnos_desaprobados)}`)

/*
Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.
*/
const listaAlumnosDesaprobados = alumnos.filter((alumno) =>{
    const{nota} = alumno
    if (nota < 13) {
        return alumno
    }
} )
console.log("listaAlumnosDesaprobados",listaAlumnosDesaprobados)

/*
Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
la nueva nota de los alumnos.
*/

const listaNuevasNotas = alumnos.map(function(alumnos){
    return (alumnos.nota*3)/2
})
console.log("listaNuevasNotas: ",listaNuevasNotas)