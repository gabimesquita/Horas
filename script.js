function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

if(hora>=0 && hora<11){
    msg.innerHTML = `Bom dia! Agora são ${hora}:${min}.`
    img.src="manha.png"    
    document.body.style.background='#e2cd9f'
    }else if(hora>=11 && hora<=17){
    msg.innerHTML = `Boa tarde! Agora são ${hora}:${min}.`
    img.src="tarde.jpg"
    document.body.style.background='#b9846f'
    }else{
    msg.innerHTML = `Boa noite! Agora são ${hora}:${min}.`
    img.src="noite.jpg"
    document.body.style.background='#515154'
}
}
