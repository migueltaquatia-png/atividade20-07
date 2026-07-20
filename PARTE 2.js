let alunos = [];

function buscarAluno(nome) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome === nome) {
            return alunos[i];
        }
    }
    return null;
}

function cadastrarAluno() {
    let nome = prompt("Digite o nome do novo aluno:");
    if (!nome) return; 

    let alunoExistente = buscarAluno(nome);
    if (alunoExistente) {
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

    let texto = "Lista de Alunos Cadastrados:\n\n";
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
        alert("Aluno não encontrado!");
        return;
    }

    let posicao = alunos.indexOf(aluno);
    alunos.splice(posicao, 1);
    alert("Aluno removido com sucesso!");
}

let opcao = "";

while (opcao !== "0") {
    opcao = prompt("Escolha:\n1 - Cadastrar Aluno\n2 - Listar Alunos\n3 - Remover Aluno\n0 - Sair");

    if (opcao === "1") {
        cadastrarAluno();
    } else if (opcao === "2") {
        listarAlunos();
    } else if (opcao === "3") {
        removerAluno();
    } else if (opcao !== "0") {
        alert("Opção inválida!");
    }
}