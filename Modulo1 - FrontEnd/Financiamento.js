//Variaveis para simulação
var valor = document.getElementById('iValor');
var prazoAno = document.getElementById('iPrazoAnos');
var jurosAno = document.getElementById('dJurosAnos');
var corpoTabela = document.querySelector("tbody");    
var button = false;

    function EstadoButton(){
        if (button == false){
            this.Calcular();
            button = true;
    }else{
        alert("Clique em limpar para nova simulação!")
    }
}

    function Calcular(){
    //Calculo de juros anual para mensal
    var dJurosMeses = Math.pow(1 + parseFloat(jurosAno.value),1/12) - 1;
    document.getElementById("dJurosMeses").value = dJurosMeses.toFixed(6);
    //Calculo anos para meses
    var iPrazosMeses = prazoAno.value * 12;
    document.getElementById("iPrazosMeses").value = iPrazosMeses;
    //Calculo juros acumulados
    var dJurosAcumulados = dJurosMeses * iPrazosMeses;
    document.getElementById("dJurosAcumulados").value = dJurosAcumulados.toFixed(4);
    
    this.criarTabela(iPrazosMeses,dJurosMeses);
    }

    function criarTabela(iPrazosMeses,dJurosMeses){

    var ValorPrestacao = valor.value / iPrazosMeses;
    var saldoDevedor = valor.value;
    var juros = [];
    var total = 0;

    for(var i = 0; i < 5; i++){
        var numprestacao = i + 1;
        juros[i] = saldoDevedor * dJurosMeses;
        total = ValorPrestacao + juros[i];

        var linha = document.createElement("tr");
        var campo_numPrestacao = document.createElement("td");
        var campo_Amortizacao = document.createElement("td");
        var campo_Juros = document.createElement("td");
        var campo_Total = document.createElement("td");

        var texto_numPrestacao = document.createTextNode(numprestacao);
        var texto_Amortizacao = document.createTextNode(ValorPrestacao.toFixed(2));
        var texto_Juros = document.createTextNode(juros[i].toFixed(2));
        var texto_Total = document.createTextNode(total.toFixed(2));

        campo_numPrestacao.appendChild(texto_numPrestacao);
        campo_Amortizacao.appendChild(texto_Amortizacao);
        campo_Juros.appendChild(texto_Juros);
        campo_Total.appendChild(texto_Total);

        linha.appendChild(campo_numPrestacao);
        linha.appendChild(campo_Amortizacao);
        linha.appendChild(campo_Juros);
        linha.appendChild(campo_Total);

        corpoTabela.appendChild(linha);

        saldoDevedor = saldoDevedor - ValorPrestacao;
        total = 0;
    }

}




    







