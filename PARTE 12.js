function submenuCadastro() {
    let opcao;
    do {
        opcao = Number(prompt("=== MENU CADASTRO ===\n1 - Cadastrar aluno\n2 - Listar alunos\n3 - Remover aluno\n0 - Voltar"));
        switch (opcao) {
            case 1: cadastrarAluno(); break;
            case 2: listarAlunos(); break;
            case 3: removerAluno(); break;
            case 0: break;
            default: alert("Opção inválida!");
        }
    } while (opcao !== 0);
}

function submenuNotas() {
    let opcao;
    do {
        opcao = Number(prompt("=== MENU NOTAS ===\n1 - Lançar nota\n2 - Ver boletim do aluno\n0 - Voltar"));
        switch (opcao) {
            case 1: lancarNota(); break;
            case 2: verBoletim(); break;
            case 0: break;
            default: alert("Opção inválida!");
        }
    } while (opcao !== 0);
}

function submenuRelatorios() {
    let opcao;
    do {
        opcao = Number(prompt("=== MENU RELATÓRIOS ===\n1 - Total de alunos\n2 - Média geral da turma\n3 - Listar aprovados\n0 - Voltar"));
        switch (opcao) {
            case 1: totalDeAlunos(); break;
            case 2: mediaGeralDaTurma(); break;
            case 3: listarAprovados(); break;
            case 0: break;
            default: alert("Opção inválida!");
        }
    } while (opcao !== 0);
}