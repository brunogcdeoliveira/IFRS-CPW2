var $lista = document.querySelector('ul');
var $novoNome = document.querySelector('#novoNome');
var $botao = document.querySelector('#btn');

$botao.addEventListener("click", addNome);

function addNome() {
    var item = `<li> ${$novoNome.value} </li>`;
    $lista.innerHTML = item + $lista.innerHTML;
    $novoNome.value = '';
    $novoNome.focus();
}


