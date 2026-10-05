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

  listar() {
    return this.#itens.map((item) => item.paciente);
  }
}

const t = new FilaPrioridade();
t.enfileirar('Marcos', 3);
t.enfileirar('Júlia', 1);
t.enfileirar('Pedro', 3);
t.enfileirar('Rita', 2);
t.enfileirar('Iara', 1);

console.log(t.listar());
console.log(t.desenfileirar());
console.log(t.desenfileirar());
console.log(t.listar());
