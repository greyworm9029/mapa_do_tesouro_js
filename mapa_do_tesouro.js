// Mapa do Tesouro
console.log("Seja Bem-Vindo(a) a Ilha do Tesouro!🏴‍☠️\nSua missao será encontrar o tesouro.💵");
let opcao1 = prompt('Há dois percursos para voce percorrer.\nEscolha qual percurso voce quer. "esquerda"⬅️  ou "direta"➡️  ? ');

if (opcao1 === "esquerda") {
    let opcao2 = prompt("Agora voce está diante de um lago.🏞️\nVoce decide 'nadar'🏊 ou 'esperar'✋ ? ");
    if (opcao2 === 'esperar') {
        let opcao3 = prompt("Voce escolheu esperar e andar pelo terreno.\nVoce encontrou tres portas no caminho: 'vermelha'🔴, 'amarela'🟡 e 'azul'🔵 .\nQual voce vai escolher? ");
        if (opcao3 === 'vermelha') {
            console.log("Voce entrou numa sala dominada pelo fogo e se queimou.🔥  Voce perdeu!");
        } else if (opcao3 === 'amarela') {
            console.log("Parabens! Voce ganhou!👏👏");
        } else if (opcao3 === 'azul') {
            console.log("Voce foi devorado por monstros.🧌  Voce perdeu!");
        } else {
            console.log("Voce perdeu!");
        }
    } else {
        console.log("Voce foi atacado por um monstro.👹  Voce perdeu!");
    }
} else {
    console.log("Voce caiu numa armadilha.🕸️\nVoce perdeu!");
}