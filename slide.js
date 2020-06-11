let time = 4000,
    currentImageIndex = 0,
    imagens = document
    .querySelectorAll('#slider img')

    max = imagens.length

function next(){
    imagens[currentImageIndex]
        .classList.remove('selecionada')

    currentImageIndex++

    if(currentImageIndex >= max){
        currentImageIndex = 0
    }
    imagens[currentImageIndex]
        .classList.add('selecionada')
        
}
function start(){
    setInterval(() => {
        next()
    }, time);
}
window.addEventListener("load", start())
