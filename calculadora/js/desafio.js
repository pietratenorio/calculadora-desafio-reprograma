console.log ('Hello!! :)');

var valorHora = document.querySelector('#valor-hora');

valorHora.addEventListener('change', function(){
console.log(valorHora.value);

});

var horasProjeto = document.querySelector('#horas-projeto');

horasProjeto.addEventListener('change', function(){
    console.log(horasProjeto.value);

});

 resultado = document.querySelector('#resposta');


function calcular(){

    
         var valorTotal = valorHora * horasProjeto;
    console.log(valorTotal);

    resultado.innerHTML = "R$" + valorTotal.toFixed(2);
    
    

};
