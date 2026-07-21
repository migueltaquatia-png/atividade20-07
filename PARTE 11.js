function listarAprovados() {
    let texto = "Alunos Aprovados:\n\n";
    let encontrou = false;

    for (let i = 0; i < alunos.length; i++) {
        let media = calcularMedia(alunos[i]);
        if (situacao(media) === "APROVADO") {
            texto += "- " + alunos[i].nome + " (Média: " + media.toFixed(2) + ")\n";
            encontrou = true;
        }
    }

    if (!encontrou) {
        alert("Ainda não há alunos aprovados nesta turma.");
    } else {
        alert(texto);
    }
}