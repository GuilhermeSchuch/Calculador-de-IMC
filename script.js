function calcular(){
    let $nome = document.querySelector("#nome").value
    let $peso = document.querySelector("#peso").value
    let $altura = document.querySelector("#altura").value
    let $tabela = document.querySelector("tbody");
    let imc = $peso/(Math.pow($altura, 2));

    $tabela.innerHTML += "<td>" + $nome + "<td>" + Math.ceil(imc);
}

