// Creacion de un objeto
var empresa= new Object();

empresa.nombre= "facebook";
empresa.ceo = new Object(); //Puedo crear objetos dentro de otros
empresa.ceo.nombre= "Adrian"
empresa.ceo.apellido= "Renteria"
console.log(empresa);
console.table(empresa);

console.log(empresa.ceo.nombre);
console.log(empresa["nombre"]);

var attr= "numero de usuarios";
empresa [attr]= 10000000000;
console.log(empresa[attr]);
console.log(empresa["numero de usuarios"]); // forma 2

// forma 2 de definir objetos

var facebook={
    nombre:"facebook",
    ceo:{
        nombre: "Adrian",
        apellido: "Renteria",
    },
    "numero de usuarios" : 1000000000000000,
};

console.table(facebook);


