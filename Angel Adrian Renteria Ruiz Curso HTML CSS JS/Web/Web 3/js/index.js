(function(){
    const page1 = document.querySelector("#page1");
    console.log(page1);
    page1.addEventListener( "click" ,function(){
        const content = document.querySelector("#content");
        loader (content);
    });
})();


const loader=(element) => { 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status==200){
            element.innerHTML= xmlhttp.responseText;
        }

    }
    //xmlhttp.open("GET","../html/page1.html",true);   asi no
    xmlhttp.open("GET","html/page1.html",true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}
// *********************************page 2*************************************
(function(){
    const page1 = document.querySelector("#page2");
    console.log(page2);
    page2.addEventListener( "click" ,function(){
        const content = document.querySelector("#content");
        cargar (content);
    });
})();


const cargar=(element) => { 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status==200){
            element.innerHTML= xmlhttp.responseText;
        }

    }
    //xmlhttp.open("GET","../html/page1.html",true);   asi no
    xmlhttp.open("GET","html/page2.html",true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}
// *****************************+*page 3******************************

(function(){
    const page1 = document.querySelector("#page3");
    console.log(page3);
    page3.addEventListener( "click" ,function(){
        const content = document.querySelector("#content");
        car (content);
    });
})();


const car=(element) => { 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status==200){
            element.innerHTML= xmlhttp.responseText;
        }

    }
    //xmlhttp.open("GET","../html/page1.html",true);   asi no
    xmlhttp.open("GET","html/page3.html",true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}

// *****************************+*page 4******************************

(function(){
    const page1 = document.querySelector("#page4");
    console.log(page4);
    page4.addEventListener( "click" ,function(){
        const content = document.querySelector("#content");
        carr (content);
    });
})();


const carr=(element) => { 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status==200){
            element.innerHTML= xmlhttp.responseText;
        }

    }
    //xmlhttp.open("GET","../html/page1.html",true);   asi no
    xmlhttp.open("GET","html/page4.html",true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}