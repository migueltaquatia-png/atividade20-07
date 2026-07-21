function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno a ser cadastrado:");
    if (!nome) return; // Evita erros se o usuário cancelar o prompt

    if (buscarAluno(nome)) {
        alert("Este aluno já está cadastrado!");
        return;
    }

    alunos.push({ nome: nome, notas: [] });
    alert("Aluno cadastrado com sucesso!");
}