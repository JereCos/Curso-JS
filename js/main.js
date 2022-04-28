//Pide al usuario la cantidad de alumnos que tiene un curso, despues que ingrese una nota para cada uno y calcule el promedio, nota mínima y nota máxima. Tambien genera una tabla a partir de un botón de la nota de los alumnos.

let cantidadAlumnos = parseInt(prompt("Ingrese cantidad de alumnos"));

let notaTotal = 0;
let nota = 0;
let promedio = 0;
let notaIncorrecta;
let minimo = 10;
let maximo = 0;

let datosTabla = new Array ();
let headTabla = new Array()


for ( i = 1; i <= cantidadAlumnos ; i+=1 ){
    do{
        nota = parseFloat(prompt("Ingrese nota de alumno " + i));
        let fueraDeRango = nota < 0 || nota > 10;
        if (fueraDeRango){
            notaIncorrecta = true;
            console.log(notaIncorrecta);
            console.log(fueraDeRango);
        } else {
            notaIncorrecta = false;
            console.log(notaIncorrecta);
            console.log(fueraDeRango);
        }
    }while(notaIncorrecta);
    if (minimo <= nota){
        console.log("La nota minima es " + minimo)
    }else{
        minimo = nota;
        console.log("La nueva nota minima es " + minimo)
    }
    if (maximo >= nota){
        console.log("La nota máxima es " + maximo)
    }else{
        maximo = nota;
        console.log("La nueva nota máxima es " + maximo)
    }
    datosTabla[i] = (nota);
    notaTotal += nota;
    console.log("La nota total es " + notaTotal);
}

let opcion = prompt("Elija una opción:\n1-Promedio de notas.\n2-Nota mínimo.\n3-Nota máxima");

switch(opcion){
    case "1":
        promedio = notaTotal / cantidadAlumnos;
        console.log("El promedio de notas es " + promedio);
        alert ("El promedio de notas es " + promedio);
    break;
    case "2":
        console.log("La nota mínima es " + minimo);
        alert ("La nota minima es " + minimo)
    break;
    case "3":
        console.log("La nota máxima es " + maximo);
        alert ("La nota máxima es " + maximo);
    break;
    default:
    break;
}

function crearTablaNotas(){

    let body = document.getElementsByClassName("botonTabla")[0];
   
    let tabla   = document.createElement("table");                                           //crea etiqueta table en index
    let tblBody = document.createElement("tbody");                                           //crea etiqueta tbody en index

    headTabla[0] = "Alumno";
    headTabla[1] = "Nota";

    for(k = 0 ; k <= 1; k += 1){
        let tablaHead = document.createElement("th");                                       //crea etiqueta thead en index
        let celdaEncabezado = document.createElement("td");                                 //crea etiqueta td en index                                                                         
        let textoCeldaEncabezado = document.createTextNode(headTabla[k]);                   //Escribe cada Encabezado
        celdaEncabezado.appendChild(textoCeldaEncabezado);                                  //Agrega texto a encabezado
        tablaHead.appendChild(celdaEncabezado);                                             //Agrega encabezado a la tabla
        tblBody.appendChild(tablaHead);                                                     //Agrega encabezado a body
    }
    for (i = 1; i <= cantidadAlumnos; i += 1) {
        let fila = document.createElement("tr");                                            //Crea nueva fila
        let celdaUno = document.createElement("td");                                        //Agrega etiqueda td en index (1era celda de fila)
        let textoCeldaUno = document.createTextNode([i]);                                   //Escribe número de alumno
        celdaUno.appendChild(textoCeldaUno);                                                //Agrega el número de alumno a la celda
        fila.appendChild(celdaUno);                                                         //Agrega a la fila la celda
        tblBody.appendChild(fila);                                                          //Agrega al body la fila
        let celdaDos = document.createElement("td");                                        //Agrega etiqueda td en index (2da celda de fila)
        let textoCeldaDos = document.createTextNode(datosTabla[i]);                         //Escribe nota asociada al número de alumno
        celdaDos.appendChild(textoCeldaDos);                                                //Agrega nota a la celda
        fila.appendChild(celdaDos);                                                         //Agrega la fila la celda
        tblBody.appendChild(fila);                                                          //Agrega la fila al body
    }
    tabla.appendChild(tblBody);                                                             //Agrega el body a la table
    body.appendChild(tabla);                                                                //Agrega el table al div.botonTabla
  }