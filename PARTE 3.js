function situacao(media) {
    if (media >= 6) {
        return "APROVADO";
    } else if (media >= 4) {
        return "RECUPERACAO";
    } else {
        return "REPROVADO";
    }
}