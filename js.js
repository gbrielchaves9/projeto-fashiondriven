let modelo;
let gola;
let tecido;

function tipo1(pega){
    const constante=document.querySelector('.grande .borda')
    if(constante !== null){
        constante.classList.remove('borda')
    }
    pega.classList.add('borda')
}

function tipo2(pega){
    const constante=document.querySelector('.grande2 .borda')
    if(constante !== null){
        constante.classList.remove('borda')
    }
    pega.classList.add('borda')
}
function tipo3(pega){
    const constante=document.querySelector('.grande3 .borda')
    if(constante !== null){
        constante.classList.remove('borda')
    }
    pega.classList.add('borda')
}

