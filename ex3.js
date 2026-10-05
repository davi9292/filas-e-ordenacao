// davi de assis fabricio

function bubbleSort(arr) {
  const ordenado = [...arr];
  let comparacoes = 0;
  let trocas = 0;

  for (let fim = ordenado.length - 1; fim > 0; fim--) {
    let houveTroca = false;

    for (let i = 0; i < fim; i++) {
      comparacoes++;
      if (ordenado[i] > ordenado[i + 1]) {
        [ordenado[i], ordenado[i + 1]] = [ordenado[i + 1], ordenado[i]];
        trocas++;
        houveTroca = true;
      }
    }

    if (!houveTroca) break;
  }

  return { ordenado, comparacoes, trocas };
}

function selectionSort(arr) {
  const ordenado = [...arr];
  let comparacoes = 0;
  let trocas = 0;

  for (let inicio = 0; inicio < ordenado.length - 1; inicio++) {
    let menor = inicio;

    for (let i = inicio + 1; i < ordenado.length; i++) {
      comparacoes++;
      if (ordenado[i] < ordenado[menor]) menor = i;
    }

    if (menor !== inicio) {
      [ordenado[inicio], ordenado[menor]] = [ordenado[menor], ordenado[inicio]];
      trocas++;
    }
  }

  return { ordenado, comparacoes, trocas };
}

function insertionSort(arr) {
  const ordenado = [...arr];
  let comparacoes = 0;
  let trocas = 0;

  for (let i = 1; i < ordenado.length; i++) {
    const valorAtual = ordenado[i];
    let j = i - 1;

    while (j >= 0) {
      comparacoes++;
      if (ordenado[j] > valorAtual) {
        ordenado[j + 1] = ordenado[j];
        trocas++;
        j--;
      } else {
        break;
      }
    }

    ordenado[j + 1] = valorAtual;
  }

  return { ordenado, comparacoes, trocas };
}

const base = [29, 10, 14, 37, 14, 2, 8];
const jaOrdenado = [2, 8, 10, 14, 14, 29, 37];
const invertido = [37, 29, 14, 14, 10, 8, 2];

const algoritmos = {
  bubble: bubbleSort,
  selection: selectionSort,
  insertion: insertionSort,
};

const vetores = { base, jaOrdenado, invertido };
const resultados = [];

for (const [nome, algoritmo] of Object.entries(algoritmos)) {
  for (const [rotulo, vetor] of Object.entries(vetores)) {
    const resultado = algoritmo(vetor);
    resultados.push({
      algoritmo: nome,
      vetor: rotulo,
      comparações: resultado.comparacoes,
      trocas: resultado.trocas,
    });
  }
}

console.table(resultados);
