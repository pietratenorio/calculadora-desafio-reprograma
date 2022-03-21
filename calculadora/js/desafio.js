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

    
         var horasProjeto = valorHora.value * horasProjeto;
    console.log(horasProjeto.value);
    document.getElementById('horas-projeto');

    resultado.innerHTML = "R$" + horasProjeto.toFixed(2);
    
    

};
