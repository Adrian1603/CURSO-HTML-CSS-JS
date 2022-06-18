(function (){
    console.log("iniciando");
    const boton1= document.querySelector("#boton1");
    boton1.addEventListener("click",function(){
        console.log("boton mostrar");
        const content =document.querySelector("#content");
        content.innerHTML = "<h1 id='texto'> Hola Mundo</h1>";
    });
    console.log(boton1);

    const boton3= document.querySelector("#boton3");
    boton3.addEventListener("click",cambiar_color);
})
();

function borrar(){
    console.log("boton borrar");
    const content =document.querySelector("#content");
        content.innerHTML = "";
}

function cambiar_color(){
    console.log("Cambiando color...");
    const texto= document.querySelector("#texto");
    console.log(texto);
    if(texto != null && texto != undefined){
        texto.setAttribute("style","color:blue");
    }
}