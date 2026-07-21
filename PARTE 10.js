function mediaGeralDaTurma() {
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado.");
        return;
    }

    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma += calcularMedia(alunos[i]);
    }

    let mediaGeral = soma / alunos.length;
    alert("A média geral da turma é: " + mediaGeral.toFixed(2));
}