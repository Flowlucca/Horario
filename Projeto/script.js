function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
msg.innerHTML = `Agora São ${hora} Horas.`
if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'manha.jpg'
    document.body.style.background ='#e0c77b'
} else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#e2853f'
}else{
    //Boa noite
    img.src = 'noite.jpg'
    document.body.style.background = '#041016'
}
}

