(function() {
    console.log ("iniciando");
    const boton1 = document.querySelector("#boton1");
    boton1.addEventListener("click",function(){
        console.log("Boton mostrar");
        
        const content= document.querySelector("#content");
        content.innerHTML=" <h1 'id=texto'> hola mundo </h1>";
    });
    console.log(boton1);
    const boton3 = document.querySelector("#boton3");
    boton3.addEventListener("click", cambiar_color);
})
();
function borrar(){
    console.log ("Se presiono borrar");
    const content= document.querySelector("#content");
    content.innerHTML=" ";
}

function cambiar_color(){
    console.log("cambiando color......");
    const texto= document.querySelector("#texto");
    console.log(texto);
    if(texto != null && texto!=undefined){
        texto.setAttribute("style", "color:blue");
    }
}
//doom modelo de objetos de documento