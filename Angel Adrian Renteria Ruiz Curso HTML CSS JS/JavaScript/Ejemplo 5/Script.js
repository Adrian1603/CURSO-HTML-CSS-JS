//Esta esta mas facil :)
//para definir varios objetos
// Funcion de la clase circulo
function circulo(radio){
    this.radio= radio;
}
// Funcion miembro de la clase circulo
circulo.prototype.getArea=
    function(){
        return Math.PI*Math.pow(this.radio,2);
    };
    /* 
    Codigo invalido 
var c0=circulo(0);
no se puede llamar a esta funcion ya que no se uso new
console.log(c0.getArea()); */


//Esta es la dificil :/
//para definir un objeto
    var c= new circulo(10);
    console.log(c.getArea());
    var c2= new circulo(20);
    console.log(c2);

    var c3={
        radio: 10,
        getArea: function () {
            var self= this;
            console.log(this);
            var radio2 = function (){
                self.radio= 20;
            }
            radio2();
            console.log(this.radio);
            return Math.PI*Math.pow(this.radio,2);
        }
    };
    console.log(c3.getArea());


    