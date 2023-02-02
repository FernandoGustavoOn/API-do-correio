var textcep = document.querySelector("#cep")
var logradouro = document.querySelector("#logradouro")
var bairro = document.querySelector("#bairro")
var localidade = document.querySelector("#localidade")
var uf = document.querySelector("#uf")
var ibge = document.querySelector("#ibge")
var ddd = document.querySelector("#ddd")

textcep.addEventListener('focusout', async()=>{
    let resposta = await fetch(`https://viacep.com.br/ws/${textcep.value}/json/`)
    let dados = await resposta.json()

    logradouro.value = dados.logradouro
    bairro.value = dados.bairro
    localidade.value = dados.localidade
    uf.value = dados.uf
    ibge.value = dados.ibge
    ddd.value = dados.ddd
})