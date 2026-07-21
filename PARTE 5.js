function listarAlunos() {
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado.");
        return;
    }

    let texto = "Alunos Cadastrados:\n\n";
    for (let i = 0; i < alunos.length; i++) {
        texto += "- " + alunos[i].nome + "\n";
    }
    
    alert(texto);
}