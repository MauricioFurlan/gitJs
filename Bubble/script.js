
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

var bola = window.document.getElementById("bolinha")
var aew = window.document.getElementById("aew")

num1 = Number(1)
num2 = Number(98)
var rand = getRandomInt(num1,num2)

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }
 

bola.style.left=rand+"%"
i = 0
var a = "a"



function bolas(cont){

while (i < cont){

num1 = Number(98)
num2 = Number(1)
var rand = getRandomInt(num1,num2)
var rand1 = getRandomInt(num2,num1)
var a = document.createElement("div")
a.setAttribute("id","clone1")
aew.appendChild(a).style.left=rand+"%"
aew.appendChild(a).style.top=rand1+"%"
aew.appendChild(a).style.backgroundColor=getRandomColor()
a.onmouseenter = function e (){
  num1 = Number(98)
num2 = Number(1)
var rand = getRandomInt(num1,num2)
var rand1 = getRandomInt(num2,num1)
  var a = document.createElement("div")
a.style.backgroundColor="red"
aew.appendChild(a).style.left=rand+"%"
aew.appendChild(a).style.top=rand1+"%"

}

i++;

  }
}

function bolasAdd(){
  
   document.addEventListener('mousemove', e =>{
    bolinha.setAttribute("style", "top: "+(e.pageY -10 )+"px; left: "+(e.pageX-10 )+"px; position: absolute;")
    if(c==1){
    var element = document.createElement("div");
    element.setAttribute("id","clone")
    aew.appendChild(element).style.top=(e.pageY -10 )+"px"
    aew.appendChild(element).style.left=(e.pageX-10)+"px"
    aew.appendChild(element).style.backgroundColor=getRandomColor()
    
  c = -1 //  <<< DESABILITA ESSA VARIAVEL PARA QUE A BOLA SEGUE O MOUSE SOLTANDO INFINITAS BOLAS
    /*if(d >= 10){  LIMITADOR DE BOLINHAS
    aew.removeChild(element)
  
    }*/
    }else{

    }
  })
  num1 = Number(98)
num2 = Number(1)
var rand = getRandomInt(num1,num2)
var rand1 = getRandomInt(num2,num1)
 // var element = document.createElement("div"); 
 // aew.appendChild(element)
  //aew.appendChild(element).style.left=rand1+"%"
  
 // aew.appendChild(element).style.top=rand1+"%"
  }
/*document.addEventListener('mousemove', e =>{
  bolinha.setAttribute("style", "top: "+(e.pageY -10 )+"px; left: "+(e.pageX-10 )+"px; position: absolute;")
})*/
var d = 0
var c = 0
  document.addEventListener('click', () => {
    
    bolas(10)
    bolasAdd()
    c = 1 
    d = d+1
   })

   











