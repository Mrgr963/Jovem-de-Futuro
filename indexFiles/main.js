let setaE = document.querySelector(".content .slides .setaE");

let setaD = document.querySelector(".content .slides .setaD");

let imagens = document.querySelectorAll(".content .slides img");

let indicadores = document.querySelectorAll(".slides .indicador");


let imagemAtiva = 0;

setaD.addEventListener("click", function(){
    imagens[imagemAtiva].classList.remove("active");
    indicadores[imagemAtiva].classList.remove("active");
    imagemAtiva = imagemAtiva + 1;
    if (imagemAtiva >= imagens.length) {
        imagemAtiva = 0;
    }
    indicadores[imagemAtiva].classList.add("active");
    imagens[imagemAtiva].classList.add("active");
})


setaE.addEventListener("click", function() {
    imagens[imagemAtiva].classList.remove("active");
    indicadores[imagemAtiva].classList.remove("active");

    imagemAtiva = imagemAtiva - 1;
    if (imagemAtiva < 0) {
        imagemAtiva = imagens.length -1;
    }

    indicadores[imagemAtiva].classList.add("active");
    imagens[imagemAtiva].classList.add("active");
})

