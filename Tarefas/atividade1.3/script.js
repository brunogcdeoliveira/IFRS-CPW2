const calcular = document.getElementById("calcular");

function boletim() {
    const nome = document.getElementById("nome").value;
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;
    const resultado = document.getElementById("resultado");
    
    const media = ((parseInt(nota1)+parseInt(nota2)+parseInt(nota3))/3).toFixed(2);
    
    // document.querySelector(".nomeAluno").innerHTML = nome;
    
    if (media >= 8) {
        resultado.textContent = `A média final do aluno ${nome} é ${media}. O aluno foi aprovado`;
    } else {
        resultado.textContent = `A média final do aluno ${nome} é ${media}. O aluno foi reprovado`;
        
    }
}

calcular.addEventListener("click", boletim);