let modelo;
let gola;
let tecido;
let linkbonito;
let peganome;
let validarInput = false;
let p1 , p2 , p3;
/*function perguntaNome() {
    peganome = prompt('Qual o seu nome?');
    while (peganome === '' || peganome === null) {
        alert('digite um nome !!!');
        peganome = prompt('Qual o seu nome?');
    }

}
perguntaNome();*/
function tipo1(pega) {
    modelo = document.querySelector('.grande .borda')
    if (modelo !== null) {
        modelo.classList.remove('borda')
    }
    pega.classList.add('borda')
    p1= pega.parentNode.querySelector('.nome').innerHTML
    console.log(p1)

    modelo = pega.querySelector('.grande .direita img')
    mudarBotao()
}

function tipo2(pega2) {
    gola = document.querySelector('.grande2 .borda')
    if (gola !== null) {
        gola.classList.remove('borda')
    }
    pega2.classList.add('borda')

    gola = pega2.querySelector('.grande2 .direita img')
    p2= pega2.parentNode.querySelector('.nome').innerHTML
    console.log(p2)

    mudarBotao()
}

function tipo3(pega3) {
    tecido = document.querySelector('.grande3 .borda')
    if (tecido !== null) {
        tecido.classList.remove('borda')
    }
    pega3.classList.add('borda')
    p3= pega3.parentNode.querySelector('.nome').innerHTML
    console.log(p3)
    

    tecido = pega3.querySelector('.grande3 .direita img')
    mudarBotao()
}
function inputVazio(){
    const cavalor = document.querySelector('.input').value
    /* é preciso dar um click fora para liberar o input*/
    if(cavalor !== "" && cavalor !== undefined && cavalor !== null) {
        validarInput = true;
    }else {
        validarInput = false
    }
    mudarBotao()
}

function mudarBotao() {
    if (modelo !== undefined && gola !== undefined && tecido !== undefined && validarInput === true ) {
        const muda = document.querySelector('.botao');
        muda.classList.add('ativo');
        muda.removeAttribute('disabled');
    }
}

mudarBotao()

/*let roupa = []
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
function renderizarRoupa() {
    const ul = document.querySelector(".catalogo")
    ul.innerHTML = "";
    console.log(roupa)
    let template = "";
    for (let i = 0; i < roupa.length; i++) {
        template += `
     <li class="peca" onclick="pegablusa()" ><img src="${roupa[i].image}"><p>${roupa[i].owner}</p></li>
        `
    }
    ul.innerHTML = template;
}

function pegaLink() {
    const cavalor = document.querySelector('.input').value
    const fenviar = {
        model: "t-shirt",
        neck: "v-neck",
        material: "silk",
        image: cavalor,
        owner: peganome,
        author: peganome
    };
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', fenviar);
    promise.catch(erroEnviarPedido);
    promise.then(sucessoEnviarPedido);
} 

 function sucessoEnviarPedido() {
console.log(sucessoEnviarPedido)
alert("encomenda feita")
setInterval(()=>{
pegaRoupa()
},3000)
}

function erroEnviarPedido() {
console.log(erroEnviarPedido)
alert('Ops, não conseguimos processar sua encomenda')
}

function pegablusa() {
alert('voce pegou !')
} */


