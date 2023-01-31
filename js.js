let modelo;
let gola;
let tecido;
function tipo1(pega){
    modelo=document.querySelector('.grande .borda')
    if(modelo !== null){
        modelo.classList.remove('borda')
    }
    pega.classList.add('borda')

    modelo=pega.querySelector('.grande .direita img')
    console.log(modelo)
}
function tipo2(pega2){
    gola=document.querySelector('.grande2 .borda')
    if(gola !== null){
        gola.classList.remove('borda')
    }
    pega2.classList.add('borda')

    gola=pega2.querySelector('.grande2 .direita img')
    console.log(gola)
}

function tipo3(pega3){
   tecido=document.querySelector('.grande3 .borda')
    if(tecido !== null){
        tecido.classList.remove('borda')
    }
    pega3.classList.add('borda')

    tecido=pega3.querySelector('.grande3 .direita img')
    console.log(tecido)
}

/*function pegaLink(){
    const linkbonito = document.querySelector('.link').value
    console.log(linkbonito)
    linkbonito.value = '';
    console.log(linkbonito)
} */


function pegaLink(){

}
    
