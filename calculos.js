const prompt = require("prompt-sync")();
const index = require("./index.js");
var notas = [];
var alunos = [];

for (var i = 0; i < 3; i++) {
  let name = prompt("Informe o nome do aluno: ");
  let nota = parseFloat(prompt("Informa e nota:  "));
  notas.push(nota);
  alunos.push(name);
}

exports.maiorNota = function maiorNota() {
  let maiorNota = 0;
  let aluno = "";
  for (var i = 0; i < notas.length; i++) {
    if (notas[i] > maiorNota) {
      maiorNota = notas[i];
      aluno = alunos[i];
    } else if (notas[i] > maiorNota) {
      maiorNota = notas[i];
    }
  }

  console.log(`O aluno(a) ${aluno} possui a maior nota: ${maiorNota}`);

  return "";
};

exports.menorNota = function menorNota() {
  let menorNota = notas.length;
  let aluno = "";
  for (var i = 0; i < notas.length; i++) {
    if (notas[i] < menorNota) {
      menorNota = notas[i];
      aluno = alunos[i];
    } else if (notas[i] < menorNota) {
      menorNota = notas[i];
    }
  }

  console.log(`O aluno(a) ${aluno} possui a menor nota: ${menorNota}`);

  return "";
};

exports.media = function media() {
  let media = 0;
  for (var i = 0; i < notas.length; i++) {
    media = media + notas[i];
  }

  media = media / notas.length;

  console.log(`A média dos alunos é: ${media}`);

  return "";
};

exports.alunosAprovados = function alunosAprovados() {
  let aprovados = 0;
  for (var i = 0; i < notas.length; i++) {
    if (notas[i] >= 60) {
      aprovados++;
    }
  }

  console.log(`A quantidade de aprovados é de:
   ${aprovados} alunos `);

  return "";
};

exports.AlunosReprovados = function AlunosReprovados() {
  let reprovados = 0;
  for (var i = 0; i < notas.length; i++) {
    if (notas[i] < 60) {
      reprovados++;
    }
  }

  console.log(`A quantidade de reprovados é de:
   ${reprovados} alunos `);

  return "";
};
