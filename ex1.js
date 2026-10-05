// davi de assis fabricio

class Fila {
  #itens = [];

  enfileirar(nome) {
    this.#itens.push(nome);
  }

  desenfileirar() {
    if (this.vazia()) return null;
    return this.#itens.shift();
  }

  primeiro() {
    return this.vazia() ? null : this.#itens[0];
  }

  vazia() {
    return this.#itens.length === 0;
  }

  tamanho() {
    return this.#itens.length;
  }
}

const f = new Fila();
f.enfileirar('Ana');
f.enfileirar('Bruno');
f.enfileirar('Carla');

console.log(f.tamanho());
console.log(f.primeiro());
console.log(f.desenfileirar());
console.log(f.desenfileirar());
console.log(f.tamanho());
console.log(f.desenfileirar());
console.log(f.desenfileirar());
console.log(f.vazia());
