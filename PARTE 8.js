function verBoletim() {
    let nome = prompt("Digite o nome do aluno para ver o boletim:");
    if (!nome) return;

    let aluno = buscarAluno(nome);
    if (!aluno) {
        alert("Aluno não encontrado.");
        return;
    }

    let media = calcularMedia(aluno);
    let sit = situacao(media);

    alert(
        "Boletim de " + aluno.nome + "\n\n" +
        "Notas: " + aluno.notas.join(", ") + "\n" +
        "Média: " + media.toFixed(2) + "\n" +
        "Situação: " + sit
    );
}