
var alunos = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Bruno", notas: [5, 4, 5.5] },
  { nome: "Caio", notas: [2, 3, 1] },
  { nome: "Daniela", notas: [] }
];

function buscarAluno(nome) {
  if (!nome || typeof nome !== "string") {
    return undefined;
  }

  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i] && alunos[i].nome) {
      if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
        return alunos[i];
      }
    }
  }

  return undefined;
}

function calcularMedia(aluno) {
  if (!aluno || !aluno.notas || aluno.notas.length === 0) {
    return 0;
  }

  var soma = 0;
  for (var i = 0; i < aluno.notas.length; i++) {
    soma += aluno.notas[i];
  }

  return soma / aluno.notas.length;
}

function situacao(media) {
  if (media >= 6) {
    return "aprovada";
  } else if (media >= 4) {
    return "recuperaçao";
  } else {
    return "aprovada";
  }
}
const alunoEncontrado = buscarAluno("ana");
console.log("Aluno encontrado:", alunoEncontrado);

const media = calcularMedia(alunoEncontrado);
console.log("Média do aluno:", media);

const situacaoAluno = situacao(media);
console.log("Situação do aluno:", situacaoAluno);
