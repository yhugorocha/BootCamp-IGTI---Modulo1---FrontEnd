//Variaveis para simulação
var valor = document.getElementById('iValor');
var prazoAno = document.getElementById('iPrazoAnos');
var jurosAno = document.getElementById('dJurosAnos');


function Calcular(){
    //Calculo de juros anual para mensal
    var dJurosMeses = Math.pow(1 + parseFloat(jurosAno.value),1/12) - 1;
    document.getElementById("dJurosMeses").value = dJurosMeses;
    //Calculo anos para meses
    var iPrazosMeses = prazoAno.value * 12;
    document.getElementById("iPrazosMeses").value = iPrazosMeses;
    //Calculo juros acumulados
    var dJurosAcumulados = dJurosMeses * iPrazosMeses;
    document.getElementById("dJurosAcumulados").value = dJurosAcumulados;    
}





