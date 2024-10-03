
const form = document.querySelector("#form-alumnos");

const dataBase =[]

let alumnoSeleccionado = null;


class Alumno {
    constructor(nombre, apellido, email, calificacion = null){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.calificacion = calificacion; 
    }
}


form?.addEventListener("submit", (e) =>{

    e.preventDefault()
console.log("submit");
//la plataforma web//
const formData = new FormData(form)
// formData va a guardar cada elemento que tenga el form;inputs,checkbox,etx

//fromEntries ayuda a manejar la info del fromData
const data = Object.fromEntries(formData) //cuando usas form, trae todos los datos de inputs checkbox
console.log(data);
//ESTRUCTURA DE DATOS



//verificar que no exista usuario en baseDatos, el find busca un elemento en especial
const alumnoExist = dataBase.find((alumno) => alumno.email === data.emailAlumno)
console.log(alumnoExist);
if (alumnoExist){
    alert('el alumno ya existe')
    return; //para terminar la funcion del submit, misma funcion que break
} else{
alert("Usuario guardado")
//guardar en dataBase
//guardar una instancia de la clase alumno
const alumno = new Alumno(data.nombreAlumno, data.apellidoAlumno, data.emailAlumno)


dataBase.push(alumno);

console.log(dataBase);
}



})



let images = document.querySelectorAll(".slider-inner img"); //esto te regresa un arreglo un arreglo
//busca las que tengan esta clase, y regresa un arreglo vacio.
//
let index = 0; 
//compara el arreglo en la primer pagina que SI hay imagenes, en esta no entonces NO se ejecuta.
if(images.length > 0){//si hay imagenes, se ejecuta esto.
    setInterval(function() { //CALLBACK
        console.log(images.length);
        
        let porcentaje = index * -100;
        document.querySelector('.slider-inner').style.transform = `translateX(${porcentaje}%)`;
        
        index++; 
    
        
        if (index >= (images.length -1)) { 
            index = 0; 
        }
    
    }, 2000);

}

//mostrar alumnos
//alumno seleccionado
//1.formulario que pregunte mail, y funcion que encuentre el objeto asignado con ese correo.
//2.una vez encontrado, se le asigna a la variable.
//3.inscribir materias.
//submit, guardar en una variable.
//variable global para reasignar calificaciones, meterle materias,


const formFindAlumno = document.querySelector("#buscar-alumno");
const resultadoBusqueda =document.querySelector("#resultadoBusqueda");

// ? es un operador que si el formFindalumno existe, continua con su funcion.si no ahi se queda
formFindAlumno?.addEventListener("submit",(e) =>{
e.preventDefault();

const emailBuscar = document.querySelector("#emailBuscar").value;
console.log(emailBuscar);

const alumnoEncontrado = dataBase.find(alumno => alumno.email === emailBuscar);
if(alumnoEncontrado){
    resultadoBusqueda.innerHTML =
    `<a href="archivo.html" class="materias-pag">Ir a ingresar materias</a>`;


    alumnoSeleccionado = alumnoEncontrado;
    
}
else{
    resultadoBusqueda.innerHTML =`alumno no registrado`
}
})


const generarSelect = document.querySelector("#select");
const materias = ["Administracion de negocios", "Marketing", "Finanzas","Publicidad"];
let paragraph =document.querySelector("#paragraph");
console.log(materias);


function alumnoMateria(){
   if (generarSelect.value ==="Administración"){
    paragraph.textContent = "Administración"}
    else if(generarSelect.value === "Marketing"){
        paragraph.textContent = "Marketing"
    }
    else if(generarSelect.value === "Finanzas"){
        paragraph.textContent = "Finanzas"
    }

    else if(generarSelect.value === "Publicidad"){
        paragraph.textContent = "Publicidad"
        
    }


}

// generarSelect.addEventListener("change",alumnoMateria);

const calif = document.querySelector("#todas_calificaciones")
const btn = document.querySelector("button")
const showResult = document.querySelector("#result")

function sum (arreglo) {
  let accumulador = 0
  for (let i = 0; i < arreglo.length; i++) {
    console.log(i)
    accumulador = accumulador + parseInt(arreglo[i])
  }  
  return accumulador / arreglo.length
}

btn.addEventListener('click', () => {  
  const list = calif.value
  const arrayCalif = list.trim().split(",")
  // trim => eliminar espacios vacios al inicio y al final
  // split => convertir el string en un arreglo  
  const promedio = sum(arrayCalif)

  const promedioAnahuac = document.querySelector("#promedio-anahuac")
  promedioAnahuac.style.display = "block"
  paragraph.style.display = "block"
promedioAnahuac.textContent = `tu promedio es ${promedio}`;
alumnoMateria();

})

