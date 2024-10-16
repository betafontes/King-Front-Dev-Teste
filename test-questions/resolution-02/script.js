function saudacao(nome, sobrenome) {
  return 'Olá, ' + nome + ' ' + sobrenome + ' Seja bem-vindo(a) nesse teste!';
}

document.getElementById('button').addEventListener('click', function () {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  if (nome) {
    alert(saudacao(nome, sobrenome));
  } else {
    alert('Por favor, digite seu nome!!');
  }
});
