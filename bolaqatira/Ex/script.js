
var bola = window.document.getElementById('bola')
bola.innerHTML=`\u{1F4AB}`
var bolaTiro = window.document.getElementById('bolaTiro')
bolaTiro.setAttribute('id','cc')
var mesa = window.document.getElementById('mesa')
var pino = document.getElementById('pino')
var direcaopino = -34
var vetor = []
var direcao = 34
var parar = 0
var t = 0
var v = 0
var direcaovolta = 0
function fire(){
  for(let i=0; i < 34; i++){
    var q = document.getElementById('cc')
    q.innerHTML= `\u{1F4A3}`
    direcao ++
    var x =q.style.top=direcao+"%"
    if(direcao == -35){
      direcao = 34
    }
  }  
  direcao = direcao -35
 
if (t < 68){
  
  t++

 parar= setTimeout(fire,35)
}else{
 clearTimeout(parar)
 t = 0
q.style.backgroundColor="rgb(133, 133, 247)"
q.innerHTML= `\u{1F4A5}`
}

}


function move(){
 
  for(let i=0; i < 34; i++){
    var pino = document.getElementById('pino')
    direcaopino ++
    console.log(direcaopino)
    var x =pino.style.right=direcaopino+"%"
    if(direcaopino == -35){
    
    }
    else if(x == "100%"){

      direcaopino--
      direcaovolta++
      var x =pino.style.left=direcaovolta+"%"
  
    }else if (direcaovolta == "100"){
     
      alert(direcaopino)
      direcaopino = 99
      direcaovolta = -34
      
      var x =pino.style.left=direcaopino+"%"
    }
  }  

  direcaopino = direcaopino -33
  parar= setTimeout(move,35)
}


/*
for(let i=0; i < 84; i++){
 
  var pino = document.getElementById('pino')
  
  direcaopino ++
   pino.style.right=direcaopino+"%" 
   
} 
if(direcaopino == 0 ){
  for(let i=0; i < 84; i++){
  direcaopino = 84  

  var s = pino.style.left=direcaovolta+"%"    
  if(direcaovolta == 0){
    direcaovolta =83
    alert(direcaovolta)
  }
}
}
//Ddirecaovolta = direcaovolta - 84
direcaopino = direcaopino -85
//direcaovolta = direcaovolta++
setTimeout(move,50) 
}

 








   /*
 if (v < 168){
   v++
  
 var parapino = setTimeout(move,50)
 }else{
  clearTimeout(parapino)
 
  v = 0

 }

}





*/
