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