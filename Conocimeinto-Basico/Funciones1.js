//mandamos llamar un archivo llamado en nuestra carpeta raiz con el numbre de math.js
//que es el que va hacer las operaciones, pero se tiene que meter dentro de una constante 
const math = require("./math.js");

//Con esto podemos ver lo que tenemos dentro del archivo math
console.log(math);
console.log("------------------------------");

//Vamoso a mostrar el resultado en pantalla mandando llamar al erchivo donde se encuentra
//la funcion seguido por el nombre de que funcion queremos usar
console.log(math.add(10,11));
console.log(math.substract(20,10));
console.log(math.multiply(10,11));
console.log(math.divide(10,11));
console.log(math.divide(10,0));