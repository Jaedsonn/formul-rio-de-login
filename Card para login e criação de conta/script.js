//Primeiro card, o card de login
const cnt = document.querySelector("#contL")
const frmL = document.querySelector("#frmL")
const create = document.querySelector("#criar")

//Segundo card, o card de criar
const entrar = document.querySelector("#entrar")
const frmC = document.querySelector("#formCreate")
const cntC = document.querySelector("#contCreate")

frmL.addEventListener("submit", (e)=>{
    e.preventDefault()  //evita o envio do form
})

frmC.addEventListener("submit", (e)=>{
    e.preventDefault()
})

create.addEventListener("click", ()=>{  //cria um evento ao clicar no link onde se cria uma conta
  cnt.style.height = "0"
 frmL.style.height = "0"
 frmL.style.visibility = "collapse"

 frmC.style.height = "20rem"
 cntC.style.height = "28rem"
 frmC.style.visibility = "visible"
 frmC.style.opacity = "1"
})

entrar.addEventListener("click", ()=>{  //cria um evento ao clicar no link onde se entra numa conta
cnt.style.height = "19rem"
 frmL.style.height = "13rem"
 frmL.style.visibility = "visible"
 frmL.style.transition = "all 0.7s"

 frmC.style.transition = "all 0.5s"
 cntC.style.transition = "all 0.6s"
 frmC.style.height = "0"
 cntC.style.height = "0"
 frmC.style.visibility = "collapse"
 frmC.style.opacity = "0"
})