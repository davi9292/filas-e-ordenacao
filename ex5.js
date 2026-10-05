// davi de assis fabricio

class FilaPrioridade {
  #itens = [];

  enfileirar(paciente, prioridade) {
    const novoItem = { paciente, prioridade };
    let posicao = 0;

    while (
      posicao < this.#itens.length &&
      this.#itens[posicao].prioridade <= prioridade
    ) {
      posicao++;
    }

    this.#itens.splice(posicao, 0, novoItem);
  }

  desenfileirar() {
    if (this.#itens.length === 0) return null;
    return this.#itens.shift();
  }
}

const fila = new FilaPrioridade();
fila.enfileirar('Marcos', 3);
fila.enfileirar('Júlia', 1);
fila.enfileirar('Pedro', 3);
fila.enfileirar('Rita', 2);
fila.enfileirar('Iara', 1);

const atendidos = [];
let rodada = 0;

while (true) {
  const paciente = fila.desenfileirar();
  if (paciente === null) break;

  rodada++;
  atendidos.push({
    paciente: paciente.paciente,
    prioridade: paciente.prioridade,
    espera: rodada - 1,
  });
}

atendidos.sort((a, b) => b.espera - a.espera);

console.log('Relatório por tempo de espera');
for (const item of atendidos) {
  console.log(item.paciente + ': ' + item.espera + ' rodada(s)');
}
