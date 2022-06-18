var array= new Array(); // aqui van a ser objetos
array[0]= "cadena";
array[1]= 2;
array[2]= 3.56;
array[3]= function(nombre){
    console.log("hola"+nombre);
}
array[4]= {curso: "HTML, CSS, JS"};
console.log(array);
console.log(array[4].curso);

//creacion de un arreglo asignando valores
var nombres=["Ricardo", "carlos","adrian"];
console.log(nombres);
// si imprime {} es un objeto
for(var i=0; i < nombres.length; i++){
    console.log("hola"+nombres[i]);
}

nombres[100]="juan";

for(var i=0; i < nombres.length; i++){
    console.log("hola"+nombres[i]);
}

var miObj ={
    nombre:"adrian",
    curso: "HTML CSS JS",
    unidad: "multimedia"
};

//para recorrer un objeto

for (var prop in miObj){
    console.log(prop+ ":" +miObj[prop]);
}

for (var nombre in nombres){
    console.log("hola " +nombres[nombre]);
}