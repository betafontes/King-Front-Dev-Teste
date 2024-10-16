// Definindo a chave no localStorage onde a to-do será armazenada
const localStorageKey = 'to-do-list';

function newTask() {
  let input = document.getElementById('new-task');

  // Verificando se o campo está vazio
  if (!input.value) {
    alert('Digite algo para inserir em sua lista');
  } else {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]');

    // Adicionando uma nova task
    values.push({
      name: input.value,
    });
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    input.value = '';

    // atualiza a lista
    showValues();
  }
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
  let list = document.getElementById('to-do');
  list.innerHTML = '';

  for (let i = 0; i < values.length; i++) {

    // Adiciona o item com um botão para removê-la
    list.innerHTML += `
      <li>
        ${values[i].name}
        <button id="btn" onclick="removeItem('${values[i].name}')">ok</button>
      </li>`;
  }
}

function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
  let index = values.findIndex((x) => x.name == data);

  // Remove o item do array
  values.splice(index, 1);

  localStorage.setItem(localStorageKey, JSON.stringify(values));
  showValues();
}

showValues();
