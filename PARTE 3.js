let alunos = [];


const buscarAluno = nome => alunos.find(a => a.nome === nome);
const calcularMedia = notas => notas.length ? notas.reduce((a, b) => a + b, 0) / notas.length : 0;
const situacao = media => media >= 7 ? "Aprovado" : media >= 5 ? "Recuperação" : "Reprovado";

function cadastrarAluno() {
    let nome = prompt("Nome do novo aluno:");
    if (!nome) return;
    if (buscarAluno(nome)) return alert("Aluno já cadastrado!");
    
    alunos.push({ nome, notas: [] });
    alert("Aluno cadastrado com sucesso!");
}

function listarAlunos() {
    if (!alunos.length) return alert("Nenhum aluno cadastrado.");
    alert("Lista de Alunos:\n\n" + alunos.map(a => "- " + a.nome).join("\n"));
}

function removerAluno() {
    let nome = prompt("Nome do aluno a remover:");
    let index = alunos.findIndex(a => a.nome === nome);
    
    if (index === -1) return alert("Aluno não encontrado!");
    
    alunos.splice(index, 1);
    alert("Aluno removido!");
}

function lancarNota() {
    let aluno = buscarAluno(prompt("Nome do aluno:"));
    if (!aluno) return alert("Aluno não encontrado!");
    
    let nota = Number(prompt("Digite a nota:"));
    if (nota < 0 || nota > 10 || isNaN(nota)) return alert("Nota inválida!");
    
    aluno.notas.push(nota);
    alert("Nota adicionada!");
}

function verBoletim() {
    let aluno = buscarAluno(prompt("Nome do aluno:"));
    if (!aluno) return alert("Aluno não encontrado!");
    
    let media = calcularMedia(aluno.notas);
    alert(`Nome: ${aluno.nome}\nNotas: ${aluno.notas.join(", ")}\nMédia: ${media.toFixed(2)}\nSituação: ${situacao(media)}`);
}


let opcao;
while ((opcao = prompt("Escolha:\n1-Cadastrar 2-Listar 3-Remover 4-Lançar Nota 5-Boletim 0-Sair")) !== "0") {
    if (opcao === "1") cadastrarAluno();
    else if (opcao === "2") listarAlunos();
    else if (opcao === "3") removerAluno();
    else if (opcao === "4") lancarNota();
    else if (opcao === "5") verBoletim();
    else if (opcao) alert("Opção inválida!");
}