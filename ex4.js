// davi de assis fabricio

const alunos = [
  { nome: 'Bruno', nota: 7.5, idade: 18 },
  { nome: 'Ana', nota: 9.2, idade: 17 },
  { nome: 'Carla', nota: 7.5, idade: 19 },
  { nome: 'Diego', nota: 6.0, idade: 18 },
  { nome: 'Édson', nota: 9.2, idade: 20 },
  { nome: 'Fabiana', nota: 8.1, idade: 17 },
];

const porNota = [...alunos].sort((a, b) => b.nota - a.nota);
const porNome = [...alunos].sort((a, b) => a.nome.localeCompare(b.nome));
const porNotaENome = [...alunos].sort(
  (a, b) => b.nota - a.nota || a.nome.localeCompare(b.nome),
);
const tresPrimeiros = [...alunos]
  .sort((a, b) => b.nota - a.nota || a.nome.localeCompare(b.nome))
  .slice(0, 3);

console.log('Listagem (a)');
for (const aluno of porNota) console.log(aluno.nome + ' (' + aluno.nota + ')');

console.log('Listagem (b)');
for (const aluno of porNome) console.log(aluno.nome + ' (' + aluno.nota + ')');

console.log('Listagem (c)');
for (const aluno of porNotaENome) console.log(aluno.nome + ' (' + aluno.nota + ')');

console.log('Listagem (d)');
for (const aluno of tresPrimeiros) console.log(aluno.nome + ' (' + aluno.nota + ')');
