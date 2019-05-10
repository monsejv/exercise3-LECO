const cliente = {
  Nombre: 'Jorge Rodriguez',
  Edad: 35,
  DireccionOficina: 'Oaxaca 96 Roma Norte',
  DireccionCasa: 'Salamanca 15',
  HistorialDeLentesComprados: {
    Notorious: {
      Color: 'negro',
      TipoDeMica: 'bluelight',
      Graduacion: {
        OjoDerecho: 3,
        OjoIzquierdo: 2
      }
    },
    Air: {
      Color: 'plata',
      TipoDeMica: 'Sencilla',
      Graduacion: {
        OjoDerecho: 3,
        OjoIzquierdo: 2
      }
    }
  }
}

var textAll = "\n";
var textConverseAll = "\n";

function lowerCamelCaseObject (objectArray) { //Función para presentar el objeto en camelCase en el textArea
    $.each(objectArray, function(index, val) {
        var newIndex = _.camelCase(index) 
        if(typeof val == "object"){
            objectArray[index] = objectArray[newIndex] = val
            textConverseAll = textConverseAll + newIndex +": \n\n"
            delete objectArray[index];
            lowerCamelCaseObject(val)
        }
        else{
            objectArray[index] = objectArray[newIndex] = val
            textConverseAll = textConverseAll + newIndex +": "+ val + "\n\n"
            delete objectArray[index]
        }
    });
}

function showFirstObject(objectArray){ //Funcion para presentar el objeto original en el textArea
     $.each(objectArray, function(index, val) {
        if(typeof val == "object"){
            textAll = textAll + index +": \n\n"
            showFirstObject(val)
        }
        else{
            textAll = textAll + index +": "+ val + "\n\n"
        }
    });
}

function doThis(){ 
    console.log("objeto original") //Se muestra en consola el objeto original
    console.log(cliente)
    lowerCamelCaseObject (cliente) //Se manda a llamar la funcion para convertir el lowerCamelCase
    console.log("Objeto con lowerCamelCase")
    console.log(cliente) //Se muestra en consola el objeto con la conversión
    $("#text-camel").append(textConverseAll) 
}

showFirstObject(cliente)
$("#text-encode").append(textAll)


