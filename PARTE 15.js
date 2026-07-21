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