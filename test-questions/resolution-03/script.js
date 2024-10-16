document.querySelector('h1').style.color = '#42d1d1de';

function converter() {
  const valorReal = document.getElementById('valorReal').value;
  const taxa = 5.58;

  // Verifica se o está vazio ou é um número válido
  if (!valorReal || isNaN(valorReal)) {
    alert('Por favor, insira um valor válido em reais.');
    return;
  }

  const valorDolar = valorReal / taxa;

  const valor = valorDolar.toFixed(2);

  const resultado = document.getElementById('resultado');
  resultado.textContent = `O valor em dólar é ${valor} doláres`;
}
