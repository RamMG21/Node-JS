//creamos un objeto
const Math = {};

function add(x1, x2){
    return x1+x2;
}

function substract(x1, x2){
    return x1-x2;
}

function multiply(x1, x2){
    return x1*x2;
}

function divide(x1,x2){
    if(x2 == 0){
        console.log("No se puede dividir por cero");
    }
    else{
        return x1 / x2;
    }
}

//Agragamos las propiedades a objeto
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//exportar el objeto math 
module.exports = Math;


