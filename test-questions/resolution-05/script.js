const colorTexts = [
  { color: '#ff99c8', text: 'Desenvolvedora Front-End' },
  { color: '#72ddf7', text: 'Analista de Sistemas' },
  { color: '#b892ff', text: 'Apaixonada por Códigos' },
  { color: '#ffdd55', text: 'UI/UX Design' },
  { color: '#88d4ab', text: 'Gamer, Dorameira e Otaku' },
  { color: '#f46036', text: 'Mãe de Pets' },
];

let index = 0;

// Altera o texto e a cor do elemento 
function changeText() {
  const texts = colorTexts[index];
  const elementText = document.querySelector('.type');

  // Definindo o texto e a cor
  elementText.innerHTML = texts.text;
  elementText.style.color = texts.color;

  // Atualiza o texto, voltando ao início quando chega no final
  index = (index + 1) % colorTexts.length;
}
