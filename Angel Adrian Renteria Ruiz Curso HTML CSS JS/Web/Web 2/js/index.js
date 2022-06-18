(function (){
    console.log("iniciando");
    const boton1= document.querySelector("#boton1");
    boton1.addEventListener("click",function(){
        console.log("boton mostrar");
        const msg=document.querySelector("#msg").value;
        console.log(msg);
        const content =document.querySelector("#content");
        content.innerHTML = "<h1 id='texto'> "+msg+"</h1>";
    });


    console.log(boton1);

    const boton3= document.querySelector("#boton3");
    boton3.addEventListener("click", cambiar_color);
    const boton4= document.querySelector("#boton4");
    boton4.addEventListener("click", predeterminado);
})
();

function borrar(){
    console.log("boton borrar");
    document.querySelector("#texto").remove();
}

function cambiar_color(){
    console.log("Cambiando color...");
    const texto= document.querySelector("#texto");
    console.log(texto);
    if(texto != null && texto != undefined){
        texto.setAttribute("style","color:blue");
    }
}

function predeterminado(){

    document.querySelector("#msg").value="Texto predeterminado";
}
