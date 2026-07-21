function lancarNota() {
    let nome = prompt("Digite o nome do aluno para lançar a nota:");
    if (!nome) return;

    let aluno = buscarAluno(nome);
    if (!aluno) {
        alert("Aluno não encontrado.");
        return;
    }

    let nota = Number(prompt("Digite a nota (entre 0 e 10):"));
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Nota inválida!");
        return;
    }

    aluno.notas.push(nota);
    alert("Nota lançada com sucesso!");
}