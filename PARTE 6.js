function removerAluno() {
    let nome = prompt("Digite o nome do aluno que deseja remover:");
    if (!nome) return;

    let aluno = buscarAluno(nome);
    
    if (!aluno) {
        alert("Aluno não encontrado.");
        return;
    }

    let posicao = alunos.indexOf(aluno);
    alunos.splice(posicao, 1);
    alert("Aluno removido com sucesso!");
}