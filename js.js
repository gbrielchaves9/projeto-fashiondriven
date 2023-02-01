let modelo;
let gola;
let tecido;
let linkbonito
function tipo1(pega) {
    modelo = document.querySelector('.grande .borda')
    if (modelo !== null) {
        modelo.classList.remove('borda')
    }
    pega.classList.add('borda')

    modelo = pega.querySelector('.grande .direita img')
    console.log(modelo)
    mudarBotao()
}
function tipo2(pega2) {
    gola = document.querySelector('.grande2 .borda')
    if (gola !== null) {
        gola.classList.remove('borda')
    }
    pega2.classList.add('borda')

    gola = pega2.querySelector('.grande2 .direita img')
    console.log(gola)
    mudarBotao()
}

function tipo3(pega3) {
    tecido = document.querySelector('.grande3 .borda')
    if (tecido !== null) {
        tecido.classList.remove('borda')
    }
    pega3.classList.add('borda')

    tecido = pega3.querySelector('.grande3 .direita img')
    console.log(tecido)
    mudarBotao()
}


function mudarBotao() {
    if (modelo !== undefined && gola !== undefined && tecido !== undefined) {
        const muda = document.querySelector('.botao');
        muda.classList.add('ativo');
        muda.removeAttribute('disabled');
    }
}
mudarBotao()
function pegaLink() {
    alert("ok")
}

let roupa = []
function pegaRoupa() {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    promise.then((res) => {
        roupa = res.data;
        renderizarRoupa();
    })
    promise.catch((err) => {
        console.log(err)
    })
}
pegaRoupa()
function renderizarRoupa() {//renderiza quando a promise da certo ! percorre o array adicionando i++
    const ul = document.querySelector(".catalogo")
    ul.innerHTML = "";
    console.log(roupa)
    let template = "";
    for (let i = 0; i < roupa.length; i++) {
        template += `
     <li class="peca"><img src="${roupa[i].image}"><p>${roupa[i].owner}</p></li>
        `
        ul.innerHTML += template;
    }
}


/*function pergarDados(resposta) { 
    console.log(resposta)
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    promessa.then(dadosChegaram) 
    promessa.then(erroEMcarregar) 


}
pergarDados()  

function dadosChegaram(resposta) { 
    roupa = resposta.data;
   
}
function erroEMcarregar(erronaResposta){
    console.log(erronaResposta)
}*/
