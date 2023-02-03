let modelo;
let gola;
let tecido;
let linkbonito;
let peganome;
let validarInput = false;
let p1
function perguntaNome() {
    peganome = prompt('Qual o seu nome?');
    while (peganome === '' || peganome === null) {
        alert('digite um nome !!!');
        peganome = prompt('Qual o seu nome?');
    }
}
perguntaNome();
function tipo1(pega) {
      modelo = pega.nextElementSibling.innerHTML;
      const  recebe1 = document.querySelector('.grande .borda')
    if (recebe1!== null) {
        recebe1.classList.remove('borda')
    }
    pega.classList.add('borda')
    mudarBotao()
   /* elemento1= pega.parentNode
    modelo = elemento1.querySelector('p').innerHTML; 
   console.log(modelo)
    mudarBotao()*/
}
function tipo2(pega) {
    gola = pega.nextElementSibling.innerHTML;
    const recebe2=document.querySelector('.grande2 .borda')
    if (recebe2!== null) {
        recebe2.classList.remove('borda')
    }
    pega.classList.add('borda')
    mudarBotao()
    
   /* gola = pega2.querySelector('.grande2 .direita img')
    p2 = pega2.parentNode.querySelector('.nome').innerHTML
    console.log(p2)

    mudarBotao()*/
}

function tipo3(pega) {
    tecido= pega.nextElementSibling.innerHTML;
    const recebe3=document.querySelector('.grande3 .borda')
    if (recebe3!== null) {
        recebe3.classList.remove('borda')
    }
    pega.classList.add('borda')
    mudarBotao()
    /*p3 = pega3.parentNode.querySelector('.nome').innerHTML
    console.log(p3)


    tecido = pega3.querySelector('.grande3 .direita img')
    mudarBotao()*/
}
function inputVazio() {
    const cavalor = document.querySelector('.input').value
    /* é preciso dar um click fora para liberar o input*/
    if (cavalor !== "" && cavalor !== undefined && cavalor !== null) {
        validarInput = true;
    } else {
        validarInput = false
    }
    mudarBotao()
}

function mudarBotao() {
    if (modelo !== undefined && gola !== undefined && tecido !== undefined && validarInput === true) {
        const muda = document.querySelector('.botao');
        muda.classList.add('ativo');
        muda.removeAttribute('disabled');
    }
}

mudarBotao()





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
function renderizarRoupa() {
    const ul = document.querySelector(".catalogo")
    ul.innerHTML = "";
    console.log(roupa)
    let template = "";
    for (let i = 0; i < roupa.length; i++) {
        template += `
     <li class="peca" onclick="pegablusa()" >
     <img src="${roupa[i].image}">
     <p>${roupa[i].owner}</p>
     </li>`
    }
    ul.innerHTML = template;
}
function mudaNomeModelo() {
    if(modelo === "T-shirt") {
        modelo = "t-shirt";
    } else if(modelo === "Camiseta") {
        modelo = "top-tank";
    } else if(modelo === "Manga longa") {
        modelo = "long";
    }
}
function mudaNomeGola() {
    if(gola === "Gola V") {
        gola = "v-neck";
    } else if(gola === "Gola redonda") {
        gola = "round";
    } else if(gola === "Gola polo") {
        gola = "polo";
    }
}
function mudaNomeTecido() {
    if(tecido === "Seda") {
        tecido = "silk";
    } else if(tecido === "Algodão") {
        tecido = "cotton";
    } else if(tecido === "Poliéster") {
        tecido = "polyester";
    }
}
function pegaLink() {
    mudaNomeGola();
    mudaNomeTecido();
    mudaNomeModelo();
        const cavalor = document.querySelector('.input').value
        let fenviar = {
            model: modelo,
            neck: gola,
            material: tecido,
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
        setInterval(() => {
            pegaRoupa()
        }, 3000)
    }
    
    function erroEnviarPedido() {
        console.log(erroEnviarPedido)
        alert('Ops, não conseguimos processar sua encomenda')
    }
    function pegablusa() {
        alert('voce pegou !')
    }