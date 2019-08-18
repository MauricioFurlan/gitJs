var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
function horas1(){
console.log(`agora são ${hora}:${min}:${seg}`)
}
for(var i = 0; i < 10; i++){
    setTimeout(() => {
        var agora = new Date()
        console.log(`agora são ${hora}:${min}:${seg}`) 
    }, 1000);


}

