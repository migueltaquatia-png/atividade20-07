function buscarAluno(nome) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
            return alunos[i]; 
        }
    }
    return undefined; 
}
function calcularMedia(aluno) {
    if (aluno.notas.length === 0) {
        return 0; 
    }
    
    let soma = 0;
    for (let i = 0; i < aluno.notas.length; i++) {
        soma += aluno.notas[i];
    }
    
    return soma / aluno.notas.length;
}
function situacao(media) {
    if (media >= 6) {
        return "APROVADO";
    } else if (media >= 4) {
        return "RECUPERACAO";
    } else {
        return "REPROVADO";
    }
}
function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno a ser cadastrado:");
    if (!nome) return; 

    if (buscarAluno(nome)) {
        alert("Este aluno já está cadastrado!");
        return;
    }

    alunos.push({ nome: nome, notas: [] });
    alert("Aluno cadastrado com sucesso!");
}
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
function totalDeAlunos() {
    alert("Total de alunos cadastrados: " + alunos.length);
}
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
function menuPrincipal() {
    let opcao;
    do {
        opcao = Number(prompt("=== SISTEMA ESCOLAR ===\n1 - Cadastro\n2 - Notas\n3 - Relatórios\n0 - Sair"));
        switch (opcao) {
            case 1: submenuCadastro(); break;
            case 2: submenuNotas(); break;
            case 3: submenuRelatorios(); break;
            case 0: alert("Encerrando o sistema. Até logo!"); break;
            default: alert("Opção inválida!");
        }
    } while (opcao !== 0);
}
 menuPrincipal();