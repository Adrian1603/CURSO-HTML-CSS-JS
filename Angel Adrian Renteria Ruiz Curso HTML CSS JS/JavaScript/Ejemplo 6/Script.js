//Las funciones en js tambien son un tipo de objetos

function mul(x,y){
    return x*y;
}
mul.version="v.1.0.0"; //al ser objetos le puedo agregar atributos
console.log(mul.version);

//funcion constructora de funciones
//fabrica de funcione
function makeMul(num){
    var miFuncion= function (x){
        return num * x ;
    }
    return miFuncion; //Esta funcion retorna funciones
}

var mul3 =makeMul(3);
console.log (mul3(5));

//Las funciones pueden ser argumentos de otras funciones
//funciones como argumentos a otras funciones
function haceroperaciones (x,operacion){
    return operacion(x);
}

var res= haceroperaciones(5,mul3);
console.log(res);

var duplicar = makeMul(2);
res= haceroperaciones(100,duplicar);
console.log(res);
