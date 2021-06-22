// var $data = document.getElementById('h1');
// var $data_informada = document.getElementById('#data_informada');
// var $botao = document.getElementById('#btn');

// $botao.addEventListener("click", converteData);

// function converteData() {
//     var dataTexto = `<h1> ${$data_informada.value} </h1>`;
//     $data.innerHTML = dataTexto;
    
// }

function DataExtenso(data_informada) {
    meses = new Array(
        "Janeiro","Fevereiro","Março",
        "Abril","Maio","Junho",
        "Julho","Agosto","Setembro",
        "Outubro","Novembro","Dezembro"
    );

    var dia_informado = data_informada.split('/')[0];
    var mes_informado = data_informada.split('/')[1];
    var ano_informado = data_informada.split('/')[2];
    var data = ano_informado + '-' + mes_informado + '-' + dia_informado;
    var dataInfo = new Date(data);

    var dia = dataInfo.getDate();
    var dias = dataInfo.getDay();
    var mes = dataInfo.getMonth();
    var ano = dataInfo.getFullYear();
    var diaext = dia + " de " + meses[mes] + " de " + ano;
    return diaext;
}
console.log(DataExtenso("15/06/2021"));