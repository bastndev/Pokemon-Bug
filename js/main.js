const list = document.querySelectorAll('.list')
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click',activeLink))

// Carata   
let pokemon =document.getElementById("pokemon")    
let pika =document.getElementById("pika")
let chari =document.getElementById("chari")
let bulba =document.getElementById("bulba")
let farf =document.getElementById("farf")
let imgchange =document.getElementById("imgchange")


pika.onclick = function(){
    imgchange.src = "/assets/img/pika.png"
}
chari.onclick = function(){
    imgchange.src = "/assets/img/chari.png"
}
pokemon.onclick = function(){
    imgchange.src = "/assets/img/pokemon.png"
}
farf.onclick = function(){
    imgchange.src = "/assets/img/farfe.png"
}
bulba.onclick = function(){
    imgchange.src = "/assets/img/bulba.png"
}



